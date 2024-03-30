import React from 'react'
import useRequestProduct from '../../hooks/useRequestProduct';
const Home = () => {
  const {products} =useRequestProduct();

  return (
    <div>
      {products && <h2></h2>}
    </div>
  )
}

export default Home
