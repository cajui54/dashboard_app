import {useState} from 'react'
import { IFocusInput } from '../interfaces/Inputs';

const useInputFocus = () => {
    const [focusClass, setFocusClass] = useState<IFocusInput>({});
    const [callReset, setCallReset] = useState<boolean>(false);

  return {focusClass, setFocusClass, callReset, setCallReset}
}

export default useInputFocus
