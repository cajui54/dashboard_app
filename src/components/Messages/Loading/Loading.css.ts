import styled from "styled-components";

export const LoadingMain = styled.div`
    background-color: #fed7aa;
    color: #fb923c;
    text-align: center;
    font-weight: bold;
    letter-spacing: .2rem;
    padding: .5rem 0;
    border: 1px solid #fb923c;
    border-radius: .5rem;
    width: 70%;
    margin: 1rem auto;
    
    svg {
        margin-right: 1rem;
        animation: rotate 3s ease-in-out infinite;
    }
    @keyframes rotate {
        0% {
            transform: rotate(1deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`