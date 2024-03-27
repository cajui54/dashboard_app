import ScreenFinance from '../../components/ScreenData/ScreenFinance';
import * as Styles from './MainFinance.css';
import SearchProduct from './SearchProduct/SearchProduct';
import TableFinance from './Table/TableFinance';

const MainFinance = () => {
  return (
    <Styles.MainFinanceStyled>
      <h2 className='mainTitle'>Central Financeiro</h2>
      <ScreenFinance/>

      <Styles.ContainerProduct>
        <SearchProduct/>
        <TableFinance/>
      </Styles.ContainerProduct>
    </Styles.MainFinanceStyled>
  )
}

export default MainFinance
