import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header1 from './header1';
import Header2 from './header2';
import Body from './body';
import Footer from './footer';
import Accessoires from './accessoire1';
import Livingroom from './livingroom';
import Bedroom1 from './bedroom1';
import Bathroom1 from './bathroom1';
import CartIconGl from './CartIconGl';
import LoginSignUp from "./loginsignup";
import PassCommande from "./passCommande";
///import CartBathIcon from "./CartBathIcon";
import { ShoppingCartProvider } from "./context/shoppingCart";
//import { BathroomProvider } from "./context/BathroomContext";
import AccessItem from "./AccessItem";
//import BathItem from "./bathItem";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header1 />
          <ShoppingCartProvider>
            <Header2 />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/accessoire1" element={<Accessoires />} />
              <Route path="/bathroom1" element={<Bathroom1 />} />
              <Route path="/bedroom1" element={<Bedroom1 />} />
              <Route path="/livingroom" element={<Livingroom />} />
              <Route path='/CartIconGl' element={<CartIconGl />} />
              <Route path='/loginsignup' element={<LoginSignUp />} />
              <Route path='/passCommande' element={<PassCommande />} />
            </Routes>
            <Footer />
          </ShoppingCartProvider>
         
        </div>
      </BrowserRouter>
    );
  }
}

export default App;