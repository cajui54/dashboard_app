import ErrorMessage from '../components/Messages/Error/ErrorMessage';
import {useReducer} from 'react';
interface IMessage {
    status: boolean,
    type: string,
    message: string,
}
const intialeStatus: IMessage = {
    status: false,
    type: '',
    message: '',
}
const reducerMessage = (state: IMessage, action: IMessage): any => {
    switch(action.type) {
        case 'error':
            state = action;
            return state;
        default :
        return intialeStatus;
    }
}
const useMessages = () => {
    const [messageComponent, dispatchMessage] = useReducer(reducerMessage, intialeStatus);
    console.log(messageComponent);

  return {messageComponent, dispatchMessage}
}

export default useMessages
