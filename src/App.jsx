
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import Details from './Details';
import Shoppingcart from './Shoppingcart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Shoppingcart/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Products/Details/:id" element={<Details/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
