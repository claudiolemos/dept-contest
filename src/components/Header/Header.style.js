import styled from 'styled-components'
import breakpoints from './../../breakpoints.js';

export const HeaderComponent = styled.header`
    padding: 15px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    transition: all 0.3 ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;

    ul {
        list-style-type: none;
    }

    .header-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .menu {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        padding-left: 0;

        &:hover {
            cursor: pointer;
        }

        p {
            display: inline;
            color: #272727;
            font-family: 'Teko', 'Arial', -apple-system, sans-serif;
            font-weight: 200;
            font-size: 22px;
            text-transform: uppercase;
        }

        li {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        button {
            border: none;
            background-color: transparent;

            &:hover {
                cursor: pointer;
            }
        }

        .menu-bar-1, .menu-bar-2 {
            width: 20px;
            height: 2px;
            background-color: #272727;
            margin: 4px 0;
            transition: all 0.3s ease-in-out;
        }
    }

    .title {
        opacity: 0;
        display: flex;
        visibility: hidden;
        flex-direction: row;
        margin: 0 auto;
        transition: all 0.3 ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;

        li {
            font-family: 'Arial', -apple-system, sans-serif;
            font-weight: 100;
            font-size: 13px;
            color: #272727;
        }

        li a {
            text-decoration: none;
            color: #272727;
            transition: all 0.3 ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
        }

        li a:hover {
            color: #141fd3;
        }

        li:nth-of-type(1) {
            font-weight: bold;
        }
    }

    .clicked .menu-bar-1 {
        -webkit-transform: rotate(-45deg) translate(-2px, 2px);
        transform: rotate(-45deg) translate(-2px, 2px);
        background-color: white;
    }

    .clicked .menu-bar-2 {
        -webkit-transform: rotate(45deg) translate(-2px, -2px);
        transform: rotate(45deg) translate(-2px, -2px);
        background-color: white;
    }

    &.scroll {
        background-color: rgba(255, 255, 255, 0.97);

        .dept svg {
            width: 60px;
        }

        hr {
            opacity: 0;
            visibility: hidden;
        }

        .title {
            visibility: visible;
            opacity: 1;
        }
    }

    .dept {
        svg {
            width: 85px;
            fill: #272727;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }
    }

    .clicked svg {
        fill: white;
    }
`

export const Divider = styled.hr`
    border: 0.5px solid;
    border-color: #272727;
    margin: 0;
    padding: 0;
    bottom: 0;
    transition: all 0.3 ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
`