
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componanat/about/About';

import Heade from './Componanat/header/Heade';
import Shop from './Componanat/header/Shop/Shop';
import Inventory from './Componanat/Inventory/Inventory';
import Orders from './Componanat/orders/Orders';

function App() {
  return (
    <div>
     <Heade></Heade>
     <Routes>
      <Route path='/shop'element = {<Shop></Shop>}></Route>
      <Route path='/about'element = {<About></About>}></Route>
      <Route path='/inventory'element = {<Inventory></Inventory>}></Route>
      
      <Route path='/orders'element = {<Orders></Orders>}></Route>

     </Routes>
    
    </div>
  );
}


export default App;
