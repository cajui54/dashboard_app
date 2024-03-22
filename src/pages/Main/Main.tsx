import { useSelector } from "react-redux";
import { selectorUser } from "../../redux/slices/sliceUser";
import Header from "../../components/Header/Header";
import * as MainStyle from './Main.css';
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Admin from "../Admin/Admin";
import useRequestUser from "../../hooks/useRequestUser";
import Stock from "../stock/Stock";


const Main = () => {
  
  return (
    <MainStyle.Main>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/storage' element={<Stock/>}/>
      </Routes>  
    </MainStyle.Main>
  )
}

export default Main
