import { createSlice } from '@reduxjs/toolkit';
import { IItem } from './model';

const initialState: IItem[] = [
  {
    id: '1',
    name: 'Hotels',
    description: 'Choose your hotel',
  },
  {
    id: '2',
    name: 'Tours',
    description: 'Choose your toures',
  },
  {
    id: '3',
    name: 'Flights',
    description: 'Choose your flights',
  },
];

export const itemListSlice = createSlice({
  name: 'itemList',
  initialState,
  reducers: {},
});

export const {} = itemListSlice.actions;

export default itemListSlice.reducer;
