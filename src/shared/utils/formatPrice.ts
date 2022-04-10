const locales = new Map<string, string>();
locales.set('COP', 'es-ES');

export const formatPrice = (price: number, currency: string): string => {
  const options = { style: 'currency', currency };
  const local = locales.get(currency);
  if (!local) {
    return price.toString();
  }
  const numberFormat = new Intl.NumberFormat(local, options);
  return numberFormat.format(price);
};
