import { IStockAs, IValuesDefault } from "./Stock";

export interface ItemsSell {
  accAmount: number;
  accPrice: number;
  amount: number;
  amountItems: number;
  brand: string;
  description: string;
  id: string;
  porcentProfit: number;
  price: number;
  priceSell: number;
  profit: number;
  ra: string;
  type: string;
}
export interface ISell {
  date: string;
  time: string;
  totalBuy: string;
  items: ItemsSell[];
}
