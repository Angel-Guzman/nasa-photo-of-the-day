import React, { useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components'

const api_key = 'eWgjUjAhcF03aN85v60ftt7pyn1cnxOxTwn7GhuU'

const APODWrapper = styled.div`
    background-color: #F6F6F6;
    border-radius: 10px;
    border: 1px double #e0e0e0;
    margin: 10px;
    p, img {
        background-color: lightgray;
        padding: 10px;
    }
`;

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
        <APODWrapper>
            <img src={picture} width='500' height='350' />
            <p> {pictureTitle} </p>
            <p> {pictureCopyright} </p>
            <p> {pictureDate} </p>
            <p> {pictureExplanation} </p>
        </APODWrapper>
    )

}

export default APODimage;