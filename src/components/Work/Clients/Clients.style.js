import styled from 'styled-components'
import breakpoints from './../../../breakpoints.js';

export const Section = styled.section`
    background-color: #f3f6f6;
    display: flex;
    flex-direction: column;
    padding: 90px;

    @media ${breakpoints.device.phone}{
        padding: 30px 15px;
    }
`

export const Title = styled.h2`
    font-family: 'Teko', 'Arial', -apple-system, sans-serif;
    font-weight: 200;
    font-size:  60px;
    text-transform: uppercase;
    color: #0e0e0e;
    margin: 0 auto;
`

export const Text = styled.p`
    font-family: 'Arial', -apple-system, sans-serif;
    font-weight: lighter;
    font-size:  17px;
    color: #272727;
    margin: 0 auto;
    text-align: center;
    line-height: 1.5;
    max-width: 565px;
`

export const Grid = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
`

export const GridElement = styled.li`
    position: relative;
    width: 250px;
    height: 125px;

    @media ${breakpoints.device.phone}{
        width: 180px;
        height: 90px;
    }

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
