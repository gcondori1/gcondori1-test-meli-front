import React from 'react';
import PropTypes from 'prop-types';
import './categories.sass';
/* eslint-disable consistent-return */
export default function Categories({ categoryNames }) {
  const loadCategories = () => {
    if (!categoryNames || categoryNames.length) {
      return;
    }
    return categoryNames.join(' > ');
  };
  return (
    <div className="CategoriesContainer">
      <div className="CenterContainer">
        <p>{loadCategories()}</p>
      </div>
    </div>
  );
}

Categories.propTypes = {
  categoryNames: PropTypes.node.isRequired,
};
