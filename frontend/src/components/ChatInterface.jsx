import { useState, useRef, useEffect } from 'react'
import SuggestionChips from './SuggestionChips'
import ReactMarkdown from 'react-markdown'

const suggestionsMap = {
  anshuman: [
    "How to start DSA?",
    "I feel stuck in coding",
    "How to get a high-paying internship?"
  ],
  abhimanyu: [
    "How to build scalable systems?",
    "Should I focus on Dev or DSA?",
    "How to get a high-paying internship?"
  ],
  kshitij: [
    "How to start DSA?",
    "Explain pointers to me",
    "How to prepare for interviews?"
  ]
};

function ChatInterface({ persona }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: `Hello, I am ${persona.name}. ${persona.desc}. What do you want to ask?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (text) => {
    const userMessage = text.trim();
    if (!userMessage) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ persona: persona.id, message: userMessage })
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'API Error');
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Server is busy, try again 💭`, isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <div className="flex flex-col h-full bg-transparent max-w-4xl mx-auto overflow-hidden mt-2">

      {/* 💬 CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            
            <div className={`max-w-[80%] px-5 py-3 rounded-2xl shadow-sm ${
              msg.role === 'user' 
                ? 'bg-pink-400 text-white rounded-br-none' 
                : msg.isError 
                  ? 'bg-red-100 text-red-600 border border-red-200 rounded-bl-none'
                  : 'bg-pink-100 text-gray-700 rounded-bl-none'
            }`}>
              
              {msg.role === 'user' ? (
                <div className="whitespace-pre-wrap">{msg.content}</div>
              ) : (
                <div className="prose prose-sm max-w-none prose-p:my-1 prose-pre:bg-gray-800 prose-pre:text-gray-100">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* ✨ LOADING */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-pink-100 rounded-2xl rounded-bl-none px-4 py-3 flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 🧁 INPUT AREA */}
      <div className="p-4 bg-white/70 backdrop-blur-md border-t border-pink-200 rounded-b-2xl">
        
        {messages.length === 1 && (
          <SuggestionChips 
            suggestions={suggestionsMap[persona.id]} 
            onSelect={(text) => handleSend(text)} 
          />
        )}

        <div className="mt-4 flex items-end space-x-2 bg-pink-50 p-2 rounded-full border border-pink-200 focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-200 transition-all">
          
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Message ${persona.name}...`}
            className="flex-1 bg-transparent border-none resize-none max-h-32 min-h-[44px] p-2 outline-none"
            rows={1}
          />

          <button 
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isLoading}
            className="p-2 mb-1 rounded-full bg-pink-400 text-white hover:bg-pink-500 disabled:bg-gray-300 transition-all flex-shrink-0 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
}

export default ChatInterface;