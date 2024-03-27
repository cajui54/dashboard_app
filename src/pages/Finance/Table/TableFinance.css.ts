import styled from "styled-components";

export const MainTable = styled.div`
    width: 100%;
    min-height: 30rem;
    margin: 1rem auto;
`
export const TableFinance = styled.table`
    margin: 5rem auto;
    width: 95%;
    min-height: 20rem;
    caption {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--main-bg-color--secundary);
        border-radius: 10px;
        padding: 1rem 0;
    }
    caption .subTitle {
        color: var(--color-green);
        font-size: 2rem;
    }
   
`