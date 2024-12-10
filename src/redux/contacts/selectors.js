import { createSelector } from '@reduxjs/toolkit';

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
