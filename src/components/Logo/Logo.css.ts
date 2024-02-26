import styled from "styled-components";

export const LogoMain = styled.div<{widthprop: number}>`
    width: ${(props) => props.widthprop}%;
   // margin: 2rem auto;
    text-align: center;
    h1 {
        font-size: 3.5rem;
    }
    h3 {
        color: #fde047;
        margin-top: -.9rem;
    }
`
export const SVGContainer = styled.div`
    width: 70%;
    margin: .5rem auto;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    svg:nth-child(1), svg:nth-child(2), svg:nth-child(3){
        color: #fde047;
    }
`