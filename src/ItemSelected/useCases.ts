import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IItemSelected } from './model';
import { getItems } from './data';

const initialState: IItemSelected = {
  id: '',
  description: '',
  itemType: '',
  name: '',
  items: [],
};

export const fetchHotelsItems = createAsyncThunk(
  'itemSelected/hotels',
  async (_, { dispatch }) => {
    try {
      const response = await getItems('hotels');
      console.log(response);
      dispatch(setItems(response));
    } catch (err) {
      console.log('[ERROR]', err);
    }
  }
);

export const fetchToursItems = createAsyncThunk(
  'itemSelected/tours',
  async (_, { dispatch }) => {
    try {
      const response = await getItems('tours');
      console.log(response);
      dispatch(setItems(response));
    } catch (err) {
      console.log('[ERROR]', err);
    }
  }
);

export const fetchFlightsItems = createAsyncThunk(
  'itemSelected/flights',
  async (_, { dispatch }) => {
    try {
      const response = await getItems('flights');
      console.log(response);
      dispatch(setItems(response));
    } catch (err) {
      console.log('[ERROR]', err);
    }
  }
);

export const itemListSlice = createSlice({
  name: 'itemSelected',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setItems } = itemListSlice.actions;

export default itemListSlice.reducer;
