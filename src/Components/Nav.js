import React from "react";
import styled from 'styled-components'

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1%;
    margin: 0 -7.5%;
    border-radius: 10px;
    border: 1px double #e0e0e0;
    background-color: #F6F6F6;
    margin: 1% 0 0 0;

    a {
        padding: 1% 1% 0 1%;
        text-decoration: none;
        color: ebony-clay;
        font-size: 15px;
    }
`;

const LinksContainer = styled.div`
    width: 60%;
    padding: 1%;
    display: flex;
    justify-content: space-evenly;
`;

function Nav () {
    return (
        <Navigation>
            <h1>SpaceFans</h1>
                <LinksContainer>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Mars</a>
                    <a href="#">Contact</a>
                    <a href="#">Sign In</a>
                </LinksContainer> 
        </Navigation>
    )
}

export default Nav;