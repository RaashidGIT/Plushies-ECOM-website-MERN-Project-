// src/components/ProductList.js
import React from 'react';
import { products } from './product';
import ProductCard from './productCard';

const ProductList = () => {
    return (
        <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
