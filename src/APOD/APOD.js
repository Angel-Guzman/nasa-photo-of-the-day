import React, { useEffect, useState } from "react";
import './APOD.css'
import axios from 'axios';

const api_key = 'eWgjUjAhcF03aN85v60ftt7pyn1cnxOxTwn7GhuU'

function APODimage ( {picture, setPicture} ) {

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
        .then(res => {
          setPicture(res.data.url)
        })
        .catch(err => {
        debugger
        })
    }, [picture])

    if (!APODimage) {
        return null
    }

    return ( 
        <div className="APOD-wrapper">
            <img src={picture} width='500' height='350' />
        </div>
    )

}

export default APODimage;