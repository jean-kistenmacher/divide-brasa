import { Container } from './styles';

const ListItem: React.FC = () => {
  return (
    <Container>
      <div>
        <p>Aniversário do Cleiton</p>
        <p>01/03/2019</p>
      </div>

      <div>
        <span>R$ 132,00</span>
      </div>
    </Container>
  );
};

export default ListItem;
