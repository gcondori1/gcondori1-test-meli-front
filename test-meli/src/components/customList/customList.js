import React from 'react';
import Categories from '../categories/categories';
import CustomListItem from '../customListItem/customListItem';
import './customList.sass'

export default function CustomList({ items, categories }) {
  return (
    <div className="CustomListContainer">
      <Categories categoryNames={categories}/>
      <div className="GridContainer">
        <div className="ListContainer" >
          {items.map(item => 
            <CustomListItem item={item} categories={categories}/>
          )}
        </div>
      </div>
    </div>
  )
};