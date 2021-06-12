import $ from './StickyNoteList.module.scss';

const StickyNoteList = ({ children }) => (
  <section className={$['sticky-note-list__container']}>
    {children}
  </section>
);

export default StickyNoteList;
