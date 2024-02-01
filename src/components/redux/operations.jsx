import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://65734e99192318b7db41e85d.mockapi.io/api';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (page, thunkAPI) => {
    try {
      const res = await axios.get(`/adverts?page=${page}&limit=12`
      );

      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredAdverts = createAsyncThunk(
  'adverts/filteredAdverts',
  async ({ make, rentalPrice }, thunkAPI) => {
    const filter = (make !== null ? { make } : {}) || (rentalPrice !== null ? { rentalPrice } : {});

    try {
      const response = await axios.get(`/adverts/${filter}`);
      toast.success("We've found a few adverts for your request")
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
