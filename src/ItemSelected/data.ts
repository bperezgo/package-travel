import Api from '../shared/apiService';
import { IProps } from '../types';

// Items can be Hotels, Tours or Flights, and then, many differents
export const getItems = async (itemType: string): Promise<IProps[]> => {
  const apiUrl = process.env.API_ITEMS_URL || '';
  const client = new Api({
    baseURL: apiUrl,
  });
  const res = await fetch(`${apiUrl}/api/${itemType}`);
  const data = (await res.json()) as IProps[];
  return data;
};

// When you choose an item, then is searched the information of the possible
// packages of that Item
export const getElementForItemSelected = (itemType: string, id: string) => {
  const client = new Api({
    baseURL: process.env.API_ITEMS_URL || '',
  });
  return client.get(`/${itemType}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
  });
};
