import styled from "styled-components";

export const Main = styled.main`
    min-height: 100vh;

`
export const LabelInput = styled.label`
    position: relative;
    span {
        position: absolute;
        color: var(--color-green);
        font-weight: bold;
        font-size: 1rem;
        top: 1.3rem;
        left: 3rem;
    }
    input {
        font-family: "Protest Strike", sans-serif;
        letter-spacing: .4rem;
        padding: 1.6rem 0;
        padding-left: 3rem;
        font-size: 1.5rem;
        background-color: #030712;
        border-radius: .5rem;
        color: #fff;
        font-weight: bold;
        border: none;
        outline: none;
    }
    p {
        margin-left: 3rem;
        font-weight: bold;
        color: #ef4444;
    }
`