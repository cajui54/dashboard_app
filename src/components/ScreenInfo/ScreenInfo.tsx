import * as Style from './ScreenInfo.css';
import { DatasListProps } from '../../interfaces/ScreenInfo';
import ErrorMessage from '../Messages/Error/ErrorMessage';
import WarningMessage from '../Messages/Warning/WarningMessage';

const ScreenInfo = ({datas, titleMain, error, warning}: DatasListProps) => {
    
  return (
    <Style.MainScreenInfo>
      { titleMain && <h2>{titleMain}</h2>}
      <Style.ContainerInfo>
        { datas && (
            datas.map((data, index) => (
              <Style.InfoItem key={index}>
                {<data.svg/>}
              
              <div>
                <h3>{data.subTitle}:</h3>
                <p>{data.amount}</p>
              </div>
            </Style.InfoItem>
            ))
          )}

      </Style.ContainerInfo>
      {error.status && <ErrorMessage text={error.message}/>}
      {warning.status && <WarningMessage text={warning.message}/>}
    </Style.MainScreenInfo>
  )
}

export default ScreenInfo
