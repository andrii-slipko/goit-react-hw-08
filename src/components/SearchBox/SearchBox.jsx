import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css'

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value)); 
  };

  return (
    <div className={styles.searchbox}>
      <label className={styles.label}>
        Find contact by name:
        <input 
        className={styles.input}
      type="text" 
      onChange={handleChange} 
      placeholder="Search by name"
    />
      </label>
    </div>
  );
};

export default SearchBox;