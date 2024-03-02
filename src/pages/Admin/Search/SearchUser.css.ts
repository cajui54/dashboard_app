import styled from "styled-components";

export const SearchMain = styled.div`
    background-color: #0f172a;
    min-height: 10rem;
    width: 70rem;
    padding: 1rem;
    border-radius: 1rem;
    h2 {
        font-size: 3rem;
        margin-bottom: 2rem;
    }
    form {
        width: 90%;
        display: flex;
        align-items: center;
        min-height: 10rem;
    }
    form label svg {
        position: absolute;
        color: var(--color-green);
        top: 2.6rem;
        left: 3rem;
        font-size: 2rem;
    }
    form input {
        width: 30rem;
        margin: 1rem 2rem;
        padding-left: 4.5rem;
    }
    .errorMessage {
        width: 60%;
        padding: .5rem 0;
    }
    .errorMessage h2{
        font-size: 1rem;
        margin-bottom: 0;
    }
`
export const ContainerButtons = styled.div`
    button {
        text-align: center;
        font-size: 2.5rem;
        box-sizing: border-box;
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-right: 1rem;
        border-radius: .5rem;
        transition: all .7s ease-in-out;
    }
    button:first-child {
        background-color: var(--color-green);
        color: #030712;
    }
    button:first-child:hover {
        background-color: transparent;
        border: 2px solid var(--color-green);
        color: var(--color-green);
        transform: scale(1.1);
    }

    button:last-child {
        color: #f87171;
        background-color: #fee2e2;
        border: 2px solid #f87171;
    }
    button:last-child:hover {
      transform: scale(1.1);
    }

`