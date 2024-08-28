import React from 'react';
import './ProductsPage.css'; 

// Correct import paths
import image1 from '../../assets/backgroundimg.jpg';
import image2 from '../../assets/backgroundimg.jpg';
import image3 from '../../assets/backgroundimg.jpg';
import image4 from '../../assets/backgroundimg.jpg';
import image5 from '../../assets/backgroundimg.jpg';
import image6 from '../../assets/backgroundimg.jpg';
import image7 from '../../assets/backgroundimg.jpg';
import image8 from '../../assets/backgroundimg.jpg';

const products = [
  { id: 1, name: 'Product 1', description: 'Description for product 1', price: '$10.00', imageUrl: image1 },
  { id: 2, name: 'Product 2', description: 'Description for product 2', price: '$20.00', imageUrl: image2 },
  { id: 3, name: 'Product 3', description: 'Description for product 3', price: '$30.00', imageUrl: image3 },
  { id: 4, name: 'Product 4', description: 'Description for product 4', price: '$90.00', imageUrl: image4 },
  { id: 5, name: 'Product 5', description: 'Description for product 5', price: '$100.00', imageUrl: image5 },
  { id: 6, name: 'Product 6', description: 'Description for product 6', price: '$60.00', imageUrl: image6 },
  { id: 7, name: 'Product 7', description: 'Description for product 7', price: '$160.00', imageUrl: image7 },
  { id: 8, name: 'Product 8', description: 'Description for product 8', price: '$120.00', imageUrl: image8 },
];

function ProductsPage() {
  return (
    <div className="products-page" id="products">
      <h1>Our Products</h1>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;

