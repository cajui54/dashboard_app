import { CiBeerMugFull } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { MdCleaningServices } from "react-icons/md";
import { GiMilkCarton, GiMoneyStack  } from "react-icons/gi";
import { TbShoppingCartX } from "react-icons/tb";
import useCartStorage from '../../../hooks/useCartStorage';
import * as Styles from '../Cart/Cart.css';
import { Profit } from "../../../config/Profit";
import { formatMoneyBR } from "../../../config/formatMoneyBR";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/slices/sliceCart";
import { IStockAs } from "../../../interfaces/Stock";

const Cart = () => {
  const { itemsStorage} = useCartStorage();
  const {converToFloat} = new Profit();
  const [valueItems, setValues] = useState<{totalPay: number}>({totalPay: 0});
  const dispatchCart = useDispatch();
      
  useEffect(() => {
    if(itemsStorage.length > 0 )  {
      const payTotal = itemsStorage.map((item) => item.accPrice).reduce((acc, curr) => converToFloat(acc) + converToFloat(curr), 0);

      setValues({
        totalPay: converToFloat(payTotal)
      })
    }
  }, [itemsStorage]);

  const handleReset = () => {
    dispatchCart(clearCart([]));
    setValues({totalPay: 0});
  }

  return (
    <Styles.CartContainer>

      <Styles.LogoContainer>
        <div className='SVGContainer'>
            <BsCart4 />
            <GiMilkCarton />
            <CiBeerMugFull  />
        </div>
        <h2>Produtos no Carrinho:</h2>
      </Styles.LogoContainer>
      
      <Styles.ContainerList>
        <Styles.InfoContainer>
          <button onClick={handleReset}>
            <MdCleaningServices />
            Cancelar
          </button>

          <Styles.CardInfo>
            <span>Total à pagar:</span>
            <p>
              <GiMoneyStack />
              { itemsStorage.length > 0 ? (
                  <span>
                    {formatMoneyBR.format(valueItems.totalPay)
                    }
                  </span>
                ): (
                  <span>{formatMoneyBR.format(valueItems.totalPay)}</span>
                )
              }
            </p>
          </Styles.CardInfo>
        </Styles.InfoContainer>

        <Styles.ItemsContainer>
        {itemsStorage.length > 0 ? (
          <ul>

            { itemsStorage.map((item, index) => (
            <li key={index}>

              <div>
                <span>Produto</span>
                <span>{item.description}</span>
              </div>

              <div>
                <span>Preço uni</span>
                <span>{formatMoneyBR.format(converToFloat(item.priceSell))}</span>
              </div>

              <div>
                <span>Quantidade</span>
                <span>{item.amountItems}</span>
              </div>

              <div>
                <span>Valor Total</span>
                <span>{formatMoneyBR.format(converToFloat(item.accPrice))}</span>
              </div>
              
              <button>
                <TbShoppingCartX />
              </button>
            </li>

            ))

            }
          </ul>
        ): (
          <p className='messageEmpty'>Não há produtos na lista ainda!</p>
        )}
        </Styles.ItemsContainer>

      </Styles.ContainerList>
    </Styles.CartContainer>
  )
}

export default Cart
