import { useEffect } from 'react'
import * as MainStyles from '../../App.css'
import { useForm, useWatch } from "react-hook-form";
import useRequestCategory from '../../hooks/useRequestCategory';
import useSearchByCategory from '../../hooks/useSearchByCategory';

interface IType  {
  type: string,
}

const SearchByCategory = () => {
    const {setCategory} = useSearchByCategory();
    const {categories, categoriesLoading} = useRequestCategory();
    const {register , control, formState: {errors}} = useForm<IType>({defaultValues: {type: "all"}});
    const selectCategory = useWatch<IType>({control , name: "type"});
    
    useEffect(() => {
      setCategory(selectCategory);
    }, [selectCategory]);

  return (
    <div className='SearchByCategory'>
        <MainStyles.SelectContainer>
            <label>
              <p>Pesquisar por categoria: </p>

              <select
                defaultValue={"all"}
                {...register("type",
                  { required: true })}
              >

              <option value="all" >Todos</option>
              { !categoriesLoading.status ? (
                <>
                  { categories && categories.map((category, index) => (
                      <option key={index} value={category.type}>{category.value}</option>
                    ))}
                </>
              ) : (
                <option value="">Carregando...</option>
              )}
              </select>
              
            </label>
            {errors.type?.type === "required" && (
              <p className="errorMessage">Selecione uma opção</p>
            )}
          </MainStyles.SelectContainer>
      
    </div>
  )
}

export default SearchByCategory
