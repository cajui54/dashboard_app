import React, { useEffect, useRef, useState } from "react";
import { FaBoxesPacking, FaArrowRotateLeft } from "react-icons/fa6";
import { MdCancelScheduleSend } from "react-icons/md";
import { CiBoxes } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import * as Styles from "./Form.css";
import * as MainStyles from "../../../App.css";
import { useForm } from "react-hook-form";
import { IValuesDefault, IStock } from "../../../interfaces/Stock";
import useRandomValues from "../../../hooks/useRandomValues";
import useRequestProduct from '../../../hooks/useRequestProduct';
import { Keys } from "../../../interfaces/Stock";
import useRequestCategory from "../../../hooks/useRequestCategory";
import ErrorMessage from "../../../components/Messages/Error/ErrorMessage";
import { useSelector, useDispatch } from "react-redux";
import { setIdProduct } from "../../../redux/slices/sliceProduct"; 
import { selectorProducts } from "../../../redux/slices/sliceProduct";

interface IPrevEdit {
  status: boolean,
  textTitle:  string,
}
const configPreEdit: {editOff: IPrevEdit, editOn: IPrevEdit} = {
  editOff: {status: false, textTitle: 'Cadastrar Produto',},
  editOn: {status: true, textTitle: 'Editar Produto'},
}
const FormStock = () => {
  const {idProduct} = useSelector(selectorProducts);
  const dispatch = useDispatch();
  const {addNewProduct, products, editProduct} = useRequestProduct();
  const {categories, categoriesError, categoriesLoading} = useRequestCategory();
  const { handleValueRandom } = useRandomValues();
  const [preEdit, setPreEdit] = useState<IPrevEdit>(configPreEdit.editOff);
  const [callReset, setCallReset] = useState<"" | "reset">("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [valuesDefault] = useState<IValuesDefault>({
    ra: handleValueRandom(5).toUpperCase(),
    description: "",
    brand: "",
    type: "",
    price: 1,
    amount: 1,
  });
  
  const {
    handleSubmit,
    register,
    resetField,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { ...valuesDefault } });

  const convertValueToNumber = (value: number | string) => typeof value === 'number' ? value : parseFloat(value);

  const handleReset = () => {
    Object.keys(valuesDefault).forEach((key: string) => {
      resetField(key as Keys);
    });
    setCallReset("reset");
  };    
  const onSubmitProduct = (data: IValuesDefault) => {
    try {
      setIsLoading(true);
      addNewProduct(data);
    } catch (error) {

    } finally {
      setTimeout(() => {
        setIsLoading(false);
        handleReset();
      }, 1500);
    }
  };
  const handleEditProduct = (data: IValuesDefault) => {
    if(window.confirm(' - Tem certeza que deseja editar esse produto? \n')) {
      try {
        editProduct({...data, id: idProduct});
  
      } catch(error) {
        alert(`Ocorreu um error inesperado ao editar produto! \n ${error}`)
      } finally {
        setTimeout(() => {
          setIsLoading(false);
          handleReset();
        }, 1500);
      }
    }
  }
  useEffect(() => {
    if (callReset === "reset") {
      setValue("ra", handleValueRandom(5).toUpperCase());
      setCallReset("");
      setPreEdit(configPreEdit.editOff);
      dispatch(setIdProduct(null));
    }
  }, [callReset]);

  useEffect(() => {
    if(idProduct) {
      const dataItem = products.find(item => item.id === idProduct);
      if(dataItem) {
        setValue("ra", dataItem.ra.toString());
        setValue("description", dataItem.description.toString());
        setValue("brand", dataItem.brand.toString());
        setValue("type", dataItem.type.toString());
        setValue("amount", convertValueToNumber(dataItem.amount));
        setValue("price", convertValueToNumber(dataItem.price));

        setPreEdit(configPreEdit.editOn);
      }
    }
  }, [idProduct])
  return (
    <Styles.MainFormStock>
      <Styles.LogoForm>
        <div>
          {!preEdit.status ? <CiBoxes /> : <FaEdit className="editSVG"/>}
          <h2 className= {preEdit.status ? "editStyle" : "" } >{preEdit.textTitle}</h2>
        </div>
      </Styles.LogoForm>
      <MainStyles.FieldsetContainer>
        <h6 className= {preEdit.status ? "editStyle" : "" }>Preencha todos os campos abaixo:</h6>

        <MainStyles.InputContainer>
          <label>
            <p className= {preEdit.status ? "editStyle" : "" }>Código:</p>

            <input
              title="Código é gerado pelo sistema"
              style={{ cursor: "not-allowed" }}
              maxLength={4}
              type="text"
              {...register("ra", { required: true, minLength: 4 })}
              placeholder="XXXX"
              readOnly
            />

            <span>*</span>
          </label>
          {errors.ra?.type === "required" && (
            <p className="errorMessage">Campo RA é obrigatório!</p>
          )}
          {errors.ra?.type === "minLength" && (
            <p className="errorMessage">
              Campo RA deve conter ao menos 4 caracteres!
            </p>
          )}
        </MainStyles.InputContainer>

        <MainStyles.InputContainer>
          <label>
            <p className= {preEdit.status ? "editStyle" : "" } >Descrição do Produto:</p>
            <input
              type="text"
                {...register("description",
                  { required: true,
                    minLength: 5,
                    validate: (value: string) => {
                      if(!idProduct) {
                        const getProducts = products && products.map((product) => product.description)
                        return !getProducts.includes(value);
                      }
                      return true;
                    }
                  })}
              placeholder="Dolly Guaraná 2 L"
            />
            <span>*</span>
          </label>
          {errors.description?.type === "required" && (
            <p className="errorMessage">Campo Nome é obrigatório!</p>
          )}
          {errors.description?.type === "minLength" && (
            <p className="errorMessage">
              Campo Nome deve conter ao menos 4 caracteres!
            </p>
          )}
             {errors.description?.type === "validate" && (
            <p className="errorMessage">
              Já exite esse produto cadastrado no sistema!
            </p>
          )}
        </MainStyles.InputContainer>

        <MainStyles.InputContainer>
          <label>
            <p className= {preEdit.status ? "editStyle" : "" }>Marca:</p>
            <input
              type="text"
              {...register("brand", { required: true })}
              placeholder="Dolly"
            />
            <span>*</span>
          </label>
          {errors.brand?.type === "required" && (
            <p className="errorMessage">Campo Marca é obrigatório!</p>
          )}
        </MainStyles.InputContainer>

        {!categoriesError.status ? (
          <MainStyles.SelectContainer>
            <label>
              <p className= {preEdit.status ? "editStyle" : "" } >Categoria</p>
              { categoriesLoading.status && <FaArrowRotateLeft className="loadingArrow" /> }
              <select defaultValue={""} {...register("type", { required: true })}>
              { !categoriesLoading.status ? (
                <>
                  <option value="" disabled>Selecione</option>
                  { categories && categories.map((category, index) => (
                      <option key={index} value={category.type}>{category.value}</option>
                    ))}
                </>
              ) : (
                <option value="">Carregando...</option>
              )}
              </select>
              <span>*</span>
            </label>
            {errors.type?.type === "required" && (
              <p className="errorMessage">Selecione uma opção</p>
            )}
          </MainStyles.SelectContainer>
        ) : (
          <ErrorMessage text={`Ocorreu um erro em categorias! ${categoriesError.message}`}/>
        )}
      

        <MainStyles.InputContainer>
          <label>
            <p className= {preEdit.status ? "editStyle" : "" }>Quantidade:</p>
            <input
              type="number"
              {...register("amount", { required: true })}
              placeholder="0"
              min={1}
            />
            <span>*</span>
          </label>
          {errors.amount?.type === "required" && (
            <p className="errorMessage">Campo Quantidade é obrigatório!</p>
          )}
        </MainStyles.InputContainer>

        <MainStyles.InputContainer>
          <label>
            <p className= {preEdit.status ? "editStyle" : "" }>Preço R$:</p>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="R$:0,00"
              min={1}
            />
            <span>*</span>
          </label>
          {errors.price?.type === "required" && (
            <p className="errorMessage">Campo Quantidade é obrigatório!</p>
          )}
        </MainStyles.InputContainer>

        <MainStyles.ButtonsContainer>
          {!isLoading && (
            !preEdit.status && (
              <button onClick={() => handleSubmit(onSubmitProduct)()}>
                <FaBoxesPacking />
                Confirmar
              </button>
            )
          )}
          {!isLoading && (
            preEdit.status && (
            <button className='editButton' onClick={() => handleSubmit(handleEditProduct)()}>
              <FaEdit  />
              Editar
            </button>
            )
          )}
          {isLoading && (
            <button disabled>
              <FaArrowRotateLeft className="loadingArrow" />
              Salvando...
            </button>
          )}

          <button type="reset" onClick={handleReset}>
            <MdCancelScheduleSend />
            Cancelar
          </button>
        </MainStyles.ButtonsContainer>
      </MainStyles.FieldsetContainer>
    </Styles.MainFormStock>
  );
};

export default FormStock;
