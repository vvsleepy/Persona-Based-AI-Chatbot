import { useState } from 'react'
import PersonaSwitcher from './components/PersonaSwitcher'
import ChatInterface from './components/ChatInterface'

const personas = [
  { id: 'anshuman', name: 'Anshuman Singh', desc: 'Career-focused, high standards' },
  { id: 'abhimanyu', name: 'Abhimanyu Saxena', desc: 'Strategic, systems thinking' },
  { id: 'kshitij', name: 'Kshitij Mishra', desc: 'Fundamentals-first teacher' }
]

function App() {
  const [activePersona, setActivePersona] = useState(personas[0])

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-pink-50 to-pink-100">

      {/* 🌸 HEADER */}
      <header className="bg-white/70 backdrop-blur-md border-b border-pink-200 px-6 py-4 flex flex-col md:flex-row items-center justify-between z-10 shrink-0 shadow-sm">
        
        {/* 🎀 Title */}
        <h1 className="text-xl md:text-2xl font-semibold text-pink-600 mb-3 md:mb-0 tracking-tight">
          ₊✩‧₊˚౨ৎ˚₊✩‧₊ Persona-Based AI Chatbot ₊✩‧₊˚౨ৎ˚₊✩‧₊

        </h1>

        {/* 🌷 Persona Switcher */}
        <div className="bg-pink-50 p-1 rounded-full shadow-inner border border-pink-200">
          <PersonaSwitcher 
            personas={personas} 
            active={activePersona} 
            onSwitch={(p) => setActivePersona(p)} 
          />
        </div>
      </header>

      {/* 💬 MAIN CHAT AREA */}
      <main className="flex-1 overflow-hidden relative px-3 md:px-6 py-4">
        
        {/* 🌸 Chat container card */}
        <div className="h-full bg-white/80 backdrop-blur-lg rounded-2xl border border-pink-200 shadow-lg overflow-hidden">
          <ChatInterface key={activePersona.id} persona={activePersona} />
        </div>

      </main>
    </div>
  )
}

export default App