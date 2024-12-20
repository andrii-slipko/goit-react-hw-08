import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { createSelector } from 'reselect';

const initialState = {
  items: [],  
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;  
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload); 
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload); 
      });
  },
});


export const selectFilteredContacts = createSelector(
  (state) => state.contacts.items,  
  (state) => state.filters.nameFilter,  
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();  
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter) || 
      contact.number.includes(normalizedFilter)  
    );
  }
);

export default contactsSlice.reducer;