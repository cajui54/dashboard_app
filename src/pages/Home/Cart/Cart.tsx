import { CiBeerMugFull } from "react-icons/ci";
import { IoMdArrowRoundDown } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { MdCleaningServices } from "react-icons/md";
import { GiMilkCarton, GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbShoppingCartX } from "react-icons/tb";
import useCartStorage from "../../../hooks/useCartStorage";
import * as Styles from "../Cart/Cart.css";
import { Profit } from "../../../config/Profit";
import { formatMoneyBR } from "../../../config/formatMoneyBR";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart, removeItemCart } from "../../../redux/slices/sliceCart";

interface IBuyData {
  input?: number;
  change?: number;
}
const Cart = () => {
  const { itemsStorage, saveStorage } = useCartStorage();
  const { converToFloat, changeMoney } = new Profit();
  const [valueItems, setValues] = useState<{ totalPay: number }>({
    totalPay: 0,
  });
  const [dataBuy, setDataBuy] = useState<IBuyData>({ input: 0, change: 0 });
  const [button, setButton] = useState<{ status: boolean }>({ status: true });
  const [input, setInput] = useState<{ status: boolean }>({ status: true });
  const dispatchCart = useDispatch();

  const getData = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const dateNow = `${date.getDate()}/${month}/${date.getFullYear()}`;
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    return {
      dateNow,
      time,
    };
  };
  useEffect(() => {
    if (itemsStorage.length > 0) {
      const payTotal = itemsStorage
        .map((item) => item.accPrice)
        .reduce((acc, curr) => converToFloat(acc) + converToFloat(curr), 0);

      setValues({
        totalPay: converToFloat(payTotal),
      });
    } else {
      setValues({
        totalPay: 0,
      });
    }
  }, [itemsStorage]);

  const handleReset = () => {
    dispatchCart(clearCart([]));
    saveStorage([]);
    setValues({ totalPay: 0 });
    settingStatus(false);
  };
  const handleDeleteItem = (id: string) => {
    dispatchCart(removeItemCart(id));
  };

  const settingStatus = (status: boolean) => {
    if (status) {
      setButton({ status: false });
      setInput({ status: true });
      return;
    }
    setButton({ status: true });
    setInput({ status: false });
    setValues({ totalPay: 0 });
    setDataBuy({ input: 0, change: 0 });
    return;
  };

  const handleBlurInput = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value) {
      const valueInput = parseFloat(event.target.value);
      if (valueInput >= valueItems.totalPay) {
        setDataBuy({
          input: valueInput,
          change: changeMoney(valueInput, valueItems.totalPay),
        });
        settingStatus(true);
      } else {
        settingStatus(false);
      }
    }
  };
  const handleSubmit = (event: React.FormEvent) => {
    let datas = {};
    event.preventDefault();
    if (dataBuy.input! >= valueItems.totalPay) {
      const { dateNow, time } = getData();
      datas = {
        date: dateNow,
        time,
        totalBuy: valueItems.totalPay,
      };
      console.log(datas);
    }
  };
  const handleMoveClick = () => {
    window.scroll({
      top: 600,
      behavior: "smooth",
    });
  };
  return (
    <Styles.CartContainer>
      {itemsStorage.length > 0 && (
        <button className="buttonMove" onClick={handleMoveClick}>
          <IoMdArrowRoundDown />
        </button>
      )}

      <Styles.LogoContainer>
        <div className="SVGContainer">
          <BsCart4 />
          <GiMilkCarton />
          <CiBeerMugFull />
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
              {itemsStorage.length > 0 ? (
                <span>{formatMoneyBR.format(valueItems.totalPay)}</span>
              ) : (
                <span>{formatMoneyBR.format(valueItems.totalPay)}</span>
              )}
            </p>
          </Styles.CardInfo>
        </Styles.InfoContainer>

        <Styles.ItemsContainer>
          {itemsStorage.length > 0 ? (
            <ul>
              {itemsStorage.map((item, index) => (
                <li key={index}>
                  <div>
                    <span>Produto</span>
                    <span>{item.description}</span>
                  </div>

                  <div>
                    <span>Preço uni</span>
                    <span>
                      {formatMoneyBR.format(converToFloat(item.priceSell))}
                    </span>
                  </div>

                  <div>
                    <span>Quantidade</span>
                    <span>{item.amountItems}</span>
                  </div>

                  <div>
                    <span>Valor Total</span>
                    <span>
                      {formatMoneyBR.format(converToFloat(item.accPrice))}
                    </span>
                  </div>

                  <button
                    title="remover item do carrinho"
                    onClick={() => handleDeleteItem(item.id.toString())}
                  >
                    <TbShoppingCartX />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="messageEmpty">Não há produtos na lista ainda!</p>
          )}
        </Styles.ItemsContainer>
      </Styles.ContainerList>

      {itemsStorage.length > 0 && (
        <Styles.FormContainer>
          <form onSubmit={handleSubmit}>
            <h2>Resultado:</h2>
            <Styles.SpanContainer>
              <span>
                <GiMoneyStack />
                Total:
              </span>
              <span>{formatMoneyBR.format(valueItems.totalPay)}</span>
            </Styles.SpanContainer>

            <Styles.inputContainer input={input.status}>
              <span>
                <GiTakeMyMoney />
                Recebido:
              </span>

              {!input.status && (
                <p>O valor deve ser igual ou superior ao total</p>
              )}

              <input
                type="number"
                step="any"
                required
                placeholder="R$:0.00"
                onBlurCapture={handleBlurInput}
              />
            </Styles.inputContainer>

            <Styles.SpanContainer>
              <span>
                <FaMoneyBillTransfer />
                Troco:
              </span>
              <span>
                {formatMoneyBR.format(dataBuy.change ? dataBuy.change : 0)}
              </span>
            </Styles.SpanContainer>

            <Styles.ButtonsContainer button={button.status}>
              <button type="submit" disabled={button.status}>
                Confirmar compra
              </button>
            </Styles.ButtonsContainer>
          </form>
        </Styles.FormContainer>
      )}
    </Styles.CartContainer>
  );
};

export default Cart;
