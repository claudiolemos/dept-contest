import styled from 'styled-components'
import breakpoints from './../../../breakpoints.js';

export const Divider = styled.hr`
    border: 0.5px solid;
    border-color: #dddddd;

    @media ${breakpoints.device.tablet} {
        margin: 0 20px
    }

    @media ${breakpoints.device.desktop} {
        /* margin: 0 40px */
    }
`

export const PaginateContainer = styled.div`
    .paginate-container{
        display: flex;
        justify-content: center;
    }

    .page, .ellipsis, .next, .previous {
        width: 44px;
        height: 44px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .page a, .ellipsis a, .next a, .previous a {
        padding: 13px;
        outline: none;
        user-select: none;
    }

    .ellipsis, .active {
        cursor: default;
    }

    .page, .ellipsis {
        font-family: 'Arial', -apple-system, sans-serif;
        font-size: 14px;
        font-weight: bold;
        margin: 0 1px;
    }

    .page {
        background-color: #f4f6f6;
    }

    .active {
        background-color: transparent;
        color: #1723ed;
    }

    .next, .previous {
        overflow: hidden;
        background-image: url('./icons/icon-dropdown.svg');
        filter: invert(22%) sepia(96%) saturate(7462%) hue-rotate(242deg) brightness(89%) contrast(110%);
        background-repeat: no-repeat;
        background-position: center;
    }

    .previous {
        transform: rotate(90deg);
    }

    .next {
        transform: rotate(-90deg);
    }

    .disabled {
        display: none;
    }
`