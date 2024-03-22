import React from 'react'

const SearchByType = () => {
  return (
    <div>
        <span>filtrar por: </span>
        <div>
            <label>
                <input type="radio" name="type" value='' checked/>
                <span>todos</span>
            </label>

            <label>
                <input type="radio" name="type" value='refrigerante'/>
                <span>Refrigerante</span>
            </label>
            
            <label>
                <input type="radio" name="type" value='cerveja'/>
                <span>Cerveja</span>
            </label>
        </div>
    </div>
  )
}

export default SearchByType
