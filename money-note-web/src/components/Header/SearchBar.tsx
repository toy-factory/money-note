import { useCallback, useState } from 'react';
import $ from './SearchBar.module.scss';

const SearchBar = () => {
  const [keyword, setKeyword] = useState();

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
