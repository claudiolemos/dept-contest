import styled from 'styled-components'
import breakpoints from './../../../breakpoints.js';

export const Section = styled.section`
    background: url('./images/cases/Header.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 20px;
    height: 700px;
    display: flex;
    flex-direction: row;
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;

    @media ${breakpoints.device.portrait}{
        flex-direction: column;
        justify-content: center;
    }

    @media ${breakpoints.device.phone} {
        margin: 0px;
        height: 350px;
    }

    @media ${breakpoints.device.tablet} {
        margin: 0px;
        height: 500px;
    }
`

export const TitleText = styled.h1`
    font-family: 'Teko', 'Arial', -apple-system, sans-serif;
    font-weight: 200;
    font-size:  200px;
    line-height: 1;
    text-transform: uppercase;
    color: #0e0e0e;
    margin: 0 20px;
    align-self: center;

    @media ${breakpoints.device.desktop}{
        font-size: 400px;
    }

    @media ${breakpoints.device.phone}{
        font-size: 150px;
    }
`

export const Button = styled.button`
    width: 170px;
    height: 50px;
    background-color: #0e0e0e;
    border: none;
    padding: 0;
    align-self: flex-end;
    margin-left: auto;
    margin-right: 20px;
    margin-bottom: 20px;
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

    @media ${breakpoints.device.portrait}{
        margin-bottom: 0px;
    }

`