import styled from 'styled-components'
import breakpoints from './../../../breakpoints.js';

export const Section = styled.section`
    background-color: #f3f6f6;
`

export const Title = styled.h2`
    font-family: 'Teko', 'Arial', -apple-system, sans-serif;
    font-weight: 200;
    font-size:  60px;
    text-transform: uppercase;
    color: #0e0e0e;
`

export const Text = styled.p`
    font-family: 'Arial', -apple-system, sans-serif;
    font-weight: lighter;
    font-size:  16px;
    color: #0e0e0e;
`

export const Grid = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

export const GridElement = styled.li`
    position: relative;
    width: 250px;
    height: 125px;

    .first-image {
        position: absolute;
        left: 0;
        opacity: 1;
    }

    .second-image {
        position: absolute;
        left: 0;
        opacity: 0;
    }
`

export const Image = styled.img`
    width: 100%;
`
