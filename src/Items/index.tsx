import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Item, ItemProp } from './Item';
import { RootState } from '../store';
import Clickable from '../shared/ui/Clickable';

const ItemClickable = Clickable<ItemProp>(Item);

export function Items() {
  const items = useSelector((state: RootState) => state.itemList);
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      {items.map((item, key) => (
        <Fragment key={key}>
          <ItemClickable {...item} key={key} />
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
}
