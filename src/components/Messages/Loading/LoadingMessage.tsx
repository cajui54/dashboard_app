import { FaArrowsRotate } from "react-icons/fa6";
import { IProps } from "../../../interfaces/Messages";
import * as Style from './Loading.css';


const LoadingMessage = ({text}: IProps) => {
  return (
    <Style.LoadingMain className="loadindComponent">
      {text && <p>
        <FaArrowsRotate />
        {text}
      </p>}
    </Style.LoadingMain>
  )
}

export default LoadingMessage
