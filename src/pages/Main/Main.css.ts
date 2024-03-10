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

export const InputContainer = styled.div`
    margin-bottom: 2rem;
    label {
        position: relative;
    }
    label p {
        color: var(--color-green);
        font-weight: bold;
        margin-bottom: .5rem;
    }
    input {
        background-color: var(--color-black);
        width: 15rem;
        padding: 1rem;
        border-radius: .5rem;
        border: none;
        color: #fff;
        letter-spacing: 3px;
        outline: none;
    }
    input:focus {
        border: 1px solid var(--color-green);
        background-color: var(--main-bg-color--secundary);
        font-weight: bold;
    }
    label span {
        position: relative;
        left: 1rem;
        bottom: 1.2rem;
    }
`
export const SelectContainer = styled.div`
    margin-bottom: 2rem;
    label {
        position: relative;
    }
    label p {
        color: var(--color-green);
        font-weight: bold;
        margin-bottom: .5rem;
    }
    select {
        background-color: var(--color-black);
        padding: 1rem;
        border-radius: .5rem;
        border: none;
        color: #fff;
        letter-spacing: 3px;
        outline: none;
        cursor: pointer;
    }
    label span {
        position: relative;
        left: 1rem;
        bottom: 1.2rem;
    }

`

export const ContainerButtons = styled.div`
    width: 90%;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    button {
        padding: .5rem;
        margin: .5rem 0;
        border: none;
        border-radius: .5rem;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        transition: all .3s ease-in;
    }
    button:hover {
        opacity: .8;
    }
    button:first-child {
        background-color: var(--color-green);
    }
    button:last-child {
        background-color: var(--color-black);
    }

`
