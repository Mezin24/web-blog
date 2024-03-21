import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/UI/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

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
      className={classNames(cls.LoginModal, {}, [className])}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
