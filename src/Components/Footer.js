import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.footer`
    color: #22283B;
    background: #f4f4f4;
    padding: 20px 0;
    border: 1px double #e0e0e0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    p {
        background-color: lightgray;
        padding: 10px;
    }
`;

function Footer() {
    return (
        <StyledFooter>
            <p>Copyright © SpaceFans 2020</p>
        </StyledFooter>
    )
}

export default Footer;