import express from 'express';
import { GoogleGenAI } from '@google/genai';
import { anshumanPrompt } from '../prompts/anshuman.js';
import { abhimanyuPrompt } from '../prompts/abhimanyu.js';
import { kshitijPrompt } from '../prompts/kshitij.js';

const router = express.Router();

const prompts = {
  anshuman: anshumanPrompt,
  abhimanyu: abhimanyuPrompt,
  kshitij: kshitijPrompt
};

router.post('/', async (req, res) => {
  try {
    const { persona, message } = req.body;

    if (!persona || !message) {
      return res.status(400).json({ error: 'Persona and message are required.' });
    }

    if (!prompts[persona]) {
      return res.status(400).json({ error: 'Invalid persona selected.' });
    }

    if (!process.env.GEMINI_API_KEY) {
       return res.status(500).json({ error: 'API key not configured.' });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: message,
        config: {
            systemInstruction: prompts[persona]
        }
    });

    res.json({ response: response.text });
  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({ error: error.message || 'An error occurred while communicating with the AI. Please try again.' });
  }
});

export default router;
