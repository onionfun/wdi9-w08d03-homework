//maps the array of gifs - job is to accept a list of gifs from the app loop thru and render an individual gifitem, GifList is a 
//stateless functional component. we can use these when our component doesn't need to be actively tracked or modify our applications
//state. Our parent component, App, passes in all the data our giflist needs via its props, giflist only needs to worry how to display the data

import React, { Component } from 'react';
import GifItem from './gifitem'

const GifList =(props)=>{
    const gifItems = props.gifs.map((image)=>{
        return <GifItem key={image.id} gifs={image} />
    });
    return(
        <ul>{gifItems}</ul>
    )

    }


export default GifList;