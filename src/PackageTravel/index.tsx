import React from 'react';
import { useDispatch } from 'react-redux';
import { CustomCard } from './Card';
import Box from '@mui/material/Box';
import { removeItemFromPackageTravel } from './data/packageTravelSlice';
import { PackageTravelData } from './model';

export function PackageTravel({ puzzlePieces }: PackageTravelData) {
  const dispatch = useDispatch();
  const onClickHandler = (itemId: string) => {
    dispatch(removeItemFromPackageTravel(itemId));
  };
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
          },
        }}
      >
        {puzzlePieces.map((piece, key) => (
          <CustomCard key={key} {...piece.itemProps} onClick={onClickHandler} />
        ))}
      </Box>
    </div>
  );
}
