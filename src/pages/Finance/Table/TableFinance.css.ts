import styled from "styled-components";

export const MainTable = styled.div`
    width: 100%;
    min-height: 30rem;
    margin: 1rem auto;
    .containerMessage {
        margin-top: 10rem;
    }
`
export const TableFinance = styled.table`
    margin: 5rem auto;
    width: 95%;
    border-collapse: collapse;
    caption {
        width: 100%;
        background-color: var(--main-bg-color--secundary);
        padding: 1rem 0;
    }
    caption div {
        display: flex;
        align-items: center;
        justify-content: center;

    }
    caption .subTitle {
        color: var(--color-green);
        font-size: 2rem;
        min-width: 25rem;
    }
    thead {
        background-color: var(--main-bg-color--secundary);
    }
    thead th {
        padding: 1rem 0;
        color: var(--color-green);
        font-size: 1.5rem;
    }
`

export const BodyTable = styled.tbody`
    text-align: center;
    tr:nth-child(even){
        background-color: var(--main-bg-color--secundary);
    }
    td {
        color: #94a3b8;
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: .1rem;
        padding: 1rem 0;
    }

`
export const TDProfit = styled.td`
    
    input {
        background-color: var(--color-black);
        border-radius: .5rem;
        border: .1rem solid var(--color-green--dark);
        color: var(--color-green--dark);
        text-align: center;
        width: 4.5rem;
        padding: .5rem;
        font-weight: bold;
        letter-spacing: .1rem;
    }
    svg {
        margin-left: 1rem;
        font-size: 1.3rem;
        color: var(--color-green--dark);
    }

`