import styled from 'styled-components'
import breakpoints from './../../../breakpoints.js';

export const Article = styled.article`
    /* flex: 50%; */

    &:hover img{
        clip-path: inset(5px);
    }

    &:hover button p{
        transform: translateX(10px);
    }
`

export const Image = styled.img`
clip-path: inset(0px);
    width: 500px;
    height: 500px;
    object-fit: cover;
    transition: all 0.2 ease-in;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
`

export const Label = styled.p`
    font-family: 'Arial', -apple-system, sans-serif;
    font-weight: 400;
    font-size: 14px;
    font-weight: bold;
    color: #939393;
    text-transform: uppercase;
`

export const Title = styled.h3`
    font-family: 'Teko', 'Arial', -apple-system, sans-serif;
    font-weight: 200;
    font-size: 30px;
    color: #272727;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;

    p {
        font-family: 'Arial', -apple-system, sans-serif;
        font-weight: bold;
        font-size: 14px;
        color: #1a18f7;
        text-transform: uppercase;
        transition: all 0.2 ease-in;
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;

    }

    svg {
        fill: #1a18f7;
        transform: rotate(-90deg);
    }
`