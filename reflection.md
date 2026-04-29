# Reflection

## What Worked
The division of the project into a clean backend Express API and a frontend React/Vite application worked flawlessly. Utilizing the latest Tailwind CSS (v4) allowed for rapid UI prototyping without the need for complex configuration files. The Persona architecture, leveraging system instructions with the Gemini API (via `@google/genai`), successfully simulated the distinct tones of Anshuman, Abhimanyu, and Kshitij. The structured few-shot prompting ensured that the AI didn't just adopt a personality, but also a specific philosophical approach to answering questions (e.g., Kshitij withholding direct answers in favor of Socratic questioning).

## GIGO Principle (Garbage In, Garbage Out)
The GIGO principle was highly evident during the prompt engineering phase. When the system prompts were initially vague (e.g., "be strict"), the LLM often reverted to a generic, polite assistant tone with just a hint of strictness. It was only when I injected specific constraints ("Do NOT give just code snippets", "Do NOT be overly friendly") and provided concrete few-shot examples that the LLM produced high-quality, persona-accurate outputs. The quality of the persona simulation was directly proportional to the detail, negative constraints, and examples provided in the system instruction.

## Improvements
1. **Streaming Responses**: Currently, the chat waits for the entire generation to finish before rendering. Implementing Server-Sent Events (SSE) or WebSockets to stream the response chunk-by-chunk would significantly improve the perceived performance and UX, making it feel more like a real chat.
2. **Context Memory**: The current implementation resets context or only sends the latest message. Implementing a full conversation history array in the frontend and sending it to the backend would allow the personas to maintain context over a longer conversation.
3. **Database Integration**: Adding a database (like PostgreSQL or MongoDB) to store chat histories would allow users to revisit past conversations and preserve their interactions with the different mentors.
