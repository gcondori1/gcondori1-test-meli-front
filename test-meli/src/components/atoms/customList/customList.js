import React from 'react';
import CustomListItem from '../customListItem/customListItem';

export default function CustomList({ items }) {
  return (
    items ? items.map(item => 
    <CustomListItem item={item} />
    ) : <div>
      no se encontraron datos
    </div>
  )
};