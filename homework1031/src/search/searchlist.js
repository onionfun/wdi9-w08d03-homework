import React, { Component } from 'react';

class Search extends Component{
    constructor(){
        super();
        this.state= {
            query: ''
        }
    }
    onInputChange(query){
        this.setState({query});
        this.props.onQueryChange(query);
    }
    render(){
        return(
            <div className="search">
                <input onChange={event => this.onInputChange(event.target.value)}/>
                <button>Submit</button>

            </div>
        )
    }
}

export default Search;