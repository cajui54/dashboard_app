import { IStockAs } from "../interfaces/Stock";
type Keys = "profit" | "price" | "amount";

export class Profit {

    calculateProfit = (...args: [number | string, number | string]): number => {
        let calculateProfit = 0;
        const [porcent, priceTotal] = args.map((value) => typeof value === 'string' ? parseFloat(value) : value);
        calculateProfit = ( porcent * priceTotal) / 100;
        
        return calculateProfit;
      }
      calculateProductWithoutProfit = (...args: [number | string, number | string]): number => {
        const [amount, price] = args.map(value => typeof value === 'string' ? parseFloat(value) : value);
        const total = price / amount;
    
        return total;
      }
      calculatePriceToSell = (...args: [number | string, number | string, number | string]): number => {
        const [profit, price, amount] = args.map(value => typeof value === 'string' ? parseFloat(value) : value);
        const getProft = this.calculateProfit(profit, price);
        
        const calculateProft = (getProft + price) / amount;
        
        return calculateProft;
      }
      calculateProfitUnitary = (withoutProft: number, withProft: number): number => {
        return withoutProft - withProft;
      }
      convertToFloat = (products: IStockAs[], key: Keys): number[] | [] => {
        return products.map(item => {
          return parseFloat(item[key].toString());
          })
          
      }
      calculateExpectation = (products: IStockAs[], key: Keys): number => {
        const values: number[] = this.convertToFloat(products, key); 

        if(values.length > 0) {
          return values.reduce((acc, curr) => acc + curr, 0);
        }
        return 0
      }
}

