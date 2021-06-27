import {
  ChangeEvent,
  useCallback,
} from 'react';
import {
  useRecoilState,
} from 'recoil';

import {
  searchState,
} from '#/recoil/recoilRoot';
import $ from './SearchBar.module.scss';

const SearchBar = () => {
  const [keyword, setKeyword] = useRecoilState(searchState);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, [setKeyword]);

  return (
    <div
      className={$.searchbar__container}
    >
      <input
        className={$.searchbar}
        value={keyword}
        onChange={handleChange}
      />
      <p className={$.searchbar__text}>Enter를 눌러 정보를 추가해보세요.</p>
    </div>
  );
};

export default SearchBar;
