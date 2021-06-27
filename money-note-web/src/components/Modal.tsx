import {
} from 'recoil';
import {
  useCallback,
  useEffect,
} from 'react';

import $ from './Modal.module.scss';
import Button from './Button';
import useModal from '#/hooks/useModal';

const Modal = () => {
  const { isOpen, content, closeModal } = useModal();

  const handleClose = useCallback(() => {
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    const handleKeyDownESC = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDownESC);
    return () => window.removeEventListener('keydown', handleKeyDownESC);
  }, [closeModal]);

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
