import * as Styles from "./SearchResult.css";
import { useSelector, useDispatch } from "react-redux";
import { selectorCart } from "../../../redux/slices/sliceCart";
import { updateItemsResult, addCart } from "../../../redux/slices/sliceCart";
import { FaTruckRampBox } from "react-icons/fa6";
import { TbPoint } from "react-icons/tb";
import { IStockAs } from "../../../interfaces/Stock";
import { Profit } from "../../../config/Profit";
import { formatMoneyBR } from "../../../config/formatMoneyBR";
import { ChangeEvent, useEffect, useState, FocusEvent } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import useSearchByDescription from "../../../hooks/useSearchByDescription";
const SearchResult = () => {
  const [accValues] = useState<{ accAmount: number; accPrice: number }>({
    accAmount: 1,
    accPrice: 0,
  });
  const { searchResultLoading } = useSelector(selectorCart);
  const dispatch = useDispatch();
  const { updateStorage } = useSearchByDescription();
  const { checkAmount, setColorClassSpan, converToFloat, convertToNumber } =
    new Profit();
  const [itemsStorage, setItemsStorage] = useState<IStockAs[] | []>([]);
  const [updateItems, setUpdateItems] = useState<IStockAs[] | []>([]);

  const handleBlurInput = (
    event: FocusEvent<HTMLInputElement>,
    amount: number | string
  ) => {
    const inputAmount = convertToNumber(event.target.value);

    if (!event.target.value) event.target.value = "1";
    if (inputAmount > convertToNumber(amount)) {
      event.target.value = amount.toString();
    }
  };

  const handleChangeInput = (
    event: ChangeEvent<HTMLInputElement>,
    itemProduct: IStockAs
  ) => {
    const inputAmount = convertToNumber(event.target.value);

    try {
      if (typeof inputAmount === "number") {
        const valuesItems = itemsStorage.map((_item) => {
          if (_item.id === itemProduct.id) {
            _item.accAmount = convertToNumber(_item.amount) - inputAmount;
            _item.amountItems = inputAmount;
            _item.accPrice = converToFloat(_item.priceSell) * inputAmount;
          }
          return _item;
        });
        setUpdateItems(valuesItems);
      }
    } catch (error) {
      console.log(`Ocorreu um erro insperado!\n (in ChangeInput) - ${error}`);
    }
  };
  const setItemsUpdate = (item: IStockAs) => {
    if (updateItems.length > 0) {
      return updateItems.map((_item) => {
        if (_item.id === item.id) {
          _item = {
            ..._item,
            amount:
              convertToNumber(_item.amount) - convertToNumber(item.amountItems),
            accPrice:
              converToFloat(item.amountItems) * converToFloat(item.priceSell),
          };
        }
        return _item;
      });
    }
    return [
      {
        ...item,
        amount:
          convertToNumber(item.amount) - convertToNumber(item.amountItems),
        accPrice:
          converToFloat(item.amountItems) * converToFloat(item.priceSell),
      },
    ];
  };
  const updateResulSearch = (item: IStockAs) => {
    return itemsStorage.map((_itemStorage) => {
      if (_itemStorage.id === item.id) {
        return {
          ..._itemStorage,
          amount:
            convertToNumber(_itemStorage.amount) -
            convertToNumber(item.amountItems),
          accAmount:
            convertToNumber(_itemStorage.amount) -
            convertToNumber(item.amountItems),
        };
      }
      return _itemStorage;
    });
  };
  const handleSubmitCart = (item: IStockAs) => {
    const newItemsResult = updateResulSearch(item);

    dispatch(addCart(item));
    updateStorage(newItemsResult);
  };

  useEffect(() => {
    try {
      const loadLocalStorage = async () => {
        const productSearch = sessionStorage.getItem("cart_prev");
        const ItemsJSON: IStockAs[] | [] = productSearch
          ? await JSON.parse(productSearch)
          : [];
        const items = ItemsJSON.map((item) => {
          return {
            ...item,
            accPrice: item.priceSell,
            accAmount: item.amount,
            amountItems: 1,
          };
        });
        setItemsStorage(items);
      };
      loadLocalStorage();
    } catch (error) {
      alert(`Ocorreu um erro inesperado! \n ${error}`);
    } finally {
      dispatch(updateItemsResult(false));
    }
  }, [searchResultLoading]);

  return (
    <Styles.MainSearchResult>
      <h2>Resultado da Pesquisa Abaixo:</h2>
      <ul>
        {itemsStorage.length > 0 ? (
          itemsStorage.map((item: IStockAs) => (
            <li key={item.id}>
              <div>
                <span>{item.description}</span>
                <span>Produto</span>
              </div>

              <div>
                <span className={setColorClassSpan(item.accAmount)}>
                  <TbPoint />
                  {checkAmount(item.accAmount)}
                </span>
                <span>Status</span>
              </div>

              <div>
                <span>{item.accAmount}</span>
                <span>Estoque Atual</span>
              </div>

              <Styles.ContainerInput>
                <span>Quantidade:</span>
                <input
                  type="number"
                  readOnly={convertToNumber(item.amount) > 0 ? false : true}
                  defaultValue={1}
                  onBlurCapture={(event) => handleBlurInput(event, item.amount)}
                  onChange={(event) =>
                    handleChangeInput(event, { ...item, ...accValues })
                  }
                  min={1}
                  max={convertToNumber(item.amount)}
                />
              </Styles.ContainerInput>

              <Styles.ContainerPrice>
                <span>
                  {formatMoneyBR.format(convertToNumber(item.accPrice))}
                </span>
                <span>
                  Preço: {formatMoneyBR.format(convertToNumber(item.priceSell))}
                </span>
              </Styles.ContainerPrice>

              {item.amount != 0 && (
                <button onClick={() => handleSubmitCart(item)}>
                  <MdOutlineShoppingCartCheckout />
                  <span>Carrinho</span>
                </button>
              )}
            </li>
          ))
        ) : (
          <li className="liEmptyItem">
            <FaTruckRampBox />
            <span>Area de Produtos</span>
          </li>
        )}
      </ul>
    </Styles.MainSearchResult>
  );
};

export default SearchResult;
