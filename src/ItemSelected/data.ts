import { IProps } from '../types';

// Items can be Hotels, Tours or Flights, and then, many differents
export const getItems = async (itemType: string): Promise<IProps[]> => {
  const apiUrl = process.env.API_ITEMS_URL || '';
  const res = await fetch(`${apiUrl}/api/${itemType}`);
  const data = (await res.json()) as IProps[];
  return data;
};

// When you choose an item, then is searched the information of the possible
// packages of that Item
export const getElementForItemSelected = async (
  itemType: string,
  id: string
) => {
  const apiUrl = process.env.API_ITEMS_URL || '';
  const res = await fetch(`${apiUrl}/api/${itemType}/${id}`);
  const data = await res.json();
  return data;
};
