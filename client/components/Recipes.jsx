import React, { Component } from 'react';
import RecipeEntry from './RecipeEntry.jsx';
import axios from 'axios';


class Recipes extends Component {
  constructor(props){
    super(props)
    this.state={
      showRecipes: true,
      showSaved: false,
      saved:[]
    }
    this.handleShowSaved=this.handleShowSaved.bind(this);
    this.handleOnSave=this.handleOnSave.bind(this);
  }

  handleShowSaved(){
    axios.get('http://localhost:3030/api/recipes')
      .then(data => {
        this.setState({
          saved: data.data,
          showRecipes: false,
          showSaved: true
        })
      })
      .catch(err => {
        console.log(err)
      })
  }


  handleOnSave(url, label, calories){
      axios.post('http://localhost:3030/api/recipes', {
        url: url,
        label: label,
        calories: calories
      })
      .then(data => {
        console.log('this is my data in onsave', data.data)
        this.setState({
          saved: [...this.state.saved, data.data]
        })
      })
      .catch(err => {
        console.log(err)
      })
    }

  render() {
    let arr;
    if (this.state.showSaved) {
       arr = this.state.saved
    } else {
       arr = this.props.recipes
    }
    return (
      <div className="recipepage">
        <h1 className="title">Recipes</h1>
        <button className="showsavedbutton" onClick={this.handleShowSaved} >Show Saved Recipes</button>
           {arr.map((recipe, i) => (
           <RecipeEntry recipe={recipe} key={i} handleOnSave={this.handleOnSave} showSaved={this.state.showSaved}/>
        ))} 
    </div>
    );
  }
}

export default Recipes;