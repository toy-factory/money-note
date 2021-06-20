import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
} from 'react';
import {
  useRecoilState,
  useSetRecoilState,
} from 'recoil';

import {
  modalState,
  searchState,
} from '#/recoil/recoilRoot';
import GroupAdder from '#/components/GroupAdder';
import $ from './SearchBar.module.scss';

const SearchBar = () => {
  const [keyword, setKeyword] = useRecoilState(searchState);
  const setModalValue = useSetRecoilState(modalState);

  const openModal = useCallback(() => {
    setModalValue({ isOpen: true, content: <GroupAdder expense={1000} title="미국 여행" category="식비" /> });
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return;
    }
    console.log('enter');
    openModal();
  }, []);

  return (
    <div className={$.searchbar__container}>
      <input
        className={$.searchbar}
        value={keyword}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {keyword && <p className={$.searchbar__text}>Enter를 누르면 정보를 추가할 수 있습니다.</p>}
    </div>
  );
};

export default SearchBar;
