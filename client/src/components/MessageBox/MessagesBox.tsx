import { FC, useEffect } from 'react';
import moment from 'moment';

import Message from '../Message/Message';

import { MessageBoxContainer } from './MessagesBox.styles';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectMessages } from '../../redux/chat';
import { useActions } from '../../hooks/useActions';
import { socket, Message as MessageType } from '../../redux/chat';

const user1 = {
  avatar: '/img/users/user-1.jpg',
  name: 'User 1',
};

const user2 = {
  avatar: '/img/users/user-2.jpg',
  name: 'User 2',
};

const MessagesBox: FC = () => {
  const messages = useAppSelector(selectMessages);
  const { addMessage } = useActions();

  const handleIncomingMessage = (data: MessageType) => {
    addMessage(data);
  };

  useEffect(() => {
    socket.on('message-server', handleIncomingMessage);

    return () => {
      socket.off('message-server', handleIncomingMessage);
    };
  }, []);

  return (
    <MessageBoxContainer className="mb-3">
      {messages.map((message, index) => (
        <Message key={index} type="self" user={user1}>
          {message.text} - {moment(message.createdAt).format('L')}
        </Message>
      ))}
    </MessageBoxContainer>
  );
};

export default MessagesBox;
