import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { ItemListRepresentation } from './ItemListRepresentation';
import { RootState } from '../store';
import { fetchItemsFortheItemSelected } from './useCases';
import { Typography } from '@mui/material';
import './styles.scss';

const variants = {
  final: { opacity: 1, height: '20em' },
  initial: { opacity: 0, height: '0' },
};

export function ItemSelected() {
  const itemSelected = useSelector((state: RootState) => state.itemSelected);
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemSelected.itemType) {
      // TODO: Cache strategy
      dispatch(fetchItemsFortheItemSelected(itemSelected.itemType));
    }
  }, [itemSelected.itemType]);

  if (itemSelected.id === '' || itemSelected.itemType === '') {
    return <div></div>;
  }

  return (
    <motion.div
      className="ItemSelected-container"
      initial="initial"
      animate="final"
      variants={variants}
      transition={{ duration: 0.4 }}
    >
      <Typography component="h2">
        {itemSelected.itemType} - {itemSelected.name}
      </Typography>
      <ItemListRepresentation {...itemSelected} />
    </motion.div>
  );
}
