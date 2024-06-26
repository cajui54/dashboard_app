import { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import * as Styles from "./Table.css";
import { useSelector, useDispatch } from "react-redux";
import { setIdProduct } from "../../redux/slices/sliceProduct"; 
import { selectorProducts } from "../../redux/slices/sliceProduct";
import useRequestProduct from "../../hooks/useRequestProduct";
import { IStockAs } from "../../interfaces/Stock";
import { FaUserPen } from "react-icons/fa6";
import { BiSolidUserX } from "react-icons/bi";
import SearchByCategory from "./SearchByCategory";
import WarningMessage from "../Messages/Warning/WarningMessage";
import {formatMoneyBR} from '../../config/formatMoneyBR';
import { Profit } from "../../config/Profit";

const TableProducts = () => {
  const dispatch = useDispatch();
  const {checkAmount, setColorClassSpan} = new Profit();
  const {deleteProduct} = useRequestProduct();
  const { productSearch } = useSelector(selectorProducts);
  const [products, setProducts] = useState<IStockAs[] | []>([]);

  const handleDeleteProduct = (id: string, description: string) => {
    const msg = `Tem certeza que deseja excluir esse produto permanente? \n - ${description}`;
    if(window.confirm(msg)) {
      deleteProduct(id);
    }
  }
  const handleGetIdEdit = (_id: string): void => {
    dispatch(setIdProduct(_id));
    
  }

  useEffect(() => {
    if (productSearch) setProducts(productSearch);
  }, [productSearch]);

  return (
    <Styles.MainTable>
      <Styles.TableProduct>
        <caption>
          <span>Tabela de Produtos</span>
          <SearchByCategory/>
        </caption>

        <Styles.HeadTable>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Marca</th>
            <th>Status</th>
            <th>Tipo</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </Styles.HeadTable>
        {products.length > 0 && (
          <Styles.TbodyTable>
            {products.map((product: IStockAs, index: number) => (
              <tr key={index}>
                <td>{product.ra}</td>
                <td>{product.description}</td>
                <td>{product.brand}</td>
                <td className="tdStatus">
                  <span className={setColorClassSpan(product.amount)}>
                    <GoDotFill />
                    {checkAmount(product.amount)}
                  </span>
                </td>
                <td>{product.type}</td>
                <td>{formatMoneyBR.format(product.price as number)}</td>
                <td>{product.amount}</td>
                <td className="actionsButtonTable">
                  <button title="Editar Produto" onClick={() => handleGetIdEdit(product.id.toString())}>
                    <FaUserPen />
                  </button>
                  <button title="Deletar Produto" onClick={() => handleDeleteProduct(product.id as string, product.description as string)}>
                    <BiSolidUserX />
                  </button>
                </td>
              </tr>
            ))}
          </Styles.TbodyTable>
        )}
      
      </Styles.TableProduct>
      {products.length === 0 && (
          <Styles.WarningProduct>
            <WarningMessage text="Não há produto cadastrado ainda!" />
          </Styles.WarningProduct>
        )}
    </Styles.MainTable>
  );
};

export default TableProducts;
