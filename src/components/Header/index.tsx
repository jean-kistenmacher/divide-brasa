import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Logo } from './styles';

import Button from '../Button';

const Header: React.FC = () => {
  function handleHome(): void {
    // eslint-disable-next-line no-alert
    alert('Envia Home');
  }

  function handleLogout(): void {
    // eslint-disable-next-line no-alert
    alert('Saindo da Aplicação');
  }

  return (
    <Container>
      <Logo onClick={handleHome}>
        <FontAwesomeIcon icon={faFireAlt} size="4x" />
        <h1>DivideBrasa</h1>
      </Logo>
      <Button
        apparence="logout"
        size="lg"
        icon={faSignOutAlt}
        onClick={handleLogout}
      >
        Sair
      </Button>
    </Container>
  );
};

export default Header;
