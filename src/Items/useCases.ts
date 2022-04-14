import { createSlice, compose, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from './model';

const initialState: { list: IItem[] } = {
  list: [
    {
      id: '1',
      name: 'Hotels',
      description: 'Choose your hotel',
      itemType: 'hotels',
    },
    {
      id: '2',
      name: 'Tours',
      description: 'Choose your toures',
      itemType: 'tours',
    },
    {
      id: '3',
      name: 'Flights',
      description: 'Choose your flights',
      itemType: 'flights',
    },
  ],
};

const newItem: IItem = {
  id: '3',
  name: 'Flights',
  description: 'Choose your flights',
  itemType: 'flights',
};

export const itemListSlice = createSlice({
  name: 'itemList',
  initialState,
  reducers: {
    selectItem: (state: { list: IItem[] }, action: PayloadAction<string>) => {
      const itemSelected = state.list.find(
        (value) => value.id === action.payload
      );
    },
  },
});

export const { selectItem } = itemListSlice.actions;

export default itemListSlice.reducer;
