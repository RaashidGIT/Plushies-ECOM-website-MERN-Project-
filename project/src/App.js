// src/App.js
import React from 'react';

import ProductList from './component/productList';
import BasicExample from './component/navbar';
import Footer from './component/footer';
// import Cart from './component/cart';
import './App.css'; // Import default CSS

function App() {
    return (
        <div className="app">
            <BasicExample />
            <ProductList />
            <Footer />
            {/* <Cart /> */}
        </div>
    );
}

export default App;
