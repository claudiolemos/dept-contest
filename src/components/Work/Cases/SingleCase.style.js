import styled from 'styled-components'
import breakpoints from './../../../breakpoints.js';

export const Article = styled.article`
    width: 50%;

    &.list {
        width: 50%;

        @media ${breakpoints.device.phone} {
            width: 100%;
            margin-bottom: 10px;
        }

        & > div {
            display: flex;
            flex-direction: row;
        }

        & > div > div {
            margin-left: 10px;


            @media ${breakpoints.device.phone} {
                > p {
                    margin: 0;
                    font-size: 12px;
                }

                h2 {
                    font-size: 20px;
                }

                button > p {
                    font-size: 10px;
                }
            }
        }

        img {
            width: 150px;
            height: 150px;

            @media ${breakpoints.device.phone} {
                width: 100px;
                height: 100px;
            }
        }
    }

    &:nth-child(odd) {
        & > div {
            margin: 10px 10px 10px 20px;
        }

        @media ${breakpoints.device.phone} {
            & > div {
                margin: 0px;
            }
        }
    }

    &:nth-child(even) {
        & > div {
            margin: 10px 20px 10px 10px;
        }

        @media ${breakpoints.device.phone} {
            & > div {
                margin: 0px;
            }
        }
    }

    @media ${breakpoints.device.phone} {
        width: 100%;
    }

    &:hover img{
        clip-path: inset(5px);
    }

    &:hover button p{
        transform: translateX(20px);
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Image = styled.img`
    clip-path: inset(0px);
    width: 100%;
    object-fit: cover;
    transition: all 0.2 ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
`

export const Label = styled.p`
    font-family: 'Arial', -apple-system, sans-serif;
    font-weight: 400;
    font-size: 14px;
    font-weight: bold;
    color: #939393;
    text-transform: uppercase;
`

export const Title = styled.h2`
    font-family: 'Teko', 'Arial', -apple-system, sans-serif;
    font-weight: 200;
    font-size: 30px;
    color: #272727;
    line-height: 1;
    margin: 0;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    margin: 0;
    padding: 0;

    p {
        font-family: 'Arial', -apple-system, sans-serif;
        font-weight: bold;
        font-size: 14px;
        color: #1a18f7;
        text-transform: uppercase;
        transition: all 0.2 ease-in;
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;        
        transform: translateX(10px);
    }

    svg {
        fill: #1a18f7;
        transform: rotate(-90deg);
    }
`