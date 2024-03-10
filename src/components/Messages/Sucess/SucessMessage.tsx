import * as Styled from './SucessMessage.css';
import { IProps } from '../../../interfaces/Messages'

const SucessMessage = ({text}: IProps) => {
  return (
    <Styled.MainMessage>
      <p>{text}</p>
    </Styled.MainMessage>
  )
}

export default SucessMessage
