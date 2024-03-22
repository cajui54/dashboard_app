import React, { useEffect, useState, FocusEvent } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../redux/slices/sliceProduct";
import { useForm } from "react-hook-form";
import { LuPackageSearch } from "react-icons/lu";
import { GiCancel } from "react-icons/gi";
import * as Styles from "./Search.css";
import useRequestProduct from "../../../hooks/useRequestProduct";
import { IStockAs } from "../../../interfaces/Stock";
const configRequiredForm = {
  default: { Input: "", asteristic: "" },
  errorRequired: {
    Input: "isRequiredInput",
    asteristic: "isRequiredAsteristic",
  },
};
interface IForm {
  search: string;
}
interface INotFoundProduct {
  status: boolean;
  message: string;
}
const Search = () => {
  const dispatch = useDispatch();
  const { products } = useRequestProduct();
  const [notFoundProduct, setNotFoundProduct] = useState<INotFoundProduct>({
    status: false,
    message: "",
  });
  const [focusClass, setFocusClass] = useState<"" | "focusClass">("");
  const [requiredForm, setRequiredForm] = useState(configRequiredForm.default);
  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ defaultValues: { search: "" } });

  const handleReset = () => {
    setFocusClass("");
    setRequiredForm(configRequiredForm.default);
    setNotFoundProduct({ status: false, message: "" });
    if (products) {
      dispatch(setProducts(products as IStockAs[]));
    }
  };
  const handleSearch = (data: { search: string }) => {
    const regex = new RegExp(data.search, "i");
    try {
      if (products) {
        const filterProduct = products.filter(
          (products) =>
            typeof products.description === "string" &&
            regex.test(products.description)
        );
        if (filterProduct.length > 0) {
          console.log(filterProduct);

          dispatch(setProducts(filterProduct as IStockAs[]));
        } else {
          setNotFoundProduct({
            status: true,
            message: `O produto ${data.search} não foi encontrado!`,
          });
        }
      }
    } catch (e) {
      alert(`Ocorreu um erro inesperado \n ${e}`);
    }
  };
  const handleFocus = () => {
    setFocusClass("focusClass");
  };
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setFocusClass("");
    }
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (errors.search) {
      setRequiredForm(configRequiredForm.errorRequired);
    } else {
      setRequiredForm(configRequiredForm.default);
    }
  }, [errors]);
  return (
    <Styles.SearchMain>
      <form onSubmit={onSubmit}>
        <Styles.ContainerInput>
          <label>
            <p className={focusClass}>Pesquisar Produto:</p>
            <input
              className={requiredForm.Input}
              type="text"
              onBlurCapture={handleBlur}
              onFocus={handleFocus}
              {...register("search", { required: true, minLength: 2 })}
            />

            <Styles.ContainerButtons>
              <button onClick={() => handleSubmit(handleSearch)()}>
                <LuPackageSearch />
              </button>
              <button type="reset" onClick={handleReset}>
                <GiCancel />
              </button>
            </Styles.ContainerButtons>

            <span className={requiredForm.asteristic}>*</span>
          </label>
          {errors.search?.type === "required" && (
            <p className="isRequiredLable">
              Por favor preencha o campo obrigatório!
            </p>
          )}
          {errors.search?.type === "minLength" && (
            <p className="isRequiredLable">
              Campo deve conter ao menos 4 caracteres!
            </p>
          )}
        </Styles.ContainerInput>
        {notFoundProduct.status && (
          <p className="isRequiredLable">{notFoundProduct.message}</p>
        )}
      </form>
    </Styles.SearchMain>
  );
};

export default Search;
