import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nameFilter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.nameFilter = action.payload;  
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.nameFilter;

export default filtersSlice.reducer;