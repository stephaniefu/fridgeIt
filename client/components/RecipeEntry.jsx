import React from 'react';

const RecipeEntry = ({ recipe }) => {
  // console.log('this is recipe in entry', recipe.label)
  return (
    <div className="recipeentry">
     <a href={recipe.url} target="_blank"><img src={recipe.image} /></a><br/>
      <a classname="recipename" href={recipe.url} target="_blank">{recipe.label}</a>
    </div>
  );
};

export default RecipeEntry;