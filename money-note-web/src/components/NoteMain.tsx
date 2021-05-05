import NoteBackground from './NoteBackground';
import NoteContent from './NoteContent';
import c from './NoteMain.module.scss';

const NoteMain = () => (
  <main className={c.main}>
    <NoteContent />
    <NoteBackground />
  </main>
);

export default NoteMain;
