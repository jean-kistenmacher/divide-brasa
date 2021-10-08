import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Container, HeadSection, PaymentInfo } from './styles';

import Button from '../../components/Button';
import ListItem from '../../components/ListItem';

const Home: React.FC = () => {
  return (
    <Container>
      <HeadSection>
        <Button
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert('Nova Churras');
          }}
          size="lg"
          apparence="newBarbecue"
          icon={faUtensils}
        >
          Novo Churras
        </Button>

        <PaymentInfo>
          <h1>Total a Receber</h1>
          <span>R$ 80,00</span>
        </PaymentInfo>
      </HeadSection>

      <ListItem />
    </Container>
  );
};

export default Home;
