import styled from "styled-components";

export const SearchMain = styled.div`
    background-color: var(--main-bg-color--secundary);
    min-height: 10rem;
    width: 80%;
    margin-top: 2rem auto;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContainerForm = styled.div`
    width: 80%;
    min-height: 9rem;

    form {
        position: relative;
        width: 40rem;
    }
    label {
        position: relative;
        display: block;
        margin-top: 1.5rem;
    }
    label svg {
        color: var(--color-grey-light);
        position: absolute;
        font-size: 2rem;
        left: .5rem;
        top: .9rem;
    }
    label p:first-child {
        color: var(--color-grey-light);
        font-weight: bold;
        letter-spacing: .1rem;
        position: absolute;
        left: 3rem;
        top: 1.2rem;
        font-size: 1.3rem;
        transition: all .5s ease-in-out;
    }
    label input {
        background-color: var(--color-black);
        width: 30rem;
        padding: 1rem 3rem;
        color: #fff;
        font-size: 1.9rem;
        font-weight: bold;
        letter-spacing: .1rem;
        border: none;
        border-radius: .5rem;
        border: 2px solid var(--color-grey-light);
        margin-right: 1.5rem;
    }
    label input:focus {
        background-color: var(--main-bg-color--secundary);
        outline: none;
        border-width: 2px;
        border: 2px solid var(--color-green--dark);
    }
    label span {
        position: relative;
        top: -1.8rem;
    }
    label p:last-child {
        margin-top: 1rem;
        margin-left: 0;
    }
    .focusInputP p:first-child {
        color: var(--color-green--dark) !important;
        top: .3rem !important;
        font-size: .8rem;
    }
    .focusInputP svg {
        color: var(--color-green--dark) !important;
    }
    .errorInput p:first-child {
        color: var(--color-red-dark) !important;
    }
    .errorInput svg {
        color: var(--color-red-dark) !important;
    }
    .errorInput input {
        color: var(--color-red-dark) !important;
        border: 1px solid var(--color-red-dark) !important;
    }
           
    form .ContainerMessage {
        margin: 1rem;
    }
 
`
export const ContainerButtons = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    top: .7rem;
    right: 5.5rem;
    width: 5rem;
    min-height: 3rem;
    z-index: 5;
    button {
        font-size: 2rem;
        cursor: pointer;
        margin-right: .4rem;
        padding: .4rem;
        border: none;
        border-radius: .2rem;
        color: var(--color-black);
        transition: all .5s ease-in-out;
    }
    button:hover {
        opacity: .8;
        transform: scale(1.1);
    }
    button:first-child {
        background-color: var(--color-green--dark);
    }
    button:last-child {
        background-color: var(--btn-edit);
    }
`