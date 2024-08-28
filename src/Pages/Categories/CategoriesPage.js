import React from 'react';
import './CategoriesPage.css';

const categories = [
  { id: 1, name: 'Category 1', description: 'Shop the latest electronics' },
  { id: 2, name: 'Category 2', description: 'Shop the latest electronics' },
  { id: 3, name: 'Category 3', description: 'Shop the latest electronics' },
  { id: 4, name: 'Category 4', description: 'Shop the latest electronics' },
  { id: 5, name: 'Category 5', description: 'Shop the latest electronics' },
  { id: 6, name: 'Category 6', description: 'Shop the latest electronics' },
];

function CategoriesPage() {
  return (
    <div className="CategoriesPage">
      <h1>Shop by Categories</h1>
      <div className="categories-list">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
