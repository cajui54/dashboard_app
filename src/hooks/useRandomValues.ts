import React from 'react'
import useRequestUser from './useRequestUser';

const useRandomValues = () => {
    const {datas} = useRequestUser();

    const handleValueRandom = (number: number): string => {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let valuesRandom: string = '';
        let count = 0;
        const getRA = datas?.map(data => 'ra' in data && data.ra);
  
        do{
          while(count < number) {
            const index = Math.floor(Math.random() * alphabet.length);
            valuesRandom += alphabet[index];
            count+=1;
          }
        } while(getRA?.includes(valuesRandom) === true);
        
        return valuesRandom;
      }

  return {handleValueRandom}

}

export default useRandomValues
