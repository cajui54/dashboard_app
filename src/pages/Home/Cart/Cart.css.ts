import styled from "styled-components";

export const CartContainer = styled.div`
    background-color: var(--main-bg-color--secundary);
    border-radius: .5rem;
    width: 40%;
    min-height: 30rem;
    padding: 1rem 0;
`
export const LogoContainer = styled.div `
    display: flex;
    align-items: center;
    margin: 2rem auto;
    width: 90%;
    padding: .5rem;
    h2 {
        margin-left: .5rem;
    }
    .SVGContainer {
        position: relative;
    }
    .SVGContainer svg {
        font-size: 2rem;
        margin: 0 .3rem;
        padding: 0.3rem;
        border-radius: 2rem;
        color: var(--main-bg-color--secundary);
    }
    .SVGContainer svg:nth-child(1) {
        background-color: var(--color-green--dark);
    }
    .SVGContainer svg:nth-child(2) {
        background-color: var(--color-green--dark);
    }
    .SVGContainer svg:nth-child(3) {
        background-color: var(--color-green--dark);
    }
    

`
export const InfoContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    padding: 2rem;
    width: 95%;
    margin: 1rem auto;

    button {
        margin-right: 2rem;
        padding: .5rem;
        border: none;
        border-radius: .5rem;
        background-color: var(--main-bg-color--secundary);
        color: var(--color-green--dark);
        border: 1px solid var(--color-green--dark);
        cursor: pointer;
        transition: all .5s ease-in;
    }
    button:hover {
        transform: scale(1.1);
    }
    button svg {
        margin-right: .5rem;
    }
`
export const CardInfo = styled.div`
    padding: .5rem;
    p {
        color: var(--color-green--dark);
        margin-top: 1rem;
    }
    p svg {
        margin-right: 1rem;
        transform: scale(3);
    }
    p span {
        font-size: 1.5rem;
        letter-spacing: .1rem;
        font-weight: bold;
    }
`
export const ContainerList = styled.div`
    background-color: var(--color-black);
    width: 95%;
    min-height: 30rem;
    margin: 0 auto;
    border-radius: .5rem;
`
export const ItemsContainer = styled.div`
    min-height: 30rem;
    width: 98%;
    margin: 0 auto;
    
    ul {
        width: 100%;
        margin: 0 auto;
        padding: 1rem 0;
        overflow-y: scroll;
        scroll-behavior: smooth;
        scrollbar-color: var(--color-green--dark) var(--main-bg-color--secundary);
        height: 30rem;
    }

    li {
        background-color: var(--main-bg-color--secundary);
        border: .1rem dotted var(--color-green);
        padding: 1rem;
        margin: 1rem auto;
        width: 90%;
        border-radius: .5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    li div {
        text-align: center;
        margin-left: .5rem;
        display: flex;
        flex-direction: column;
    }
    li div span:first-child {
        font-size: .6rem;
        color: var(--color-green--dark);
    }
    li div span:last-child {
        letter-spacing: .1rem;
        font-weight: bold;
    }
    li button {
        padding: .2rem;
        border-radius: .2rem;
        background-color: transparent;
        color: #ef4444;
        border: .1rem solid #ef4444;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    li button:hover {
        background-color: #ef4444;
        color: #fff;
    }
    .messageEmpty {
        background-color: var(--main-bg-color--secundary);
        width: 95%;
        margin: 2rem auto;
        padding: 1rem 0;
        text-align: center;
        border-radius: .5rem;
    }
`