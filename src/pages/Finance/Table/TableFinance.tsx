import React from 'react';
import * as Styles from './TableFinance.css';
import SearchSelect from '../SearchProduct/SearchSelect';
import { useSelector } from 'react-redux';
import { selectorProducts } from '../../../redux/slices/sliceProduct';

const TableFinance = () => {
  const {productSearch} = useSelector(selectorProducts);
  console.log(productSearch);
  
  return (
    <Styles.MainTable>
        
      <Styles.TableFinance>
        <caption>
            <h2 className='subTitle'>Gereciamento de Preços</h2>
            <SearchSelect/>
        </caption>
      </Styles.TableFinance>

    </Styles.MainTable>
  )
}

export default TableFinance
