import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filters/slice'; 
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchbox}>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={handleChange} 
        placeholder="Search by name or number"
      />
    </div>
  );
};

export default SearchBox;