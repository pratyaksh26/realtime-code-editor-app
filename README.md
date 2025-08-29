🚀 Realtime Code Editor & Chat Platform

A real-time collaborative coding platform with integrated chat support, built using React, Node.js, Express, and Socket.io.
Multiple users can write and edit code simultaneously, while chatting in real-time — similar to Google Docs for code.

Live Demo 👉 realtime-code-editor-chat.vercel.app

✨ Features

🔗 Realtime Collaboration – Multiple users can edit code simultaneously.

💬 Live Chat – Built-in chat to discuss while coding.

⚡ Socket.io – Ensures instant updates without page refresh.

🖥️ Language Support – Syntax highlighting for multiple programming languages.

🏗️ Scalable Backend – Node.js + Express server handling socket connections.

🎨 Modern UI – Clean and responsive design with React.

🛠️ Tech Stack

Frontend

React.js

Vite (or CRA if you used that)

Socket.io-client

Tailwind CSS / CSS Modules (whichever you used)

Backend

Node.js

Express.js

Socket.io

Deployed on Render

Deployment

Frontend → Vercel

Backend → Render

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/pratyaksh26/realtime-code-editor-app.git
cd realtime-code-editor-app

🔹 Backend Setup
cd backend
npm install
npm start


Create a .env file in backend/ with:

PORT=5000
CLIENT_URL=http://localhost:3000


Runs at: http://localhost:5000

🔹 Frontend Setup
cd client
npm install
npm run dev


Runs at: http://localhost:3000

🚀 Deployment

Backend → Deployed on Render

Frontend → Deployed on Vercel

📸 Screenshots
🔹 Collaborative Code Editor

🔹 Chat Window

📖 How It Works

User joins a room (identified by session/room ID).

Code editor state is synced across all connected users via Socket.io.

Any code update or chat message is instantly broadcasted to all users.

Clean UI allows coding + communication seamlessly.

👨‍💻 Author

Pratyaksh Bhayre

💼 Full-Stack Developer | MERN | Socket.io | Realtime Apps
