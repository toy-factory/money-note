import {
  useRecoilState,
} from 'recoil';
import { useCallback } from 'react';

import { modalState } from '#/recoil/recoilRoot';
import $ from './Modal.module.scss';
import Button from './Button';

const Modal = () => {
  const [{ isOpen, content }, setModalState] = useRecoilState(modalState);

  const handleClose = useCallback(() => {
    setModalState({ isOpen: false, content: null });
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={$.modal}>
      <div className={$.modal__container}>
        <Button type="button" className={$.modal__close} onClick={handleClose}>x</Button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
