import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



axios.defaults.baseURL = 'https://connections-api.goit.global/';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token'); 

    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      const response = await axios.get('/contacts', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      console.error('No token found in localStorage');
      return thunkAPI.rejectWithValue('No token found');
    }

    console.log('Adding contact:', newContact);

    try {
      const response = await axios.post('/contacts', newContact, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Contact added successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding contact:', error.response || error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    const token = localStorage.getItem('token');

    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      await axios.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return id; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);