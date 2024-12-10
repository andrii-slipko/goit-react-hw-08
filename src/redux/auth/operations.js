import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { logoutSuccess } from './slice';

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      localStorage.setItem('token', data.token); 
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      localStorage.setItem('token', data.token); 
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState(); 
    const token = state.auth.token; 

    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      await axios.post('/users/logout'); 
      localStorage.removeItem('token'); 
      thunkAPI.dispatch(logoutSuccess()); 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token; 

    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      setAuthHeader(token); 
      const { data } = await axios.get('/users/current'); 
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);