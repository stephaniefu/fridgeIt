import React from 'react';
import RecipeEntry from './RecipeEntry.jsx';

const Recipes = ({ recipes }) => {
  // console.log('these are recipes in Recipe', recipes)
  return (
    <div>
      <h1 className="title">Recipes</h1>
      {recipes.map((recipe, i) => (
        <RecipeEntry recipe={recipe.recipe} key={i}/>
      ))}
    </div>
  );
};

export default Recipes;
