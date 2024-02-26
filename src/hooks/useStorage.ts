import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { selectorUser } from '../redux/slices/sliceUser';
import { IUser } from '../interfaces/User';
const useStorage = () => {
    const userData = useSelector(selectorUser);
    const [user, setUser] = useState<null | IUser>(null)
    const [loading, setLoadind] =  useState<boolean>(true);
    const [error, setError] =  useState<string | null>(null);

    useEffect(() => {
        const loadStorage = () => {
         try {
          if(sessionStorage) {
            const userJson = sessionStorage.getItem('user');
  
            if(userJson) {
              const objUser = userJson && JSON.parse(userJson);
  
              setUser(objUser);
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
  return {user, loading, error};
}

export default useStorage
