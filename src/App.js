import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [itemCart, setItemCart] = useState([]);

  useEffect(() => {
    // Write code to make link 'Cart' in navbar signal indicating items have been added (Red circle)
  },[itemCart])
  return (
    <BrowserRouter>
      <div className="main-box">
        <Nav />
        <Routes>
          <Route path='/' exact element={<Homepage key="homepage" />} />
          <Route path='/shop' exact element={<Shop key="shop" setItemCart={setItemCart} itemCart={itemCart}/>} />
          <Route path='/cart' exact element={<Cart key="cart" setItemCart={setItemCart} itemCart={itemCart}/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
