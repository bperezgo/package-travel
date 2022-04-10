import { createSlice } from '@reduxjs/toolkit';
import { PackageTravelData } from '../model';

const initialState: PackageTravelData = {
  id: '',
  puzzlePieces: [
    {
      itemType: 'hotel',
      itemProps: {
        description: 'some description',
        id: 'someid',
        name: 'arena mar',
        price: 145000.5,
        currency: 'COP',
        type: 'hotel',
      },
    },
  ],
};

export const packageTravelSlice = createSlice({
  name: 'packageTravel',
  initialState,
  reducers: {
    updatePackageTravel: (state: PackageTravelData, action) => {
      state = action.payload;
    },
    addItemToPackageTravel: (state: PackageTravelData, action) => {
      state = action.payload;
    },
    removeItemFromPackageTravel: (state: PackageTravelData, action) => {
      // Comes the particular ItemId, it would be a string
      const puzzlePieces = state.puzzlePieces.filter(
        (value) => value.itemProps.id !== action.payload
      );
      state = { ...state, puzzlePieces };
    },
  },
});

export const {
  updatePackageTravel,
  addItemToPackageTravel,
  removeItemFromPackageTravel,
} = packageTravelSlice.actions;

export default packageTravelSlice.reducer;
