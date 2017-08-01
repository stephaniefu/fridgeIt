import React from 'react';

const RecipeEntry = ({ recipe }) => {
  return (
    <div className="recipeentry">
     <a href={recipe.url} target="_blank"><img className="recipeimage" src={recipe.image}/></a><br/>
      <a className="recipename" href={recipe.url} target="_blank">{recipe.label}</a>
      <h3 className="calories"> {Math.round(recipe.calories)} calories</h3>
    </div>
  );
};

export default RecipeEntry;