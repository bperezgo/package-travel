import Api from '../shared/apiService';

// Items can be Hotels, Tours or Flights, and then, many differents
export const getItems = (itemType: string) => {
  const client = new Api({
    baseURL: process.env.API_ITEMS_URL || '',
  });
  return client.get(`/api/${itemType}`);
};

// When you choose an item, then is searched the information of the possible
// packages of that Item
export const getElementForItemSelected = (itemType: string, id: string) => {
  const client = new Api({
    baseURL: process.env.API_ITEMS_URL || '',
  });
  return client.get(`/${itemType}/${id}`);
};
