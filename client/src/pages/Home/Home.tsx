import { FC } from 'react';
import Container from 'react-bootstrap/Container';

import JoinForm from '../../components/JoinForm/JoinForm';

const Home: FC = () => {
  return (
    <Container fluid style={{ maxWidth: '400px' }}>
      <JoinForm />
    </Container>
  );
};

export default Home;
