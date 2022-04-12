import { IProps } from '../types';

export type IItemSelected = {
  id: string;
  name: string;
  itemType: string;
  description: string;
  items: IProps[];
};
