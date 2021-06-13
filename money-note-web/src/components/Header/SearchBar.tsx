import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { searchState } from '#/recoil/recoilRoot';
import $ from './SearchBar.module.scss';

const SearchBar = () => {
  const [keyword, setKeyword] = useRecoilState(searchState);

  const onChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <input
      className={$.searchbar__container}
      value={keyword}
      onChange={onChange}
    />
  );
};

export default SearchBar;
