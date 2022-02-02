import { FC, FormEventHandler, useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useActions } from '../../hooks/useActions';

const ChatForm: FC = () => {
  const [text, setText] = useState('');

  const { sendMessage } = useActions();

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    const message = text.trim();
    if (!message) return;
    sendMessage(message);
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={10}>
          <Form.Control
            type="text"
            placeholder="Your message here"
            value={text}
            onChange={e => setText(e.currentTarget.value)}
          />
        </Col>
        <Col xs={2}>
          <Button style={{ width: '100%' }} type="submit">
            Send
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ChatForm;
