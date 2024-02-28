import * as Style from './ScreenInfo.css';
import { FaUsers, FaUserTie, FaUser, FaUserCog } from "react-icons/fa";
import { IScreenInfo } from '../../interfaces/ScreenInfo';

interface DatasListProps  {
  datas: IScreenInfo[],
  titleMain: string,
  error: {status: boolean, message: string},
}
const ScreenInfo = ({datas, titleMain}: DatasListProps) => {
    
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
    </Style.MainScreenInfo>
  )
}

export default ScreenInfo
