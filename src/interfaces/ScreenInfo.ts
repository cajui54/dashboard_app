import { IconType } from 'react-icons';

export interface IScreenInfo {
    subTitle: string,
    type: string,
    svg: IconType,
    amount: number,
}

export interface DatasListProps  {
    datas: IScreenInfo[],
    titleMain: string,
    error: {status: boolean, message: string},
    warning: {status: boolean, message: string},
  }