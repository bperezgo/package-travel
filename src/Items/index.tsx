import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Item, ItemProp } from './Item';
import { RootState } from '../store';
import Clickable from '../shared/ui/Clickable';
import { selectItem } from '../ItemSelected/useCases';

const ItemClickable = Clickable<ItemProp>(Item);

export function Items() {
  const items = useSelector((state: RootState) => state.itemList.list);
  const dispatch = useDispatch();
  const onClickHandler = (id: string) => {
    // selectItem comes from ItemSelected.
    // TODO: How to delete the dependency for the other component?
    const itemSelected = items.find((value) => value.id === id);
    if (!itemSelected) {
      // dispatch(handleError(""))
      return;
    }
    dispatch(selectItem({ items: [], ...itemSelected }));
  };
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
          <ItemClickable
            {...item}
            key={key}
            onClick={onClickHandler}
            selected={false}
          />
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
}
