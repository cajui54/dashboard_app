import { FocusEvent, FormEvent, useEffect, useState, useRef, RefObject} from 'react';
import {FieldValue, FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import * as Style from './Login.css';
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Logo from '../../components/Logo/Logo';
import useInputFocus from '../../hooks/useInputFocus';
import useInputs from '../../hooks/useInputs';
import { ILoginInputs } from '../../interfaces/Inputs';

function Login() {
  const useFormInput = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {focusClass, setFocusClass, callReset, setCallReset} = useInputFocus();
  const {clearFields } = useInputs();
  const { register, handleSubmit, formState: {errors}} = useForm<ILoginInputs>();
  
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.name && setFocusClass({...focusClass, [e.target.name]: 'focusInput__span'});
  }
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    
    !e.target.value && setFocusClass({...focusClass, [e.target.name]: ''});
    
  }

  const onSubmit = (data: ILoginInputs) => {
    console.log(data);
    setIsLoading(true);
  }

  const handleReset = () => setCallReset(true);

  console.log(callReset);
  
  useEffect(() => {
    if(callReset) {
      setFocusClass({});
      setCallReset(false);

    } else  if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        setFocusClass({});
        useFormInput && clearFields(useFormInput);
      }, 1000);
    }
    
    
  }, [callReset, isLoading]);

  return (
    <Style.LoginMain>
      <Style.FormContainer>
        <Logo/>

        <Style.Form ref={useFormInput}>

          <Style.InputContainer>

            <label>
              <span className={focusClass.login && focusClass.login!}>Login</span>
              <FaUserAstronaut  className={focusClass.login && 'focusInput__svg'}/>
              
              <input 
                type="text"
                {...register('login', {required: true})}
                onFocus={handleFocus}
                onBlur={handleBlur}
                />
      
              {errors?.login?.type === 'required' && (
                <p className='errorMessage'>O campo login é obrigatório! </p>
              )}
            </label>

            <label>
              <span className={focusClass.password && focusClass.password!}>
                Senha:
              </span>

              <RiLockPasswordFill className={focusClass.password! && 'focusInput__svg'}/>
              <input
                type="password" 
                required
                {...register('password', {required: true})}
                onFocus={handleFocus}
                onBlur={handleBlur}
                />

              {errors?.password?.type === 'required' && (
                <p className='errorMessage'>Campo senha é obrigatório!</p>
              )}
            </label>
          </Style.InputContainer>

          <Style.ButtonsContainer>
            {!isLoading && <button type='submit' onClick={() => handleSubmit(onSubmit)()}>Confirmar</button>}
            {isLoading && <button disabled>Carregando...</button>}
            <button type='reset' onClick={handleReset}>Cancelar</button>
          </Style.ButtonsContainer>

        </Style.Form>

      </Style.FormContainer>
    </Style.LoginMain>
  )
}

export default Login
