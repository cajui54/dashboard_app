import React from 'react';
import * as Style from './Logo.css'
import { FaStar, FaRegStar  } from "react-icons/fa";


const Logo = ({widthprop}: {widthprop: number}) => {
  
  return (
    <Style.LogoMain widthprop={widthprop}>
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
