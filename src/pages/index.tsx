import styled from 'styled-components';
import ListItem from '../components/ListItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const items = [
  {
    title: 'Item 1',
    description: 'Descrição do Item 1',
  },
  {
    title: 'Item 2',
    description: 'Descrição do Item 2',
  },
  {
    title: 'Item 3',
    description: 'Descrição do Item 3',
  },
];

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Lista de Itens</h1>
      {items.map((item, index) => (
        <ListItem key={index} title={item.title} description={item.description} />
      ))}
    </Container>
  );
};

export default Home;
