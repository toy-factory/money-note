import {
  useEffect,
} from 'react';
import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

import Footer from '#/components/Footer/Footer';
import Header from '#/components/Header/Header';
import NoteMain from '#/components/NoteMain';
import StickyNoteList from '#/components/StickyNoteList';
import {
  groupFilteredSelector,
  groupState,
  modalState,
} from '#/recoil/recoilRoot';
import GroupAdder from '#/components/GroupAdder';

const Index = () => {
  const setGroup = useSetRecoilState(groupState);
  const filteredGroup = useRecoilValue(groupFilteredSelector);
  const [{ isOpen }, setModalState] = useRecoilState(modalState);

  useEffect(() => {
    const getDummyData = () => [
      { key: 0, title: '미국 여행' },
      { key: 1, title: '하남 스타필드' },
      { key: 2, title: '하남 스타필드' },
      { key: 3, title: '하남 스타필드' },
      { key: 4, title: '하남 스타필드' },
    ];

    setGroup(getDummyData());
  }, [setGroup]);

  useEffect(() => {
    const handleKeyDownEnter = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (isOpen) {
          return;
        }

        setModalState({
          isOpen: true,
          content: <GroupAdder title="" />,
        });
      }
    };

    window.addEventListener('keydown', handleKeyDownEnter);
    return () => window.removeEventListener('keydown', handleKeyDownEnter);
  });

  return (
    <>
      <Header />
      <NoteMain>
        <StickyNoteList data={filteredGroup} />
      </NoteMain>
      <Footer />
    </>
  );
};

export default Index;
