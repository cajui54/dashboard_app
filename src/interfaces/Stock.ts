export interface IStock {
  id: string;
  ra: string;
  description: string;
  price: number;
  amount: number;
  type: string;
}
export interface IStockAs {
  [index: string]: string | number;
}
export type Keys = "ra" | "description" | "brand" | "type" | "price" | "amount";
export interface IValuesDefault {
  ra: string;
  description: string;
  brand: string;
  price: number;
  amount: number;
  type: string;
}
