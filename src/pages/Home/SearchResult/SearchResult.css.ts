import styled from "styled-components";

export const MainSearchResult = styled.div`
    width: 80%;
    margin: 3rem 1rem;
    min-height: 30rem;
    h2 {
        margin: 2rem;
        letter-spacing: .2rem;
    }
    ul {
        width: 100%;
        font-size: 1.5rem;
        list-style: none;
    }   
    li {
        background-color: var(--main-bg-color--secundary);
        margin-bottom: 2rem;
        padding: 1.5rem;
        border-radius: 1rem;
        border: 1px solid var(--color-grey-light);
        transition: all .5s ease-in-out;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    li:hover {
        transform: scale(1.1);
        background-color:#334155;
    }
    li p {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    li p span:first-child {
        position: relative;
    }
    li p span:first-child svg{
        position: absolute;
        top: .1rem;
        left: -1.5rem;
    }
    li p span:last-child {
        color: var(--color-green--dark);
        font-weight: bold;
        position: absolute;
        top: -.8rem;
        font-size: .9rem;
    }
    .liEmptyItem {
        justify-content: center;
    }
    .liEmptyItem svg {
        margin-right: 1rem;
        transform: scale(1.2);
        color: var(--color-green--dark);
    }
`