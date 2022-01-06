import React from 'react';
import classes from './SearchInput.module.scss';
import { Search } from '@common';

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <div className={classes.searchInput}>
      <input type="text" placeholder="Search" />
      <span className={classes.searchInput_icon}>
        <Search />
      </span>
    </div>
  );
};
export default SearchInput;
