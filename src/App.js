import Header from "./components/Layout/Header";
import { useState } from 'react';
import './App.css';
import Footer from "./components/Layout/Footer";
import Home from './components/Pages/Home'
import Product from "./components/Pages/Product";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Product/>
      <Footer />
    </div>
  );
}

export default App;
