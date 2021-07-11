import styled from 'styled-components'
import breakpoints from './../../breakpoints.js';

export const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    pointer-events: none;
    border: solid white 20px;
    opacity: 0;
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;

    &.clicked {
        pointer-events: all;
        background-color: #0e0e0e;
        opacity: 1;
        transform: scale(1);
    }
`