import { useEffect, useState } from 'react';
import Footer from '#/components/Footer/Footer';
import Header from '#/components/Header/Header';
import NoteMain from '#/components/NoteMain';
import StickyNote from '#/components/StickyNote';
import StickyNoteList from '#/components/StickyNoteList';

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDummyData = () => [
      { title: '하남 스타필드1' },
      { title: '하남 스타필드2' },
      { title: '하남 스타필드3' },
      { title: '하남 스타필드4' },
      { title: '하남 스타필드5' },
      { title: '하남 스타필드6' },
    ];

    setData(getDummyData());
  }, []);

  return (
    <>
      <Header />
      <NoteMain>
        <StickyNoteList>
          {data.map((d) => <StickyNote title={d.title} />)}
        </StickyNoteList>
      </NoteMain>
      <Footer />
    </>
  );
};

export default Index;
