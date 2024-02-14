import {RefObject} from 'react';

const useInputs = () => {
    
    const clearFields = (inputsForm: RefObject<HTMLFormElement>) => {
        const inputs = inputsForm && inputsForm.current!.querySelectorAll('[name]');
        inputs && inputs.forEach((input: any): void => {
          input.value = '';
        })
        
    }
  
  return {clearFields}
  
}

export default useInputs
