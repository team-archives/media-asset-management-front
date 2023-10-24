import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal = ({ open, onClose, children }: ModalProps & PropsWithChildren) => {
  return <>{open && <BackDrop onClick={onClose}>{children}</BackDrop>}</>;
};

const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
  position: fixed;
  top: 0;
  left: 0;
`;

export default Modal;
