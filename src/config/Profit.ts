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
      
      checkAmount = (amount: number | string): string => {
        const value = typeof amount === "string" ? parseInt(amount) : amount;
        if (value === 0) {
          return "indisponível";
        } else if (value > 0 && value <= 5) {
          return "Acabando";
        }
        return "Disponível";
      };
      setColorClassSpan = (amount: number | string): string => {
        const value = typeof amount === "string" ? parseInt(amount) : amount;
        if (value === 0) {
          return "spanEmptyTable";
        } else if (value > 0 && value <= 5) {
          return "spanWarningTable";
        }
        return "spanAvailableTable";
      };
      convertToNumber = (value: number | string): number => {
        return typeof value === 'string' ? parseInt(value) : value;
      }
      converToFloat = (value: number | string): number => typeof value === 'string' ? parseFloat(value) : value;
      changeMoney = (valueInput: number, valueTotal: number) => valueInput - valueTotal;

}

