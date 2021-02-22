import React from 'react';
import './categories.sass';

export default function Categories({ categoryNames }) {
  
  const loadCategories = () => {
    debugger;
    if (categoryNames && categoryNames.length) {
      return categoryNames.join(' > ')
    }
  }
  return (
    <div className="CategoriesContainer">
      <div className="CenterContainer">
        <p>{loadCategories()}</p>
      </div>
    </div>
  )
};