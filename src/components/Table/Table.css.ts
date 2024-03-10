import styled from "styled-components";

export const MainTable = styled.section`
    margin-top: 5rem;
    min-height: 30rem;
    width: 100%;
    h2 {
        font-size: 3rem;
        margin: 3rem 2rem;
    }
`
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    caption {
        background-color: var(--main-bg-color--secundary);
        padding: 1rem 0;
        font-size: 1.2rem;
        color: var(--color-green);
        font-weight: bold;
        letter-spacing: .2rem;
    }
    thead {
        background-color: var(--main-bg-color--secundary);
    }
    thead th {
        font-size: 1.2rem;
        padding: 1rem;
        color: var(--color-green);  
    }
    tbody button {
        cursor: pointer;
        border: none;
        border-radius: .2rem;
        padding: .5rem;
        margin-left: .4rem;
        color: #fff;
    }
    tbody td button:nth-child(1) {
        background-color: red;
    }
    tbody tr:nth-child(even){
        background-color: var(--main-bg-color--secundary);
    }
    tbody td {
        padding: 1rem 0;
        font-size: 1.5rem;
    }
    tbody td span {
        margin-left: .5rem;
    }
    .actionsButton button:nth-child(1) {
        background-color: #fb923c;
    }
    .actionsButton button:nth-child(2) {
        background-color: #ef4444;
    }
    .loadindComponent{
        margin: 2rem 100%;
    }
`