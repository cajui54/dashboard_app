import React from 'react';
import * as Styles from './TableFinance.css';
import SearchSelect from '../SearchProduct/SearchSelect';
import { useSelector } from 'react-redux';
import { selectorProducts } from '../../../redux/slices/sliceProduct';
import { IStockAs } from '../../../interfaces/Stock';
import useSearchByCategory from '../../../hooks/useSearchByCategory';
import useRequestProduct from '../../../hooks/useRequestProduct';
import { FaPercent } from "react-icons/fa";
import LoadingMessage from '../../../components/Messages/Loading/LoadingMessage';
import WarningMessage from '../../../components/Messages/Warning/WarningMessage';
import { formatMoneyBR } from '../../../config/formatMoneyBR';
import { Profit } from '../../../config/Profit';


const TableFinance = () => {
  
  const {editProfitProduct} = useRequestProduct();
  useSearchByCategory();
  const {calculateProfit, calculateProductWithoutProfit, calculatePriceToSell, calculateProfitUnitary} = new Profit();
  const {productSearch} = useSelector(selectorProducts);
  const [products,setProducts ] = React.useState<IStockAs[] | []>([]);

  const setClassName = (amount: number | string) => {
    const valueAmount = typeof amount === 'string' ? parseInt(amount) : amount;
    if(valueAmount >= 50) {
      return {type: 'statusAvailable', message: 'Disponível'};
    }
    else if(valueAmount > 0 && valueAmount < 50) { 
      return {type: 'statusAmost', message: 'Acabando'};
    }
    return {type: 'statusOver', message: 'Indispoível'};
  }
  const handleBlurEditProfit = (event: React.FocusEvent<HTMLInputElement>, item: IStockAs) => {
    let datasProft: IStockAs | {} = {};
    
    if(window.confirm('Tem certeza que deseja editar esse item?')) {
      try {
        datasProft = {
          ...item,
          porcentProfit: parseFloat(event.target.value),
          profit: calculateProfit(event.target.value , item.price),
        }
        
        editProfitProduct(datasProft);
  
      } catch(error) {  
        alert(`Ocorreu um erro inesperado! \n ${error}`);
      } finally {
        datasProft = {};
      }
    }
    
  }

  React.useEffect(() => {
      setProducts(productSearch);
    }, [productSearch]);
        
  return (
    <Styles.MainTable>
      
      
        <Styles.TableFinance>
          <caption>
            <div>
              <h2 className='subTitle'>Gereciamento de Preços</h2>
              <SearchSelect/>
            </div>
          </caption>
          <thead>
            <tr>
              <th>Código</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Custo Total</th>
              <th>Custo Unitáiro</th>
              <th>Definir Lucro</th>
              <th>Lucro</th>
              <th>Preço de Venda</th>
            </tr>
          </thead>
          <Styles.BodyTable>
          
            { products.length > 0 ?(
              products.map((product, index) => (
                <tr key={index}>
                  <td>{product.ra}</td>
                  <td>{product.description}</td>
                  <Styles.TDAmount className={setClassName(product.amount).type}>
                    <p>{product.amount}</p>
                    <p>{setClassName(product.amount).message}</p>
                  </Styles.TDAmount>
                  <td>{formatMoneyBR.format(product.price as number)}</td>
                  <td>{formatMoneyBR.format(calculateProductWithoutProfit(product.amount, product.price))}</td>

                  <Styles.TDProfitInput>
                    <input type="number"
                      defaultValue={product.porcentProfit}
                      onBlurCapture={(e) =>  handleBlurEditProfit(e, product)}
                      min="0"
                      max="100"
                      />
                      <FaPercent />
                  </Styles.TDProfitInput>
                  <td className='TDProfit'>{formatMoneyBR.format(typeof product.profit === 'string' ? parseFloat(product.profit) : product.profit)}</td>
                  <Styles.TDPriceSell>
                    <span>{formatMoneyBR.format(calculatePriceToSell(product.porcentProfit, product.price, product.amount))}</span>
                    <div>
                      <p>{formatMoneyBR.format(calculateProfitUnitary(calculatePriceToSell(product.porcentProfit, product.price, product.amount), calculateProductWithoutProfit(product.amount, product.price)))}</p>
                      <span>lucro</span>
                    </div>
                  </Styles.TDPriceSell>
                </tr>
              ))
            ) : (
              <tr className='containerMessage'>
                <td colSpan={8}><WarningMessage text='Não há produto(s) cadastrado ainda!'/></td>
              </tr>
            )
            }
       
          </Styles.BodyTable>
        </Styles.TableFinance>
 
    </Styles.MainTable>
  )
}

export default TableFinance
