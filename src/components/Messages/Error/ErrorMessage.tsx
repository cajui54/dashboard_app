import React from 'react';
import * as Style from './Error.css';
import { IProps } from "../../../interfaces/Messages";

const ErrorMessage = ({text}: IProps) => {
  return (
    <Style.ErrorMain className='errorMessage'>
      <h2>{text}</h2>
    </Style.ErrorMain>
  )
}

export default ErrorMessage
