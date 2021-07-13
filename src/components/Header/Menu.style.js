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

    & > div {
        display: flex;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        height: 100%;
        transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;

        @media ${breakpoints.device.phone} {
            flex-direction: column;
        }

        @media ${breakpoints.device.phone} {
            padding: 20px;
        }

        @media ${breakpoints.device.tablet} {
            padding: 40px;
        }

        @media ${breakpoints.device.phone} {
            margin-top: 40px;
        }

        div {
            display: flex;
            flex-direction: column;

            .social {
                @media ${breakpoints.device.phone} {
                    margin-left: auto;
                }
            }

            @media ${breakpoints.device.tablet} {
                margin-right: 40px;
            }

            @media ${breakpoints.device.desktop} {
                margin-right: 40px;
            }

            @media ${breakpoints.device.phone} {
                flex-direction: row;
                width: 100%;
            }
        }
    }

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
        width: 100%;
        padding: 0;

        a {
            font-family: 'Teko', 'Arial', -apple-system, sans-serif;
            font-weight: 200;
            font-size: 50px;
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
            justify-content: flex-end;

            @media ${breakpoints.device.desktop} {
                font-size: 70px;
            }

            @media ${breakpoints.device.phone} {
                font-size: 30px;
            }
        }

        a p {
            margin: 0;
        }

        a.not-hover {
            color:rgb(255, 255, 255, 0.2);
        }

        a.hover svg {
            opacity: 1;
            transform: translate(-20px, -3px) scale(3) rotate(-90deg);

            @media ${breakpoints.device.phone} {
                transform: translate(-10px, -2px) scale(1.3) rotate(-90deg);
            }
        }

        svg {
            fill: white;
            opacity: 0;
            transform: translate(-40px, -3px) scale(3) rotate(-90deg);
            transition: all 0.3s ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;

            @media ${breakpoints.device.phone} {
                transform: translate(-20px, -2px) scale(1.3) rotate(-90deg);
            }
        }
    }

    .nav li:not(:last-child) {
        border-bottom: 0.5px solid #a3a3a3;
    }

    .language, .social {
        list-style: none;
        padding: 0;

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
            white-space: nowrap;
        }
    }
`