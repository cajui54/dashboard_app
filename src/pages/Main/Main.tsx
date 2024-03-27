import Header from "../../components/Header/Header";
import * as MainStyle from './Main.css';
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Admin from "../Admin/Admin";
import Stock from "../stock/Stock";
import MainFinance from "../Finance/MainFinance";


const Main = () => {
  
  return (
    <MainStyle.Main>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/storage' element={<Stock/>}/>
        <Route path='/finance' element={<MainFinance/>}/>
      </Routes>  
    </MainStyle.Main>
  )
}

export default Main
