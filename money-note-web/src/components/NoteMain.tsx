import NoteBackground from './NoteBackground';
import NoteContents from './NoteContents/NoteContents';
import $ from './NoteMain.module.scss';

const NoteMain = () => (
  <main className={$.main}>
    <NoteContents />
    <NoteBackground />
  </main>
);

export default NoteMain;
