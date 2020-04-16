import React from 'react';
import styled from 'styled-components'


const SignUpDiv = styled.div`
    border: 1px double #e0e0e0;
    background-color: #F6F6F6;
    margin: 10px;
    p {
        background-color: lightgray;
        padding: 10px;
    }
`;

const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    padding: 1.5% 4%;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
        letter-spacing: 2px;
        box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.1s ease 0s;
    }
`;

function Signup() {
    return (
        <SignUpDiv>
            <h2>Let's Go For A Walk</h2>

                <p>The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic.
                The Earth was absolutely round.</p>

                <p>Suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye,
                and my thumb blotted out the planet Earth.</p>

                <Button>
                Sign Up
                </Button>
        </SignUpDiv>
    )
}

export default Signup;