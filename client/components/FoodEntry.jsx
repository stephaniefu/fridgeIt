import React from 'react';

const FoodEntry = ({ produce, i, handleOnDelete, handleOnClick }) => {
  let year = produce.expiration.slice(0,4);
  let month = produce.expiration.slice(5, 7);
  let day = produce.expiration.slice(8,10);
  let expiration = new Date(produce.expiration);
  return (
    <tr className="tableitems">
        <td className="item" onClick={() => handleOnClick(produce.item)}>{produce.item}</td>
        <td>{month}/{day}/{year}</td>
          <td>{ expiration < new Date ? 'yes' : 'no' }</td>  
        <td><button className="removebutton" onClick={() => handleOnDelete(i, produce.id)}>Remove</button></td>
    </tr>
  );
};

export default FoodEntry;


//if produce.expiration < today's date, show X else show V
