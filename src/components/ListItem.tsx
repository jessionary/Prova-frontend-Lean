import styled from 'styled-components';

const ItemContainer = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 1rem;
`;

type ListItemProps = {
  title: string;
  description: string;
};

const ListItem: React.FC<ListItemProps> = ({ title, description }) => {
  return (
    <ItemContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ItemContainer>
  );
};

export default ListItem;
