import $ from './StickyNote.module.scss';

interface StickyNoteProps {
  title: string;
}

const StickyNote = ({ title = '미국 여행' }: StickyNoteProps) => (
  <article className={$.stickynote__container}>
    <h2>{title}</h2>
  </article>
);

export default StickyNote;
