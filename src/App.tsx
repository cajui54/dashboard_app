import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/main/*' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
