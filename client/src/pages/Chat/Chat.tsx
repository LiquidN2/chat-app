import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import ChatForm from '../../components/ChatForm/ChatForm';
import MessagesBox from '../../components/MessageBox/MessagesBox';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectName, selectRoom } from '../../redux/user/user.selector';
import { useActions } from '../../hooks/useActions';
import { socket } from '../../redux/chat';

const Chat: FC = () => {
  const [alert, setAlert] = useState('');
  const name = useAppSelector(selectName);
  const room = useAppSelector(selectRoom);
  const navigate = useNavigate();
  const { joinRoom } = useActions();

  const listenServerAnnouncement = ({
    text,
    createdAt,
  }: {
    text: string;
    createdAt: number;
  }) => {
    setAlert(text);
  };

  useEffect(() => {
    if (!room || !name) {
      navigate('/');
      return;
    }

    joinRoom({ name, room });

    socket.on('message', listenServerAnnouncement);

    return () => {
      socket.off('message', listenServerAnnouncement);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!alert) return;
      setAlert('');
    }, 3000);
  }, [alert]);

  return (
    <Container fluid style={{ maxWidth: '800px' }}>
      {alert && <Alert variant="primary">{alert}</Alert>}
      <MessagesBox />
      <ChatForm />
    </Container>
  );
};

export default Chat;
