import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import Footer from '#/components/Footer/Footer';
import Header from '#/components/Header/Header';
import NoteMain from '#/components/NoteMain';
import StickyNoteList from '#/components/StickyNoteList';
import { groupState } from '#/recoil/recoilRoot';

const Index = () => {
  const [group, setGroup] = useRecoilState(groupState);

  useEffect(() => {
    const getDummyData = () => [
      { title: '하남 스타필드' },
      { title: '미국 여행' },
      { title: '서울 여행' },
      { title: '서울숲' },
    ];

    setGroup(getDummyData());
  }, []);

  return (
    <>
      <Header />
      <NoteMain>
        <StickyNoteList stickyNotesInfo={group} />
      </NoteMain>
      <Footer />
    </>
  );
};

export default Index;
