import React, { useState } from 'react';

import Navbar from './Compenents/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOreder';
import Footer from './Compenents/Footer/Footer';
import Login from './Compenents/LoginPopUp/LoginPopUp';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <div className='app'>
        {/* Pass setShowLogin correctly as a prop */}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
