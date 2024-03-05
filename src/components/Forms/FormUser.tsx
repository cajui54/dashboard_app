// styles
import { useState } from 'react';
import * as Styles from './Form.css';
//icons
import { FaUserPlus, FaUserEdit} from "react-icons/fa";

interface IOptionUserForm {
    type: string;
}

const optionValues = {
    addUser: {type: 'add'},
    editUser: {type: 'edit'},
}

const FormUser = () => {
    const [editUser, setEditUser] = useState<IOptionUserForm>(optionValues.addUser);
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

      <form>
        <fieldset>
          <legend>Preencha os campos:</legend>

          <div>
              <label>
                  <p>Nome:</p>
                  <input type="text" />
                  <span>*</span>
              </label>
              <p>O campo nome é obrigatório!</p>
          </div>
        </fieldset>
      </form>

    </Styles.MainForm>
  )
}

export default FormUser;
