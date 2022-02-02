import { FC, createContext } from 'react';
import { io, Socket } from 'socket.io-client';

export const socket = io();

interface SocketContextType {
  socket: Socket;
}

const socketInitialValue = {
  socket,
};

export const SocketContext =
  createContext<SocketContextType>(socketInitialValue);

export const SocketContextProvider: FC = ({ children }) => {
  const socketDefaultValue = { socket };

  return (
    <SocketContext.Provider value={socketDefaultValue}>
      {children}
    </SocketContext.Provider>
  );
};
