import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './search/searchlist';
import GifList from './search/giflist';
import request from 'superagent'

class Home extends Component {
  constructor(){
    super();
    this.state={
      gifs: []
    }
  }

  getGifs = async () =>{

      const gifs = await fetch('http://api.giphy.com/v1/gifs/search?q=&api_key=xoQrr8xsLKJfqVfkjHfa1NuK5ZyiCXtf&limiti=5')
      const gifsJson = await gifs.json();
      console.log(gifsJson, "JAASSSOOOONNNNNNNNNN")
        return gifsJson;   
}

inputHandler = (e) => {
  this.setState({
    query: e.currentTarget.value
  })
}

  handleQueryChange = async (query)=>{
    // e.preventDefault();
    try{
    const gifs = await fetch(`http://api.giphy.com/v1/gifs/search?q=${query.replace(/\s/g, '+')}&api_key=xoQrr8xsLKJfqVfkjHfa1NuK5ZyiCXtf&limit=5`)
    this.getGifs().then((gifs) => {
      this.setState({gifs: gifs.data})})
      console.log(gifs, " HEHRHERE")
    } catch(err){
      return(err)
    }
  }

  componentDidMount(){

  }
  render() {
    return (
      <div className="App">
        <Search onQueryChange={this.state.handleQueryChange}/>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default Home;