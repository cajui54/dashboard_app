import { FaArrowsRotate } from "react-icons/fa6";
import * as Style from './Loading.css';

interface message {
    text: string
}
const LoadingMessage = ({text}: message) => {
  return (
    <Style.LoadingMain>
      {text && <p>
        <FaArrowsRotate />
        {text}
      </p>}
    </Style.LoadingMain>
  )
}

export default LoadingMessage
