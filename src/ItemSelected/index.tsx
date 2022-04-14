import * as React from 'react';
import { useSelector } from 'react-redux';
import { Item } from './Item';
import { RootState } from '../store';

export function ItemSelected() {
  const itemSelected = useSelector((state: RootState) => state.itemSelected);
  console.log('itemSelected', itemSelected);

  if (itemSelected.id === '') {
    return <div></div>;
  }

  return (
    <div>
      <Item {...itemSelected} />
    </div>
  );
}
