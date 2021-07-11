import styled from 'styled-components'
import breakpoints from './../../breakpoints.js';

export const Section = styled.section`
`

export const VideoContainer = styled.div`
    position: relative;
`

export const Video = styled.video`
    width: 100%;
`

export const Source = styled.source`
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 225px;
    background-color: #0e0e0e;
    border: none;
    font-family: 'Arial', -apple-system, sans-serif;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    transition: transform 0.2s ease-in;
    -webkit-transition: transform 0.2s ease-in;
    -moz-transition: transform 0.2s ease-in;
    -o-transition: transform 0.2s ease-in;

    @media ${breakpoints.device.phone}{
        width: 100%;
        margin: 20px;
    }

    p {
        transform: translateX(-10px);
        transition: transform 0.3s ease-in-out;
        -webkit-transition: transform 0.3s ease-in-out;
        -moz-transition: transform 0.3s ease-in-out;
        -o-transition: transform 0.3s ease-in-out;
    }

    svg {
        fill: white;
        transform: translateX(-20px) rotate(-90deg);
        opacity: 0;
        transition: all 0.3s ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
    }

    &:hover{
        cursor: pointer;

        p {
            transform: translateX(15px);
        }

        svg {
            transform: translateX(-5px) rotate(-90deg);
            opacity: 1
        }
    }
`

export const TitleText = styled.h1`
    font-family: 'Teko', 'Arial', -apple-system, sans-serif;
    font-weight: 400;
    font-size:  200px;
    color: white;
    padding: 0;
    margin: 0;
    line-height: 1;
    position: absolute;
    bottom: 0;
    transform: translateY(55px);
`