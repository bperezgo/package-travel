import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IItemSelected } from './model';
import { getItems } from './data';
import { IProps } from 'src/types';

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
  extraReducers: (builder) => {
    builder.addCase(
      fetchItemsFortheItemSelected.fulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );
    builder.addCase(
      fetchItemsFortheItemSelected.rejected,
      (state, { payload }) => {
        console.log('FAILED');
      }
    );
    builder.addCase(
      fetchItemsFortheItemSelected.pending,
      (state, { payload }) => {
        console.log('PENDING');
      }
    );
  },
});

export const { setItems, selectItem } = itemListSlice.actions;

export const fetchItemsFortheItemSelected = createAsyncThunk<IProps[], any>(
  'itemSelected/fetchForItemsFortheItemSelected',
  async (itemType: string, thunkAPI) => {
    const response = await getItems(itemType);
    console.log('RESPONSE', response);
    return response;
  }
);

export default itemListSlice.reducer;
