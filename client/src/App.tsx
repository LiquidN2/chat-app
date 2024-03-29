import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="chat" element={<Chat />} />
    </Routes>
  );
};

export default App;
