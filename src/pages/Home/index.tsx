import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Container, HeadSection, PaymentInfo } from './styles';

import Button from '../../components/Button';
import ListChurras from '../../components/ListChurras';

const Home: React.FC = () => {
  const fakeChurras = [
    {
      id: 1,
      name: 'Aniversário do Cleiton',
      date: '01/03/2019',
      value: 32,
      members: [
        {
          id: 1,
          name: 'Raquel Santos',
          value: 8,
          paid: false,
        },
        {
          id: 2,
          name: 'Miguel Oliveira',
          value: 8,
          paid: false,
        },
        {
          id: 3,
          name: 'Mathias Assunção',
          value: 8,
          paid: false,
        },
        {
          id: 4,
          name: 'Juliana Costa',
          value: 8,
          paid: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Churrasdo da Familia',
      date: '07/03/2019',
      value: 32,
      members: [
        {
          id: 1,
          name: 'Raquel Santos',
          value: 8,
          paid: false,
        },
        {
          id: 2,
          name: 'Miguel Oliveira',
          value: 8,
          paid: false,
        },
        {
          id: 3,
          name: 'Mathias Assunção',
          value: 8,
          paid: false,
        },
        {
          id: 4,
          name: 'Juliana Costa',
          value: 8,
          paid: false,
        },
      ],
    },
  ];

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
      <ListChurras data={fakeChurras} />
    </Container>
  );
};

export default Home;
