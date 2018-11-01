//renders the gifs
import React, { Component } from 'react';

const GifItem =(image)=>{

        return(
            <li>
                <img src={image.gifs.url} />
            </li>
        )
    }

    export default GifItem;