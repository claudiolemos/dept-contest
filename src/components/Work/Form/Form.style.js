import styled from 'styled-components'
import breakpoints from './../../../breakpoints.js';

export const FormContainer = styled.div`
`

export const Title = styled.h2`
    font-family: 'Teko', 'Arial', -apple-system, sans-serif;
    font-weight: 200;
    font-size: 60px;
    text-transform: uppercase;
    color: #272727;
`

export const StyledForm = styled.form`
`

export const FormRow = styled.div`
    display: flex;
    flex-direction: row;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    font-family: 'Arial', -apple-system, sans-serif;
    font-weight: bold;
    font-size: 14px;
    color: #272727;
    text-transform: uppercase;
`

export const RequiredLabel = styled.label`
    font-family: 'Arial', -apple-system, sans-serif;
    font-size: 12px;
    color: #ff2929;
`

export const Input = styled.input`
    border: none;
    width: 300px;
    box-shadow: 0 1px 0 0 #dddddd;
    transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;

    &:focus {
        outline: none;
        box-shadow: 0 1px 0 0 #1a18f7;
    }
`

export const MessageInput = styled.textarea`
    border: none;
    resize: none;
    width: 300px;
    height: 100px;
    box-shadow: 0 1px 0 0 #dddddd;
    transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;

    &:focus {
        outline: none;
        box-shadow: 0 1px 0 0 #1a18f7;
    }
`

export const Submit = styled.input`
    border: none;
    width: 140px;
    height: 50px;
    background-color: #1a18f7;
    font-family: 'Arial', -apple-system, sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;

    &:hover {
        cursor: pointer;
        background-color: #0e0e0e;
    }
`