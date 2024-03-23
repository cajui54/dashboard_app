import React, { useState, useEffect } from 'react';
import { IDefaultStates } from '../interfaces/Admin';
import { messagesConfig } from '../config/configMessage';
interface ICategory {
    type: string,
    value: string,
}
const useRequestCategory = () => {
    const data = [
        {type: "refrigerante", value: "Refrigerante"},
        {type: "cerveja", value: "Cerveja"},
        {type: "energetico", value: "Energético"},
        {type: "vodka", value: "Vodka"},
        {type: "cachaça", value: "Cachaça"},
        {type: "vinho", value: "Vinho"},
        {type: "wisky", value: "Wisky"},
        {type: "salgadinho", value: "Salgadinho"},
      ]
    const [categories, setCategories] = useState<null | ICategory[]>(null);
    const [categoriesError, setCategoriesError] = useState<IDefaultStates>(messagesConfig.defaultConfig);
    const [categoriesLoading, setCategoriesLoading] = useState<IDefaultStates>(messagesConfig.defaultConfig);

    useEffect(() => {
        const requestCategories = () => {
            try {
                setCategoriesLoading({status: true, message: 'Carregando...'});
                setCategories(data);
            } catch(error) {
                setCategoriesError({status: true, message: `${error}`});
            } finally {
                setCategoriesLoading(messagesConfig.defaultConfig);
            }
        }
        requestCategories();
    }, []);
  
    return { categories, categoriesError, categoriesLoading }
}

export default useRequestCategory
