// styles
import { FormEvent, useEffect, useState } from 'react';
import * as Styles from './Form.css';
import * as MainStyles from '../../pages/Main/Main.css';
//icons
import { FaUserPlus, FaUserEdit} from "react-icons/fa";
// form lib
import {useForm } from 'react-hook-form';
import { IUserInputs } from '../../interfaces/Inputs';
import useRequestUser from '../../hooks/useRequestUser'
import useRandomValues from '../../hooks/useRandomValues';
import { messagesConfig } from '../../config/configMessage';
import { IMessage } from '../../interfaces/Messages';
import ErrorMessage from '../Messages/Error/ErrorMessage';
import SucessMessage from '../Messages/Sucess/SucessMessage';
import { typesKeys } from '../../interfaces/User';

interface IOptionUserForm {
    type: string;
}

const optionValues = {
    addUser: {type: 'add'},
    editUser: {type: 'edit'},
}

const formInputUser: IUserInputs = {
  login: '',
  password: '',
  ra: '',
  firstName: '',
  lastName: '',
  status: false,
  type: '',
}

const FormUser = () => {
    const {datas, addNewUser} = useRequestUser();
    const { handleValueRandom } = useRandomValues();
    const [inputDatas,  ] = useState({
      login: '',
      password: '',
      ra: handleValueRandom().toUpperCase(),
      firstName: '',
      lastName: '',
      status: false,
      type: 'default',
    })
    const {register, handleSubmit, resetField , clearErrors, formState: {errors}} = useForm<IUserInputs>({defaultValues: {...inputDatas}});
    const [editUser, setEditUser] = useState(optionValues.addUser);
    const [loading, setLoading] = useState<IMessage>(messagesConfig.defaultConfig);
    const [error, setError] = useState<IMessage>(messagesConfig.defaultConfig);

    const onSubmitForm = async (data: IUserInputs) => {
      try{
        await addNewUser(data);
        setLoading({status: true, message: 'Cadastrando...'});
     
      } catch (e) {
        setError({status: true, message: `Ocorreu um erro ineperado!`});
      } finally {
        setInterval(() => {
          setLoading(messagesConfig.defaultConfig);
          formInputUser.ra = handleValueRandom().toUpperCase();
          resetField('firstName');
          resetField('lastName');
          formInputUser.type = 'default';
          resetField('login');
          resetField('password');
        }, 2000);
      }
      return ;
    }
    const handleReset = () => {
      clearErrors();
    }
 
    const prevSubmit = (event: FormEvent) => {
      event.preventDefault();
      handleSubmit(onSubmitForm)();
    }
    useEffect(() => {
      
    }, [inputDatas]);

  return (
    <Styles.MainForm>
      <Styles.ContainerInfo>
            {editUser.type === 'add' ? <FaUserPlus className='addSvg'/> : <FaUserEdit className='editSvg'/>}
            <h2>
                {
                    editUser.type === 'add' ? <span className='addSvg'>Cadastrar Usuário(a)</span> : <span className='editSvg'>Editar Usuário(a)</span>
                }
            </h2>
      </Styles.ContainerInfo>

      <Styles.Form onSubmit={prevSubmit}>
        <fieldset>
          <legend>Preencha os campos:</legend>

          <MainStyles.InputContainer>
              <label>
                  <p className={errors.ra?.type === 'required' ? 'isRequiredLable' : ''}>
                    RA:
                  </p>

                  <input
                    className={errors.ra?.type === 'required' ? 'isRequiredInput' : ''}
                    type="text"
                    maxLength={4}
                    {...register('ra', {required: true})}
                    readOnly
                  />

                  <span style={{color: errors.ra?.type === 'required' ? '#ef4444' : '#fff'}}>*</span>
              </label>
              {errors.ra?.type === 'required' && <p className='errorMessage'>O campo RA é obrigatório!</p>}
          </MainStyles.InputContainer>

          <MainStyles.InputContainer>
              <label>
                  <p className={errors.firstName?.type === 'required' ? 'isRequiredLable' : ''}>
                    Nome:
                  </p>

                  <input 
                    type="text"
                    className={errors.firstName?.type === 'required' ? 'isRequiredInput' : ''}
                    {...register('firstName', {required: true})}
                    />

                  <span style={{color: errors.firstName?.type === 'required' ? '#ef4444' : '#fff'}}>*</span>
              </label>
              {errors.firstName?.type === 'required' && <p className='errorMessage'>O campo nome é obrigatório!</p>}
          </MainStyles.InputContainer>

          <MainStyles.InputContainer>
              <label>
                  <p className={errors.lastName?.type === 'required' ? 'isRequiredLable' : ''}>
                    Sobrenome:
                  </p>

                  <input
                    type="text" 
                    className={errors.lastName?.type === 'required' ? 'isRequiredInput' : ''}
                    {...register('lastName', {required: true})}
                  />
                  <span style={{color: errors.lastName?.type === 'required' ? '#ef4444' : '#fff'}}>
                    *
                  </span>
              </label>

              {errors.lastName?.type === 'required' && <p className='errorMessage'>O campo sobrenome é obrigatório!</p>}
          </MainStyles.InputContainer>

          <MainStyles.SelectContainer>
              <label>
                  <p>Tipo:</p>
                  <select {...register('type', {required: true})} defaultValue='default'>
                    <option value="default">Atendente</option>
                    <option value="stock">Estoquista</option>
                    <option value="finance">Financeiro</option>
                    <option value="admin">Administrador</option>
                  </select>
                  <span>*</span>
              </label>
              {errors.type?.type === 'required' && <p className='errorMessage'>Selecione um tipo de usuário</p>}
          </MainStyles.SelectContainer>

          <MainStyles.InputContainer>
              <label>
                  <p className={errors.login ? 'isRequiredLable' : ''}>
                    Usuário:
                  </p>

                  <input
                    type="text"
                    className={errors.login ? 'isRequiredInput' : ''} 
                    {...register('login', {
                      required: true,
                      minLength: 6,
                      validate: (value) => {
                        const getLogins = datas?.map(user => 'login' in user && user.login);

                        return getLogins?.includes(value) !== true;
                      }
                    })}
                  />
                  <span style={{color: errors.login ? '#ef4444' : '#fff'}}>
                    *
                  </span>
              </label>
              {errors.login?.type === 'required' && <p className='errorMessage'>O campo usuário é obrigatório!</p>}
              {errors.login?.type === 'minLength' && <p className='errorMessage'>Login deve conter ao menos 6 caracteres !</p>}
              {errors.login?.type === 'validate' && <p className='errorMessage'>Já exite um usuário com esse login!</p>}
          </MainStyles.InputContainer>

          <MainStyles.InputContainer>
              <label>
                  <p className={errors.password?.type === 'required' ? 'isRequiredLable' : ''}>
                    Senha:
                  </p>

                  <input
                    type="password"
                    className={errors.password?.type === 'required' ? 'isRequiredInput' : ''}
                    {...register('password', {required: true, minLength: 6})}
                  />
                  <span style={{color: errors.password?.type === 'required' ? '#ef4444' : '#fff'}}>
                    *
                  </span>
              </label>
              {errors.password?.type === 'required' && <p className='errorMessage'>O campo senha é obrigatório!</p>}
              {errors.password?.type === 'minLength' && <p className='errorMessage'>senha deve conter ao menos 6 caracteres!</p>}
          </MainStyles.InputContainer>
        </fieldset>

        <MainStyles.ContainerButtons>
          {!loading.status && <button type='submit'>Confirmar</button>}
          {loading.status && <button disabled>{loading.message}</button>}
          
          <button type='reset' onClick={handleReset}>Cancelar</button>
        </MainStyles.ContainerButtons>

        {error.status && <ErrorMessage text={error.message} />}
        {loading.status && <SucessMessage text='Usuário(a) cadastrado com sucesso!' />}
      </Styles.Form>

    </Styles.MainForm>
  )
}

export default FormUser;
