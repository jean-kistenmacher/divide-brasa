import { Container } from './styles';

interface ListItem {
  itsPaid: boolean;
}

const ListItem: React.FC<ListItem> = ({ itsPaid }) => {
  return (
    <Container itsPaid={itsPaid}>
      <div>
        <p>Aniversário do Cleiton</p>
        <p>01/03/2019</p>
      </div>

      <div>
        <span>R$ 150,00</span>
      </div>
    </Container>
  );
};

export default ListItem;
