import { FocusEvent, useEffect, useState, useRef, FormEvent} from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import {useForm} from 'react-hook-form';
import * as Style from './Login.css';
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Logo from '../../components/Logo/Logo';
import useInputFocus from '../../hooks/useInputFocus';
import useInputs from '../../hooks/useInputs';
import { ILoginInputs } from '../../interfaces/Inputs';
import LoadingMessage from '../../components/Messages/Loading/LoadingMessage';
import useRequestUser from '../../hooks/useRequestUser';
import ErrorMessage from '../../components/Messages/Error/ErrorMessage';

function Login() {
  const {findUser, isLoading, setIsLoading, error} = useRequestUser();
  const [showPassword, setShowPassword] = useState<{type: 'password' | 'text'}>({type:'password'});
  const [submit, setSubmit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const useFormInput = useRef<HTMLFormElement>(null);
  const {focusClass, setFocusClass, callReset, setCallReset} = useInputFocus();
  const {clearFields } = useInputs();
  const { register, handleSubmit, formState: {errors}} = useForm<ILoginInputs>();
  
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => e.preventDefault();
  
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.name && setFocusClass({...focusClass, [e.target.name]: 'focusInput__span'});
  }
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    
    !e.target.value && setFocusClass({...focusClass, [e.target.name]: ''});
    
  }
  const handleShowPassword = () => {
    if(showPassword.type === 'password') setShowPassword({type: 'text'});
    else setShowPassword({type: 'password'});
  }
  
  const callLoading = () => {
    setLoading(true);
    setIsLoading({status: true, message:'Carregando...'});

    setTimeout(() => {
      setFocusClass({});
      setIsLoading({status: false, message:''});
      setLoading(false);
      useFormInput && clearFields(useFormInput);
    }, 1000);

  }

  const onSubmit = (data: ILoginInputs) => {
    findUser(data);
    setSubmit(true);
  }

  const handleReset = () => setCallReset(true);
  
  useEffect(() => {
    if(submit) {
      console.log(error.status);
      if(!error.status) callLoading();
      setSubmit(false);
    }
  }, [submit]);

  useEffect(() => {
    if(callReset)  setFocusClass({});
    
  }, [callReset, error]);
  
  return (
    <Style.LoginMain>
      <Style.FormContainer>
        <Logo widthprop={80}/>

        <Style.Form ref={useFormInput} onSubmit={handleSubmitForm}>

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
                type={showPassword.type} 
                required
                {...register('password', {required: true})}
                onFocus={handleFocus}
                onBlur={handleBlur}
                />

              <Style.SVGPasswordEyes onClick={ handleShowPassword }>
                {showPassword.type === 'password' ? <FaEyeSlash /> : <IoEyeSharp />}
              </Style.SVGPasswordEyes>

              {errors?.password?.type === 'required' && (
                <p className='errorMessage'>Campo senha é obrigatório!</p>
              )}
            </label>
          </Style.InputContainer>

          <Style.ButtonsContainer>
            {!isLoading.status && <button type='submit' onClick={() => handleSubmit(onSubmit)()}>Confirmar</button>}
            {isLoading.status && <button disabled>Carregando...</button>}
            <button type='reset' onClick={handleReset}>Cancelar</button>
          </Style.ButtonsContainer>

          { loading && <LoadingMessage text={isLoading.message}/>}
          { error.status && <ErrorMessage text={error.message}/>}

        </Style.Form>

      </Style.FormContainer>
    </Style.LoginMain>
  )
}

export default Login
