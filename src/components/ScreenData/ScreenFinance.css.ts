import styled from "styled-components";

export const MainScreenFinance = styled.div`
    position: relative;
    width: 90%;
    min-height: 15rem;
    padding: 1rem;
    margin: 5rem auto;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    .subtitle {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 3rem;
    }

`
export const MetricsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem auto;
    width: 95%;
    height: 15rem;
`
export const CardMetrics = styled.div`
    background-color: var(--main-bg-color--secundary);

    margin-left: 2rem;
    width: 25rem;
    height: 90%;
    border-radius: 1rem;
    h2 {
        margin: 1rem 2rem;
        color: var(--color-green);
    }
    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 9rem;
        width: 95%;
        margin: 1rem auto;
    }
    svg {
        font-size: 6rem;
    }
    span {
        font-size: 2.5rem;
        letter-spacing: .1rem;
    }
    .firstContainer svg {
        filter: drop-shadow(0 0 5px var(--color-red-dark));
        color: var(--color-red-ligth);
    }
    .firstContainer span {
        color: var(--color-red-dark);
    }
    .redStyle span {
        color: var(--color-red-dark);
    }
    .orangeStyle svg {
        filter: drop-shadow(0 0 5px var(--color-red-dark));
        color: var(--color-red-ligth);
    }
    .orangeStyle span {
        color: var(--color-red-dark);
    }
    .profitScreen ul {
        width: 90%;
        margin: 1rem auto;
        list-style: none;
    }
    .profitScreen li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        margin-bottom: 1rem;
        background-color: var(--color-black);
        border-radius: 1rem;
    }
    .profitScreen svg {
        margin-right: .5rem;
        font-size: 1.5rem;
        color: #6ee7b7;
    }
    .profitScreen span:nth-child(1) {
        color: #fff;
    }
    .profitScreen span {
        font-size: 1.3rem;
        color: var(--color-green--dark);
    }
    .sellStyle svg {
        color: #10b981;
    }
    .sellStyle span {
        font-size: 8rem ;
        color: #10b981;
    }
`