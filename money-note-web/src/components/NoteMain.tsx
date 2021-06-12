import NoteBackground from './NoteBackground';
import $ from './NoteMain.module.scss';

const NoteMain = ({ children }) => (
  <div className={$.main__container}>
    <main className={$.main}>
      {children}
    </main>
    <NoteBackground />
  </div>
);

export default NoteMain;
