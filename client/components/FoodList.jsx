import React from 'react';
import FoodEntry from './FoodEntry.jsx';

const FoodList = ({ produces, handleOnDelete, handleOnClick, handleGetAll }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Consume By</th>
          <th>Expired?</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th></th>
          <th>
            <button className="filterbutton" onClick={() => {handleGetAll()}}>Prioritize</button>
          </th>
          <th></th>
        </tr>
          {produces.map((produce, i) => (
            <FoodEntry produce={produce} i={i} handleOnDelete={handleOnDelete} handleOnClick={handleOnClick}/>
          ))}
      </tbody>
  </table>
  );
};

export default FoodList;


