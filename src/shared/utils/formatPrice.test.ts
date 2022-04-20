import { formatPrice } from './formatPrice';

test('should return a price with the right format', () => {
  const price = formatPrice(12000, 'COP');
  expect(price).toEqual('12.000,00 COP');
});
