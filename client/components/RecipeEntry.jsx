import React from 'react';

const RecipeEntry = ({ recipe, handleOnSave, showSaved }) => {
  console.log('this is my recipe entry arr', recipe)
  return (
    <div className="recipeentry">
     <a href={recipe.url} target="_blank"><img className="recipeimage" src={recipe.image}/></a><br/>
      <a className="recipename" href={recipe.url} target="_blank">{recipe.label}</a>
       <h3 className="calories"> {Math.round(recipe.calories)} calories</h3> 
      <button className="savebutton" onClick={() => handleOnSave(recipe.url, recipe.label, recipe.calories)}>Save Recipe!</button> 
    </div>
  );
};

export default RecipeEntry;


