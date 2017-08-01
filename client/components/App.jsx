import React, { Component } from 'react';
import axios from 'axios';
import FoodList from './FoodList.jsx';
import Browse from './Browse.jsx';
import Recipes from './Recipes.jsx';
import config from '../config';
import '../styles.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      produces:[],
      food:'',
      date: '',
      // browse: false,
      foodlist: true,
      recipes: []
    }
  this.handleOnChange=this.handleOnChange.bind(this);
  this.handleOnAdd=this.handleOnAdd.bind(this);
  this.handleGetAll=this.handleGetAll.bind(this);
  this.handleOnDelete=this.handleOnDelete.bind(this);
  this.handleOnClick=this.handleOnClick.bind(this);
  // this.handleOnBrowse=this.handleOnBrowse.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:3030/api/foods')
     .then(data => {
      this.setState({
        produces: data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleOnChange(e){
    let input = e.target.name;
    this.setState({
      [input]: e.target.value
    })
  }
  handleOnAdd(){
    axios.post('http://localhost:3030/api/foods', {
      item: this.state.food,
      expiration: this.state.date
    })
    .then(data => {
      this.setState({
        produces: [...this.state.produces, data.data],
        food: '',
        date: ''
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  handleGetAll(){
    axios.get('http://localhost:3030/api/foods')
    .then(data => {
      this.setState({
        produces: data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleOnDelete(i, id){
    this.state.produces.splice(i, 1);
    axios.delete(`http://localhost:3030/api/foods/${id}`)
      .then(data => {
        this.setState({
          produces: this.state.produces
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleOnClick(search){
    axios.get(`https://api.edamam.com/search?q=${search}&app_id=${config.id}&app_key=${config.key}`)
      .then(data => {
        this.setState({
          recipes: data.data.hits
        })
      })
  }

  render() {
    return (
      <div className="container">
         <div className="left"> 
            <h1 className="title">Fridge Me</h1>
            <span className="addfood">
              Food: <input className="foodinput" type="text" name="food" placeholder="Enter food item" value={this.state.food} onChange={this.handleOnChange} />
              Expiration Date: <input className="dateinput" type="text" name="date" placeholder="Enter expir. date" value={this.state.date} onChange={this.handleOnChange} />
            </span>
            <button className="addbutton" onClick={this.handleOnAdd}>Add Food</button>
            {/* <button onClick={this.handleGetAll}>Filter By Expiration Date</button> */}
            {/* <button onClick={this.handleOnBrowse}>Find in Fridge</button> */}
            {/* {this.state.browse ? <Browse /> : null} */}
            {/* {this.state.foodlist ?  <FoodList produces={this.state.produces} handleOnDelete={this.handleOnDelete}/> : null} */}
            <FoodList handleGetAll={this.handleGetAll} produces={this.state.produces} handleOnDelete={this.handleOnDelete} handleOnClick={this.handleOnClick}/>
         </div>
        <div className="right"> 
          <Recipes recipes={this.state.recipes}/>
        </div> 
      </div>
    );
  }
}

export default App;