import StickyNote from '#/components/StickyNote';
import $ from './StickyNoteList.module.scss';
import { Group } from '#/types';

interface StickyNoteListProps {
  data: Group[];
}

const StickyNoteList = ({ data }: StickyNoteListProps) => (
  <section className={$['sticky-note-list__container']}>
    {data.map(({ key, title }) => <StickyNote key={key} title={title} />)}
  </section>
);

export default StickyNoteList;
