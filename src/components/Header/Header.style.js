import styled from 'styled-components'
import breakpoints from './../../breakpoints.js';

export const HeaderComponent = styled.header`
    padding: 15px;

    .dept {
        svg {
            width: 85px;
            fill: #272727;
        }
    }

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
            border:none;
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
`

export const Divider = styled.hr`
    border: 0.5px solid;
    border-color: #272727;
`