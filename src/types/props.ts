export interface IProps {
  id: string;
  price: number;
  currency: string;
  type: string;
  name: string;
  description: string;
  itemProps?: IProps;
}
