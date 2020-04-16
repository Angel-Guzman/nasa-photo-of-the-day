import React from 'react';
import styled from 'styled-components'
import MarsPic from '../images/marssurface.jpg'

const MarsDiv = styled.div`
    background-color: #F6F6F6;
    border-radius: 10px;
    border: 1px double #e0e0e0;
    margin: 10px;
    p {
        background-color: lightgray;
        padding: 10px;
    }
`;

const ButtonLink = styled.a`
    background-color: black;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    padding: 1.5% 2%;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color: white;
        color: black;
        letter-spacing: 2px;
        box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.1s ease 0s;
    }
`;

function Mars() {
    return (
        <MarsDiv>
            <h2>Go To Mars!</h2>
            <p>Join Mars One, and make history by being one of the first humans to settle on Mars!</p>
            <br /> <br />
            <ButtonLink href="https://www.mars-one.com/" target="_blank">Click Here To Learn More</ButtonLink>
            <br /> <br /> <br />

            <img src={MarsPic} alt="red surface of mars with a moon in the sky" height='400' width='550' />
            
        </MarsDiv>
    )
}

export default Mars;