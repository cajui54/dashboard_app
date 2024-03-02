import styled from "styled-components";

export const MainResultSearch = styled.div`
    min-width: 60%;
    margin: 1rem 0 2rem 5rem;

    h3 {
        color: var(--color-green);
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    ul {
        background-color: #09090b;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 1rem;
        list-style: none;
    }
    ul li {
        padding: 1rem;
    }
    ul label {
        color: var(--color-green);
        font-weight: bold;
        margin-right: 1rem;
        font-size: 1rem;
    }
    ul span {
        margin-right: .2rem;
        font-size: 1.3rem;
    }
    .activeUser {
        color: #22c55e;
    }
    .blockUser {
        color: #ef4444;
    }
    ul button {
        width: 2rem;
        height: 2rem;
        border-radius: .5rem;
        border: none;
        text-align: center;
        margin-left: .5rem;
        cursor: pointer;
        color: #fff;
    }
`