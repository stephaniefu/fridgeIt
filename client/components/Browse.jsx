import React, { Component } from 'react';

class Browse extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
  }
  handleOnSearch(item){
    axios.get(`http://localhost:3030/api/foods/item/${item}`)
      .then(data => {
        this.setState({
          
        })
      })
  }


  render() {
    return (
      <div>
        <input value={this.state.search} />
        <button>Search</button>
      </div>
    );
  }
}

export default Browse;