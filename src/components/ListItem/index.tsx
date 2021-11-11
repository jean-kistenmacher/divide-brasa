import { Container } from './styles';
import { Churras } from '../../models/churras';

interface ListItem {
  itsPaid: boolean;
  churras: Churras;
}

const ListItem: React.FC<ListItem> = ({ itsPaid, churras }) => {
  return (
    <Container itsPaid={itsPaid}>
      <div>
        <p>{churras.name}</p>
        <p>{churras.date}</p>
      </div>

      <div>
        <span>{churras.value}</span>
      </div>
    </Container>
  );
};

export default ListItem;
