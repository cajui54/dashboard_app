import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/sliceProduct";
import * as Styles from "./Stock.css";
import TableProducts from "../../components/Table/TableProducts";
import Search from "./search/Search";
import useRequestProduct from "../../hooks/useRequestProduct";
import FormStock from "./form/FormStock";
const Stock = () => {
  const dispatch = useDispatch();
  const { products } = useRequestProduct();

  useEffect(() => {
    if (products) {
      dispatch(setProducts(products));
    }
  }, [products]);

  return (
    <Styles.MainStock>
      <h1>Gerenciamento de Estoque</h1>

      <Styles.ContainerComponents>
        <Styles.ContainerTable>
          <Search />
          <TableProducts />
        </Styles.ContainerTable>
        <FormStock />
      </Styles.ContainerComponents>
    </Styles.MainStock>
  );
};

export default Stock;
