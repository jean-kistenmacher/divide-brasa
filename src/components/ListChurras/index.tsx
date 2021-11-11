import { Container } from './styles';
import { Churras } from '../../models/churras';
import ListItem from '../ListItem';

interface ListChurras {
  data: Churras[];
}

const ListChurras: React.FC<ListChurras> = ({ data }) => {
  return (
    <Container>
      {data.map((churras) => (
        <ListItem itsPaid={false} churras={churras} />
      ))}
    </Container>
  );
};

export default ListChurras;
