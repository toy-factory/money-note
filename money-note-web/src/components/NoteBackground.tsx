import $ from './NoteBackground.module.scss';

const NoteBackground = () => (
  <div className={$.background}>
    <div className={$.background__gap} />
    <div className={$.background__pattern} />
    <div className={$.background__gap} />
  </div>
);

export default NoteBackground;
