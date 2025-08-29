import { io } from 'socket.io-client';

export const initSocket = async () => {
  const options = {
    transports: ['websocket'],
    reconnectionAttempts: 5,
    timeout: 10000,
  };

  // Render backend URL
  return io('https://realtime-code-editor-app-zksv.onrender.com', options);
};
