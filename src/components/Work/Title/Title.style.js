import styled from 'styled-components'
import breakpoints from './../../../breakpoints.js';

export const Section = styled.section`
    background: url('./images/cases/Header.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 20px;
    height: 940px;
`

export const TitleText = styled.h1`
    font-family: 'Teko', 'Arial', -apple-system, sans-serif;
    font-weight: 200;
    font-size:  200px;
    text-transform: uppercase;
    color: #0e0e0e;
    padding: 0;
    margin: 0;

    @media ${breakpoints.device.desktop}{
    font-size: 400px;
    }
`

export const Button = styled.button`
    width: 170px;
    height: 50px;
    float: right;
    background-color: #0e0e0e;
    border: none;
    font-family: 'Arial', -apple-system, sans-serif;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;

    &:hover{
        background-color: #141fd3;
        cursor: pointer;
    }
`