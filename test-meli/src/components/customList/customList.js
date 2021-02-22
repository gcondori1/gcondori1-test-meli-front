import React from 'react';
import CustomListItem from '../customListItem/customListItem';
import './customList.sass'

export default function CustomList({ items }) {
  return (
    <div className="CustomListContainer">
      <div className="GridContainer">
        <div className="ListContainer" >
          {items.map(item => 
            <CustomListItem item={item} />
          )}
        </div>
      </div>
    </div>
  )
};