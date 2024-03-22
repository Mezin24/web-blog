import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/UI/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}
export const LoginModal = (props: LoginModalProps) => {
  const { isOpen, onClose, className } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', {}, [className])}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
