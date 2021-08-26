import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Logo, LogoutButton } from './styles';

const Header: React.FC = () => {
  function handleHome(): void {
    alert('Envia Home');
  }

  function handleLogout(): void {
    alert('Saindo da Aplicação');
  }

  return (
    <Container>
      <Logo onClick={handleHome}>
        <FontAwesomeIcon icon={faFireAlt} size="4x" />
        <h1>DivideBrasa</h1>
      </Logo>

      <LogoutButton onClick={handleLogout} type="button">
        <FontAwesomeIcon icon={faSignOutAlt} />
        Sair
      </LogoutButton>
    </Container>
  );
};

export default Header;
