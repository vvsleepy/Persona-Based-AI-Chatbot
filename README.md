# ✨ Persona-Based AI Chatbot

A full-stack, persona-driven AI chatbot where users can interact with different tech leaders — each with a distinct thinking style, tone, and approach.

---

## 💡 Overview

This project simulates conversations with three unique tech personas:

- **Anshuman Singh** → Career-focused, high standards
- **Abhimanyu Saxena** → Strategic, systems thinking
- **Kshitij Mishra** → Fundamentals-first teaching

Users can switch between personas and experience how the same question gets answered differently based on mindset and expertise.

---

## 🚀 Features

- 🎭 **Persona Switching** — Dynamically switch between 3 AI personalities
- 💬 **Modern Chat UI** — Clean, aesthetic interface with pastel theme
- ⚡ **Real-time Responses** — Powered by Gemini API
- 🧠 **Contextual Suggestions** — Smart prompts to guide conversations
- ✨ **Markdown Rendering** — Structured and readable AI responses
- ⏳ **Typing Indicators** — Smooth chat experience

---

## 🛠 Tech Stack

| Layer    | Technology                        |
| -------- | --------------------------------- |
| Frontend | React.js, Tailwind CSS (v4), Vite |
| Backend  | Node.js, Express.js               |
| AI Model | Gemini API (`@google/genai`)      |

---

## 📸 Screenshots

### 🧠 Abhimanyu Saxena (Systems Thinking)

![Abhimanyu Chat](./assets/abhimanyu.png)

---

### 🎯 Anshuman Singh (Career-Focused)

![Anshuman Chat](./assets/anshuman.png)

---

### 📚 Kshitij Mishra (Fundamentals-First)

![Kshitij Chat](./assets/kshitij.png)

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=3000
GEMINI_API_KEY=your_api_key_here
```

Run backend:

```bash
node index.js
# or
npm start
```

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App runs at:http://localhost:5173
---

## 🧪 How It Works

1. User sends a message
2. Frontend sends request to backend
3. Backend routes it based on selected persona
4. Gemini generates a response with persona context
5. Response is rendered with Markdown styling

---

## 🎨 UI Highlights

- Soft pastel pink aesthetic 🎀
- Rounded chat bubbles & smooth animations
- Glassmorphism-inspired layout
- Clean and distraction-free design

---

## ⚠️ Notes

- Gemini API may occasionally return 503 (high demand) errors
- Retry logic is implemented to handle temporary failures

---

## 🌐 Future Improvements

- 🔁 Streaming responses (like ChatGPT)
- 🧠 Memory-based conversations
- 👤 Persona avatars & animations
- 📱 Mobile UI optimization

---

## 🤝 Contributing

Feel free to fork, improve, and experiment with new personas or UI enhancements!