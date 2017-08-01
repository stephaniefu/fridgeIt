import React from 'react';

const FoodEntry = ({ produce, i, handleOnDelete, handleOnClick }) => {
  return (
    <tr className="tableitems">
        <td className="item" onClick={() => handleOnClick(produce.item)}>{produce.item}</td>
        <td>{produce.expiration}</td>
        <td><button onClick={() => handleOnDelete(i, produce.id)}>Remove</button></td>
    </tr>
  );
};

export default FoodEntry;



