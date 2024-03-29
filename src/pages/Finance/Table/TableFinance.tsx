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


const TableFinance = () => {
  useRequestProduct();
  useSearchByCategory();
  const {productSearch} = useSelector(selectorProducts);
  const [products,setProducts ] = React.useState<IStockAs[] | []>([]);

  const handleBlurEditProfit = (event: React.FocusEvent<HTMLInputElement>, id: string) => {
    console.log(id);
  }
  const calculateProductWithoutProfit = (...args: [number | string, number | string]): string => {
    const [amount, price] = args.map(value => typeof value === 'string' ? parseFloat(value) : value);
    const total = price/ amount;

    return formatMoneyBR.format(total);
  }
  React.useEffect(() => {
      setProducts(productSearch);
    }, [productSearch]);
    
  return (
    <Styles.MainTable>
      
      { products.length > 0 ? (
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
              <th>Valor Bruto</th>
              <th>Custo Unitáiro</th>
              <th> % Lucro</th>
              <th>Lucro</th>
              <th>Preço de Venda</th>
            </tr>
          </thead>
          <Styles.BodyTable>
            { products.map((product, index) => (
                <tr key={index}>
                  <td>{product.ra}</td>
                  <td>{product.description}</td>
                  <td>{product.amount}</td>
                  <td>{formatMoneyBR.format(product.price as number)}</td>
                  <td>{calculateProductWithoutProfit(product.amount, product.price)}</td>
                  <Styles.TDProfit>
                    <input type="number"
                      defaultValue={product.porcentProfit}
                      onBlurCapture={(e) =>  handleBlurEditProfit(e, product.id as 'string')}
                      min="0"
                      max="100"
                      />
                      <FaPercent />
                  </Styles.TDProfit>
                  <td>0</td>
                  <td>0</td>
                </tr>
              ))
            }
          </Styles.BodyTable>
        </Styles.TableFinance>
      ) : (
        <div className='containerMessage'>
          <WarningMessage text='Não há produto(s) cadastrado ainda!'/>
        </div>
      )
        
      }
     

    </Styles.MainTable>
  )
}

export default TableFinance
