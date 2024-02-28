import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { selectorUser } from '../redux/slices/sliceUser';
import { IUser } from '../interfaces/User';

const useStorage = (key: string) => {
    const userData = useSelector(selectorUser);
    const [user, setUser] = useState<null | IUser>(null)
    const [loading, setLoadind] =  useState<boolean>(true);
    const [error, setError] =  useState<string | null>(null);
    
    const saveAllDatas = <T,>(datas: T, key: string) => {
      try {
        if(sessionStorage) {
          datas && sessionStorage.setItem(key, JSON.stringify(datas));
        } else {
          throw Error ('Ocorreu um error no SessionStorage')
        }
        
      } catch(e) {

        alert(`${e}`);

      }
      
      return;
    }

    useEffect(() => {
        const loadStorage = () => {
         try {
          if(sessionStorage) {
            const datasJson = sessionStorage.getItem(key);
  
            if(datasJson) {
              const objDatas = datasJson && JSON.parse(datasJson);
  
              setUser(objDatas);
            }
              
          } else {
            setUser(userData);
          }
         } catch (error) {
            alert('Error ao carregar usuário! \n '+ error);
            setError(`Ocorreu um erro inesperado! \n ${error}`);
  
         } finally {
          setLoadind(false);
        }
          
        }
        loadStorage();
      }, [])
  return {user, loading, error, saveAllDatas};
}

export default useStorage
