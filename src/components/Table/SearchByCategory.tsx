import { useEffect } from 'react'
import * as MainStyles from '../../App.css'
import { useForm, useWatch } from "react-hook-form";
import useRequestCategory from '../../hooks/useRequestCategory';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/slices/sliceProduct';
import useRequestProduct from '../../hooks/useRequestProduct';
interface IType  {
  type: string,
}
const SearchByCategory = () => {
    const dispatch = useDispatch();
    const {products} = useRequestProduct();
    const {categories, categoriesLoading} = useRequestCategory();
    const {register , control, formState: {errors }} = useForm<IType>({defaultValues: {type: "all"}});
    const selectCategory = useWatch<IType>({control ,name: "type"});
    
    useEffect(() => {
      const searchByCategory = () => {
        if(products.length > 0) {
          const filterByCategory = products.filter((item) =>{ 
            if(selectCategory === "all") {
              return item;
            } 
            return item.type === selectCategory;
          });

          dispatch(setProducts(filterByCategory));
        }
      }
      searchByCategory();
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
