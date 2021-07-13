import styled from 'styled-components'
import breakpoints from './../../../breakpoints.js';

export const FilterContainer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin: 20px;

    @media ${breakpoints.device.phone}{
        justify-content: flex-start;
        margin: 20px 0;
    }
`

export const Label = styled.label`
    font-family: 'Teko', 'Arial', -apple-system, sans-serif;
    font-weight: 200;
    color: #939393;
    font-size: 32px;
    margin-right: 10px;
`

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-flex;
    margin-right: 10px;
    cursor: pointer;
    align-items: center;

    &:last-child {
        margin-right: 0px;
    }

    svg {
        margin-left: 5px;
    }
`

export const Placeholder = styled.span`
    cursor: pointer;
    font-family: 'Teko', 'Arial', -apple-system, sans-serif;
    font-weight: 300;
    color: #272727;
    font-size: 32px;
    box-shadow: 0 1px 0 0 black;
`

export const Select = styled.select`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    appearance: menulist-button;
    font-size: 18px;
`

export const Option = styled.option`
`