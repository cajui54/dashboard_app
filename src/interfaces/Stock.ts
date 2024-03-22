export interface IStock {
    id: string,
    ra: string,
    description: string,
    price: number,
    amount: number,
    type: string,
}
export interface IStockAs {
    [index: string]: string | number
}