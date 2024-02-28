import * as Style from './WarningMessage.css';
import { CiWarning } from "react-icons/ci";
import { IProps } from '../../../interfaces/Messages';

const WarningMessage = ({text}: IProps) => {
  return (
    <Style.MainWarning>
      <p>
        <CiWarning />
        {text && <span>{text}</span>}
      </p>
    </Style.MainWarning>
  )
}

export default WarningMessage
