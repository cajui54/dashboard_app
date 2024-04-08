import * as Styles from './SearchResult.css';
import { useSelector } from 'react-redux';
import { selectorCart } from '../../../redux/slices/sliceCart';
import { FaTruckRampBox } from "react-icons/fa6";
import { TbPoint } from "react-icons/tb";
import { IStockAs } from '../../../interfaces/Stock';
import { Profit } from '../../../config/Profit';
import { formatMoneyBR } from '../../../config/formatMoneyBR';

const SearchResult = () => {
  const {searchItems: items} = useSelector(selectorCart);
  const { checkAmount, setColorClassSpan, calculatePriceToSell} = new Profit();
  
  
  return (
    <Styles.MainSearchResult>
      <h2>Resultado da Pesquisa Abaixo:</h2>
      <ul>
        { items.length > 0 ? (
          items.map((item: IStockAs) => (
            <li key={item.id}>
              <p>
                  <span>{item.description}</span>
                  <span>Produto</span>
              </p>

              <p>
                  <span className={setColorClassSpan(item.amount)}>
                    <TbPoint/>
                    {checkAmount(item.amount)}
                  </span>
                  <span>Status</span>
              </p>

              <p>
                  <span>{item.amount}</span>
                  <span>Quantidade</span>
              </p>

              <p>
                  <span>{formatMoneyBR.format(calculatePriceToSell(item.porcentProfit, item.price, item.amount))}</span>
                  <span>Quantidade</span>
              </p>
            </li>
          ))
        ) : (
          <li className='liEmptyItem'>
            <FaTruckRampBox/>
            <span>Area de Produtos</span>
          </li>
        )

        }

      </ul>
    </Styles.MainSearchResult>
  )
}

export default SearchResult
