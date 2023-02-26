import './App.css';
import HomePage from './Components/Pages/Homepage.jsx';
import { Routes,Route } from 'react-router-dom';
import { SofaPage } from './Components/Pages/Sofas';
import { Cart } from './Components/Pages/Cart';
function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Sofas' element={<SofaPage/>}></Route>
        <Route path='/CartPage' element={<Cart/>}></Route>
        
    </Routes>
    
  );
}

export default App;
