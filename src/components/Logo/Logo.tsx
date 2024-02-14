import React from 'react';
import * as Style from './Logo.css'
import { FaStar, FaRegStar  } from "react-icons/fa";


const Logo = () => {
  return (
    <Style.LogoMain>
        <h1>DKebras</h1>
        <h3>Distribuidora de Bebidas</h3>
        <Style.SVGContainer>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
        </Style.SVGContainer>
    </Style.LogoMain>
  )
}

export default Logo
