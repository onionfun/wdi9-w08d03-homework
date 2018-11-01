import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './search/searchlist';

class Home extends Component {
  handleQueryChange(query){
    console.log(query)
  }
  render() {
    return (
      <div className="App">
        <Search onQueryChange={this.handleQueryChange}/>
      </div>
    );
  }
}

export default Home;
