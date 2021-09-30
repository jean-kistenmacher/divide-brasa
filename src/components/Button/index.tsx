import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Container } from './styles';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: IconProp;
  apparence: 'logout' | 'newBarbecue' | 'register' | 'add' | 'back';
  size: 'xs' | 'sm' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  apparence,
  size,
  ...props
}) => {
  return (
    <Container apparence={apparence} size={size} type="button" {...props}>
      <FontAwesomeIcon icon={icon} />
      {size !== 'xs' && children}
    </Container>
  );
};

export default Button;
