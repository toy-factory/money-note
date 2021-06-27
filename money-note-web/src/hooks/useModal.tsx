import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { modalState } from '#/recoil/recoilRoot';

const initialModalState = {
  isOpen: false,
  content: null,
};

function useModal() {
  const [{ isOpen, content }, setModalState] = useRecoilState(modalState);

  const openModal = useCallback((modalContent: unknown) => {
    setModalState({ isOpen: true, content: modalContent });
  }, [setModalState]);

  const closeModal = useCallback(() => {
    setModalState(initialModalState);
  }, [setModalState]);

  return {
    isOpen, content, openModal, closeModal,
  };
}

export default useModal;
