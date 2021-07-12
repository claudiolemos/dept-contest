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
    border: solid white 0px;
    opacity: 0;
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    display: flex;
    flex-direction: row-reverse;

    @media ${breakpoints.device.desktop} {
        border: solid white 20px;
    }

    &.clicked {
        pointer-events: all;
        background-color: #0e0e0e;
        opacity: 1;
        transform: scale(1);
    }

    .nav {
        list-style: none;

        a {
            font-family: 'Teko', 'Arial', -apple-system, sans-serif;
            font-weight: 300;
            font-size: 100px;
            color: white;
            text-transform: uppercase;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        a.not-hover {
            color:rgb(255, 255, 255, 0.2);
        }

        a.hover svg {
            opacity: 1;
            transform: translateX(-20px) scale(3) rotate(-90deg);
        }

        svg {
            fill: white;
            opacity: 0;
            transform: translateX(-40px) scale(3) rotate(-90deg) ;
            transition: all 0.3s ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
        }
    }

    .nav li:not(:last-child) {
        border-bottom: 0.5px solid #a3a3a3;
    }

    .language, .social {
        list-style: none;

        svg {
            fill: white;
            opacity: 0;
            transform: translateX(-20px) rotate(-90deg);
            transition: all 0.3s ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
        }

        a:hover {
            svg {
                opacity: 1;
                transform: translateX(-10px) rotate(-90deg);
            }
        }

        a {
            text-decoration: none;
            text-transform: uppercase;
            font-family: 'Arial', -apple-system, sans-serif;
            font-weight: bold;
            font-size: 12px;
            color: white;

        }
    }
`