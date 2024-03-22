import React, { useRef, useState } from "react";
import { FaBoxesPacking, FaArrowRotateLeft } from "react-icons/fa6";
import { MdCancelScheduleSend } from "react-icons/md";
import { CiBoxes } from "react-icons/ci";
import * as Styles from "./Form.css";
import * as MainStyles from "../../../App.css";
import { useForm } from "react-hook-form";
const initalesValeus = {
  ra: "",
  description: "",
  brand: "",
  type: "",
  price: 0,
  amount: 0,
};

const FormStock = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
  } = useForm({ defaultValues: { ...initalesValeus } });
  const refSpanFocus = useRef<HTMLParagraphElement | null>(null);
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(refSpanFocus.current);
  };
  return (
    <Styles.MainFormStock>
      <Styles.LogoForm>
        <div>
          <CiBoxes />
          <h2>Cadastrar Produto</h2>
        </div>
      </Styles.LogoForm>
      <MainStyles.FieldsetContainer>
        <h6>Preencha todos os campos abaixo:</h6>

        <MainStyles.InputContainer>
          <label>
            <p>RA:</p>
            <input
              maxLength={4}
              type="text"
              {...register("ra", { required: true, minLength: 4 })}
              onFocus={handleFocus}
              placeholder="XXXX"
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
            <p>Nome:</p>
            <input
              type="text"
              {...register("description", { required: true, minLength: 5 })}
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
        </MainStyles.InputContainer>

        <MainStyles.InputContainer>
          <label>
            <p>Marca:</p>
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

        <MainStyles.SelectContainer>
          <label>
            <p>Categoria</p>
            <select defaultValue={""} {...register("type", { required: true })}>
              <option value="">Selecione</option>
              <option value="refrigerante">Refrigerante</option>
            </select>
            <span>*</span>
          </label>
          {errors.type?.type === "required" && (
            <p className="errorMessage">Selecione uma opção</p>
          )}
        </MainStyles.SelectContainer>

        <MainStyles.InputContainer>
          <label>
            <p>Quantidade:</p>
            <input
              type="number"
              {...register("amount", { required: true })}
              placeholder="0"
              min={1}
            />
            <span>*</span>
          </label>
          {errors.brand?.type === "required" && (
            <p className="errorMessage">Campo Quantidade é obrigatório!</p>
          )}
        </MainStyles.InputContainer>

        <MainStyles.InputContainer>
          <label>
            <p>Preço R$:</p>
            <input
              type="number"
              {...register("amount", { required: true })}
              placeholder="R$:0,00"
              min={1}
            />
            <span>*</span>
          </label>
          {errors.brand?.type === "required" && (
            <p className="errorMessage">Campo Quantidade é obrigatório!</p>
          )}
        </MainStyles.InputContainer>

        <MainStyles.ButtonsContainer>
          <button>
            <FaBoxesPacking />
            Confirmar
          </button>
          {isLoading && (
            <button disabled>
              <FaArrowRotateLeft className="loadingArrow" />
              Salvando...
            </button>
          )}

          <button>
            <MdCancelScheduleSend />
            Cancelar
          </button>
        </MainStyles.ButtonsContainer>
      </MainStyles.FieldsetContainer>
    </Styles.MainFormStock>
  );
};

export default FormStock;
