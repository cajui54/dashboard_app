import styled from "styled-components";

export const MainScreenInfo = styled.div`
    min-height: 2rem;
    width: 70%;
    margin: 3rem 2rem;
    background-color: var(--main-bg-color--secundary);
    border-radius: 1rem;
    padding-bottom: 1rem;
    
    h2 {
        color: #14b8a6;
        font-size: 3rem;
        width: 80%;
        margin: .5rem 3rem;
    }
    .errorMessage {
        width: 60%;
        margin: 1rem auto;
    }
    .errorMessage h2 {
        font-size: 1rem;
        color: red;
    }
`
export const ContainerInfo = styled.div`
    min-width: 90%;
    margin: 2rem auto;
    padding: 1rem;
    display: flex;
`
export const InfoItem = styled.div`
    flex-grow: 1;
    margin-left: 1.5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    svg {
        font-size: 5rem;
        color: #14b8a6;
    }
    div {
        margin-left: 1rem;
    }
    div h3 {
        margin-bottom: .5rem;
    }
    div p {
        font-size: 3.5rem;
        width: 80%;
        margin: 0 auto;
        color: #d1d5db;
        font-weight: bold;
    }
`
