import './Chatbot.css';
import { useEffect, useState } from 'react';

import { GoogleGenerativeAI } from '@google/generative-ai';
const GEMINI_KEY = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
import myinfo from '../../assets/myinfo';

const Chatbot = () => {
        const [question, setQuestion] = useState('');
        const [answer, setAnswer] = useState('');
        const [typingIntervalId, setTypingIntervalId] = useState(null);

        const genAI = new GoogleGenerativeAI(GEMINI_KEY);
        const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
                systemInstruction: myinfo.myinfo
        });
        const generationConfig = {
                temperature: 1,
                topP: 0.95,
                topK: 64,
                maxOutputTokens: 8192,
                responseMimeType: "text/plain",
        };

        const run = async (userInput) => {
                if (question === '') return;
                const chatContainer = document.querySelector('.chats');
                const userMessage = document.createElement('div');
                userMessage.classList.add('message', 'user');
                userMessage.textContent = question;
                chatContainer.appendChild(userMessage);
                setQuestion('');

                const chatSession = model.startChat({
                        generationConfig,
                        history: [
                                {
                                        role: "user",
                                        parts: [
                                                { text: "tell me about aaditva" },
                                        ],
                                },
                                {
                                        role: "model",
                                        parts: [
                                                { text: "Hi there! I'm Aaditva Vijay Vats, a passionate B.Tech student specializing in Computer Science and Engineering with a focus on Artificial Intelligence. It's great to have you here! \n" },
                                        ],
                                },
                        ],
                });

                const result = await chatSession.sendMessage(userInput);
                setAnswer(result.response.text());
                typeEffect(result.response.text());
        };

        const typeEffect = (text) => {
                const chatContainer = document.querySelector('.chats');
                const botMessage = document.createElement('div');
                botMessage.classList.add('message', 'bot');
                chatContainer.appendChild(botMessage);

                if (typingIntervalId) {
                        clearInterval(typingIntervalId);
                }

                let index = 0;
                const intervalId = setInterval(() => {
                        if (index < text.length) {
                                botMessage.innerHTML += text.charAt(index);
                                index++;
                        } else {
                                clearInterval(intervalId);
                        }
                }, 50);

                setTypingIntervalId(intervalId);
        };

        const handleOpen = () => {
                document.querySelector('.chat-room').classList.remove('hide');
                document.body.style.overflow = 'hidden';
        };

        const handleClose = () => {
                document.querySelector('.chat-room').classList.add('hide');
                document.body.style.overflow = 'auto';
        };

        const generateResponse = () => {
                run(question);
        };

        return (
                <>
                        <div className="chatbot" onClick={handleOpen}></div>
                        <div className="chat-room hide" onClick={(e) => {if(e.target.classList.value === 'chat-room'){handleClose()}}}>
                                <h1>Aaditva AI (Flash 1.5)</h1>
                                <div className="chat-box">
                                        <div className="chats">
                                                <div className="message bot">
                                                        Hi there! I'm Aaditva Vijay Vats. Its great to have you here! 
                                                </div>
                                        </div>
                                        <div className="input-container">
                                                <input
                                                        type="text"
                                                        className="question"
                                                        placeholder="Enter Your Question Here....."
                                                        value={question}
                                                        onChange={(e) => setQuestion(e.target.value)}
                                                />
                                                <button className="send" onClick={generateResponse}>Send</button>
                                        </div>
                                </div>
                                <button className="close" onClick={handleClose}></button>
                        </div>
                </>
        );
};

export default Chatbot;
