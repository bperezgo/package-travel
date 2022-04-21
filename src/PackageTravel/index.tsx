import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomCard } from './Card';
import Box from '@mui/material/Box';
import { removeItemFromPackageTravel } from './useCases';
import { RootState } from '../store';

export function PackageTravel() {
  const puzzlePieces = useSelector(
    (state: RootState) => state.packageTravel.puzzlePieces
  );
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
