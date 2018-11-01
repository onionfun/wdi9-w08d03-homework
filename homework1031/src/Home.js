import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './search/searchlist';
import GifList from './search/giflist'

class Home extends Component {
  constructor(){
    super();
    this.state={
      gifs: [  {
        id: 1,
        url: 'http://fakeimg.pl/300/'
    },
    {
      id: 2,
      url: 'http://fakeimg.pl/300/'
  },]
    }
  }
  handleQueryChange(query){
    console.log(query)
  }
  render() {
    return (
      <div className="App">
        <Search onQueryChange={this.handleQueryChange}/>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default Home;