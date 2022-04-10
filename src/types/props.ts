export interface IProps {
  id: string;
  price: number;
  type: string;
  name: string;
  itemProps: IProps | null;
}
