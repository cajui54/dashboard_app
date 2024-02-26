import styled from "styled-components";

export const MainScreen = styled.div` 
    min-width: 20rem;
    min-height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const InfoContainer = styled.div`
    width: 80%;
`
export const ScreenInfo = styled.div`
    position: relative;
    label {
        font-weight: bold;
        letter-spacing: .2rem;
        color: #14b8a6;
        position: absolute;
        top: -.5rem;
        left: 1rem;
    }
    div {
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #020617;
        padding: 1rem;
        border-radius: 1rem;
    }
    div p {
        font-size: 2rem;
    }
    div span {
        margin-left: .5rem;
    }
    div svg {
        color: #14b8a6;
        font-size: 2rem;
    }   
`