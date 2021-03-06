import styled from 'styled-components'
import breakpoints from './../../breakpoints.js';

export const HeaderComponent = styled.header`
    padding: 40px 40px 0px 40px;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    transition: all 0.3 ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    pointer-events: none;

    @media ${breakpoints.device.phone} {
        padding: 0px 20px;
    }

    ul {
        list-style-type: none;
    }

    .header-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        transition: all 0.3 ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
    }

    .menu {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        padding-left: 0;
        pointer-events: all;

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
            transition: all 0.3 ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
        }

        li {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        button {
            border: none;
            background-color: transparent;
            padding-right: 0px;

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
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
        }
    }

    .title {
        opacity: 0;
        display: flex;
        visibility: hidden;
        flex-direction: row;
        margin: 0 auto;
        transform: translateX(15px);
        transition: all 0.3 ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        pointer-events: all;

        @media ${breakpoints.device.phone} {
            display: none;
        }

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
            -moz-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
        }

        li a:hover {
            color: #141fd3;
        }

        li:nth-of-type(1) {
            font-weight: bold;
        }
    }

    &.scroll {
        background-color: rgba(255, 255, 255, 0.97);
        padding-top: 0px;

        .dept svg {
            width: 60px;
        }

        hr??{
            opacity: 0;
            visibility: hidden;
        }

        .title {
            visibility: visible;
            opacity: 1;
            transform: translateX(30px);
        }
    }

    &.scroll.clicked {
        background-color: rgba(255, 255, 255, 0);
        padding: 40px 40px 0px 40px;

        .dept svg {
            width: 85px;
        }

        .title {
            pointer-events: none;
        }

        @media ${breakpoints.device.phone} {
            padding: 20px 20px 0px 20px;
        }

        .title {
            opacity: 0;
        }
    }

    &.clicked {
        .dept svg {
            fill: white;
        }

        p??{
            opacity: 0;
        }

        .menu-bar-1 {
            transform: rotate(-45deg) translate(-2px, 2px);
            -webkit-transform: rotate(-45deg) translate(-2px, 2px);
            -moz-transform: rotate(-45deg) translate(-2px, 2px);
            -o-transform: rotate(-45deg) translate(-2px, 2px);
            background-color: white;
        }

        .menu-bar-2 {
            transform: rotate(45deg) translate(-2px, -2px);
            -webkit-transform: rotate(45deg) translate(-2px, -2px);
            -moz-transform: rotate(45deg) translate(-2px, -2px);
            -o-transform: rotate(45deg) translate(-2px, -2px);
            background-color: white;
        }
    }

    .dept {
        svg {
            width: 85px;
            fill: #272727;
            transition: all 0.3s ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;

            @media ${breakpoints.device.phone} {
                width: 60px;
            }
        }
    }
`

export const Divider = styled.hr`
    border: 0.5px solid;
    border-color: #272727;
    margin: 0;
    padding: 0;
    bottom: 0;
    max-width: 1200px;
    margin: 0 auto;
    transition: all 0.3 ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;

    &.clicked {
        opacity: 0;
    }
`