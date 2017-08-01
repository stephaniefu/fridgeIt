import React from 'react';
import FoodEntry from './FoodEntry.jsx';

const FoodList = ({ produces, handleOnDelete, handleOnClick }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Consume By</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
          {produces.map((produce, i) => (
            <FoodEntry produce={produce} i={i} handleOnDelete={handleOnDelete} handleOnClick={handleOnClick}/>
          ))}
      </tbody>
  </table>
  );
};

export default FoodList;


