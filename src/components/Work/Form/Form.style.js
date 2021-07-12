import styled from 'styled-components'
import breakpoints from './../../../breakpoints.js';

export const FormContainer = styled.div`
    max-width: 1200px;
    margin: 40px auto;
    display: flex;
    flex-direction: row;

    @media ${breakpoints.device.phone} {
        flex-direction: column;
    }
`

export const Title = styled.h2`
    font-family: 'Teko', 'Arial', -apple-system, sans-serif;
    font-weight: 200;
    font-size: 60px;
    text-transform: uppercase;
    color: #272727;
    width: 20%;
    line-height: 1;

    @media ${breakpoints.device.phone} {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        font-size: 40px;
    }
`

export const StyledForm = styled.form`
    margin-left: 10%;
`

export const FormRow = styled.div`
    display: flex;
    flex-direction: row;

    @media ${breakpoints.device.phone} {
        flex-direction: column;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    &:first-child {
        margin-right: 40px;
        margin-bottom: 80px;
    }
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
    margin-top: 10px;
`

export const Input = styled.input`
    border: none;
    width: 300px;
    margin-top: 20px;
    font-family: 'Arial', -apple-system, sans-serif;
    font-size: 16px;
    color: #272727;
    box-shadow: 0 1px 0 0 #dddddd;
    transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;

    &:focus {
        outline: none;
        box-shadow: 0 1px 0 0 #1a18f7;
    }

    @media ${breakpoints.device.phone} {
        width: 100%;
    }
`

export const MessageInput = styled.textarea`
    border: none;
    resize: none;
    width: 300px;
    height: 100px;
    margin-top: 20px;
    font-family: 'Arial', -apple-system, sans-serif;
    font-size: 16px;
    color: #272727;
    box-shadow: 0 1px 0 0 #dddddd;
    transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;

    &:focus {
        outline: none;
        box-shadow: 0 1px 0 0 #1a18f7;
    }

    @media ${breakpoints.device.phone} {
        width: 100%;
    }
`

export const Submit = styled.input`
    border: none;
    width: 140px;
    height: 50px;
    margin-top: 20px;
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