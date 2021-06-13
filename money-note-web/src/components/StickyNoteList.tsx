import { useRecoilValue } from 'recoil';

import StickyNote from '#/components/StickyNote';
import { groupFilteredSelector } from '#/recoil/recoilRoot';
import $ from './StickyNoteList.module.scss';

const StickyNoteList = () => {
  const filteredInfo = useRecoilValue(groupFilteredSelector);

  return (
    <section className={$['sticky-note-list__container']}>
      {filteredInfo.map((d) => <StickyNote key={d.title} title={d.title} />)}
    </section>
  );
};

export default StickyNoteList;
