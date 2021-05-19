import NoteBackground from './NoteBackground';
import NoteContent from './NoteContent';
import $ from './NoteMain.module.scss';

const NoteMain = () => (
  <main className={$.main}>
    <NoteContent />
    <NoteBackground />
  </main>
);

export default NoteMain;
