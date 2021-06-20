import { useEffect } from 'react';
import {
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
} from '#/recoil/recoilRoot';

const Index = () => {
  const setGroup = useSetRecoilState(groupState);
  const filteredGroup = useRecoilValue(groupFilteredSelector);

  useEffect(() => {
    const getDummyData = () => [
      { key: 0, title: '미국 여행' },
      { key: 1, title: '하남 스타필드' },
      { key: 2, title: '하남 스타필드' },
      { key: 3, title: '하남 스타필드' },
      { key: 4, title: '하남 스타필드' },
    ];

    setGroup(getDummyData());
  }, []);

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
