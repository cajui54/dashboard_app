import { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import * as Styles from "./Table.css";
import { useSelector } from "react-redux";
import { selectorProducts } from "../../redux/slices/sliceProduct";
import useRequestProduct from "../../hooks/useRequestProduct";
import { IStockAs } from "../../interfaces/Stock";
import { FaUserPen } from "react-icons/fa6";
import { BiSolidUserX } from "react-icons/bi";
const TableProducts = () => {
  const { productSearch } = useSelector(selectorProducts);
  const [products, setProducts] = useState<IStockAs[] | []>([]);
  const [statusAmount, setStatusAmount] = useState({
    message: "",
    statusClass: "",
    span: "",
  });
  const checkAmount = (amount: number | string): string => {
    const value = typeof amount === "string" ? parseInt(amount) : amount;
    if (value === 0) {
      return "indisponível";
    } else if (value > 0 && value <= 5) {
      return "Acabando";
    }
    return "Disponível";
  };
  const setColorClassSpan = (amount: number | string): string => {
    const value = typeof amount === "string" ? parseInt(amount) : amount;
    if (value === 0) {
      return "spanEmptyTable";
    } else if (value > 0 && value <= 5) {
      return "spanWarningTable";
    }
    return "spanAvailableTable";
  };

  useEffect(() => {
    if (productSearch) setProducts(productSearch);
  }, [productSearch]);

  return (
    <Styles.MainTable>
      <Styles.TableProduct>
        <caption>
          <span>Tabela de Produtos</span>
        </caption>

        <Styles.HeadTable>
          <tr>
            <th>RA</th>
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
                <td>{product.price}</td>
                <td>{product.amount}</td>
                <td className="actionsButtonTable">
                  <button title="Editar Produto">
                    <FaUserPen />
                  </button>
                  <button title="Deletar Produto">
                    <BiSolidUserX />
                  </button>
                </td>
              </tr>
            ))}
          </Styles.TbodyTable>
        )}
      </Styles.TableProduct>
    </Styles.MainTable>
  );
};

export default TableProducts;
