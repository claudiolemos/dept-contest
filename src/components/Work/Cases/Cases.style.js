import styled from 'styled-components'
import breakpoints from './../../../breakpoints.js';

export const CasesContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto 20px auto;

    @media ${breakpoints.device.phone} {
        margin: 0 20px;
    }
`

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
`

export const Message = styled.p`
    font-family: 'Arial', -apple-system, sans-serif;
    font-size: 16px;
    color: #272727;
    padding: 20px 40px;

    @media ${breakpoints.device.phone} {
        padding: 20px;
    }
`