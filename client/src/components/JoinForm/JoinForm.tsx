import { FC, FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useActions } from '../../hooks/useActions';

const JoinForm: FC = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const { setName: setStateName, setRoom: setStateRoom } = useActions();
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    const data = {
      name: name.trim(),
      room: room.trim(),
    };

    if (!data.name || !data.room) return;

    setStateName(data.name);
    setStateRoom(data.room);
    navigate('/chat');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Join Chat Room</h1>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="room">
        <Form.Label>Room</Form.Label>
        <Form.Control
          type="room"
          placeholder="Room"
          value={room}
          onChange={e => setRoom(e.currentTarget.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Join
      </Button>
    </Form>
  );
};

export default JoinForm;
