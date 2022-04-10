import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Item } from './Item';
import { RootState } from '../store';

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
          <Item {...item} key={key} />
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
}
