import {useEffect} from 'react';
import { SiHomebrew } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
import { FaBoxes } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { NavLink } from 'react-router-dom';
import useAccessSystem from '../../hooks/useAccessSystem';
import { useSelector } from 'react-redux';
import { selectorUser } from '../../redux/slices/sliceUser';
import useStorage from '../../hooks/useStorage';
import * as Style from './Navbar.css';

const Navbar = () => {
  const {accessState, dispatchAccess} = useAccessSystem();
  const { user } = useStorage('user');
  const dataUser = useSelector(selectorUser);
    
  useEffect(() => {
    if(user) {
      dispatchAccess(user.type);
     }
    else {
      dispatchAccess(dataUser.type);
    }
    
  }, [user]);
  
  
  return (
    <Style.NavMain>

      {accessState.home && <NavLink to='/main/home'>
        <SiHomebrew />
        <p>Home</p>
      </NavLink>}

      { accessState.finance && <NavLink to='/main/finance'>
        <VscGraph />
        <p>Financeiro</p>
      </NavLink>}

      {accessState.stock && <NavLink to='/main/storage'>
        <FaBoxes />
        <p>Estoque</p>
      </NavLink>}

      { accessState.admin && <NavLink to='/main/admin'>
        <FaUserTie />
        <p>Administrador</p>
      </NavLink>}

      <NavLink to='/'>
        <ImExit />
        <p>Sair</p>
      </NavLink>

    </Style.NavMain>
  )
}

export default Navbar
