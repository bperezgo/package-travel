import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IItemSelected } from './model';
import { getItems } from './data';

const initialState: IItemSelected = {
  id: '',
  description: '',
  itemType: '',
  name: '',
  items: [],
};

export const itemListSlice = createSlice({
  name: 'itemSelected',
  initialState,
  reducers: {
    setItems: (state: IItemSelected, action) => {
      state = action.payload;
    },
    selectItem: (
      state: IItemSelected,
      action: PayloadAction<IItemSelected>
    ) => {
      Object.assign(state, initialState);
      Object.assign(state, action.payload);
      state.id = action.payload.id;
    },
  },
});

export const { setItems, selectItem } = itemListSlice.actions;

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

export default itemListSlice.reducer;
