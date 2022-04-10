export interface IProps {
  id: string;
  price: number;
  type: string;
  name: string;
  description: string;
  itemProps?: IProps;
}
