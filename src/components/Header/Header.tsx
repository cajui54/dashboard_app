import React from 'react'
import * as Style from './Header.css';
import Logo from '../Logo/Logo';
import ScreenUser from '../ScreenData/ScreenUser';
import Navbar from '../Navbar/Navbar';


const Header = () => {
  return (
    <Style.HeaderMain>
      <Logo widthprop={20}/>
      <ScreenUser/>
      <Navbar/>
    </Style.HeaderMain>
  )
}

export default Header
