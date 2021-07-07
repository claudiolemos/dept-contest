import styled from 'styled-components'
import breakpoints from './../../breakpoints.js';

export const FooterComponent = styled.footer`
    background-color: black;
    color: white;
    padding: 90px 0;

    ul {
        list-style-type: none;
    }

    svg {
        fill: white;
    }

    .footer-container {
        margin: 0 auto;
        max-width: 1240px;
        padding: 0 20px;
    }

    .footer-top, .footer-bottom {
        display: flex;
        flex-wrap: wrap;
    }

    .footer-bottom {
        @media ${breakpoints.device.phone}{
            flex-direction: column;
        }
    }

    .dept {
        svg {
            width: 125px;
        }


        @media ${breakpoints.device.phone}{
            display: none;
        }
    }

    .nav {
        display: flex;
        flex-wrap: wrap;

        li {
            margin-left: 30px;
        }

        li a {
            color: white;
            text-decoration: none;
            font-family: 'Teko', 'Arial', -apple-system, sans-serif;
            font-weight: 200;
            font-size: 20px;
            text-transform: uppercase;
            transition: color 0.2s ease-in;
        }

        li a:hover {
            color: #141fd3;
        }

        @media ${breakpoints.device.phone}{
            flex-direction: column;

            li {
                display: block;
                margin-left: 0;
                margin-bottom: 5px;
            }

            li a {
                font-size: 40px;
            }
        }
    }

    .social {
        display: flex;
        flex-wrap: wrap;
        margin-left: auto;

        li {
            margin-left: 30px;
        }
        
        svg {
            width: 15px;
            height: 15px;
        }

        @media ${breakpoints.device.phone}{
            flex-direction: column;

            li {
                margin-bottom: 30px;
            }

            svg {
                width: 30px;
                height: 30px;
            }
        }

    }

    .info {
        display: flex;
        flex-wrap: wrap;
        margin-left: 12.5%;

        li {
            margin-right: 30px;
        }
        
        li p, li a {
            font-family: 'Arial', -apple-system, sans-serif;
            font-size: 12px;
            color: #808080;
        }

        li a {
            transition: color 0.2s ease-in;
            align-items: center;
        }

        li a:hover {
            color: #f2f2f2;
        }

        @media ${breakpoints.device.phone}{
            flex-direction: column;
            margin-left: 0;
            margin-bottom: 0;
        }

    }

    .copyright {
        display: flex;
        flex-wrap: wrap;
        margin-left: auto;
        
        li p {
            font-family: 'Arial', -apple-system, sans-serif;
            font-size: 13px;
            color: #808080;
        }

        @media ${breakpoints.device.phone}{
            margin-left: 0;
            margin-top: 0;
        }

    }

    .top {
        display: inline-block;
        border: none;
        background-color: transparent;
        cursor: pointer;

        svg {
            fill: #141fd3;
            transition: all 0.2s ease-in;
        }

        &:hover svg {
            transform: translateY(-10px);
        }

        p {
            color: #141fd3;
            font-family: 'Teko', 'Arial', -apple-system, sans-serif;
            font-weight: 200;
            font-size: 20px;
            text-transform: uppercase;
            transition: all 0.2s ease-in;
        }

        @media ${breakpoints.device.phone}{
            svg {
                fill: white;
            }

            p {
                color: white;
            }

            &:hover svg {
                fill: #141fd3;
            }

            &:hover p {
                color: #141fd3;
            }
        }

    }
`

export const Divider = styled.hr`
    border: 0.5px solid;
    border-color: #272727;
`