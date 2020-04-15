import React, { useEffect, useState } from "react";
import './APOD.css'
import axios from 'axios';

const api_key = 'eWgjUjAhcF03aN85v60ftt7pyn1cnxOxTwn7GhuU'

function APODimage ( {picture, setPicture, pictureTitle, setPictureTitle, pictureCopyright, setPictureCopyright, pictureDate, setPictureDate, pictureExplanation, setPictureExplanation } ) {

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
        .then(res => {
          setPicture(res.data.url)
          setPictureTitle(res.data.title)
          setPictureCopyright(res.data.copyright)
          setPictureDate(res.data.date)
          setPictureExplanation(res.data.explanation)
        //   debugger
        })
        .catch(err => {
        debugger
        })
    }, [picture, pictureTitle, pictureCopyright, pictureDate, pictureExplanation])

    if (!APODimage) {
        return null
    }

    return ( 
        <div className="APOD-wrapper">
            <img src={picture} width='500' height='350' />
            <p> {pictureTitle} </p>
            <p> {pictureCopyright} </p>
            <p> {pictureDate} </p>
            <p> {pictureExplanation} </p>
        </div>
    )

}

export default APODimage;