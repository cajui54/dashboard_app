import styled from "styled-components";

export const MainSearch = styled.div`
    background-color: var(--main-bg-color--secundary);
    width: 60%;
    height: 9rem;
    margin: 1rem auto;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    
    form {
        position: relative;
        display: flex;
        align-items: center;
        width: 80%;
        margin: 0 auto;
    }
`
export const InputContainer = styled.div`
    label {
        position: relative;
    }
    label p {
        position: absolute;
        left: 1rem;
        top: -.6rem;
        color: var(--color-green);
        transition: all .5s ease-in-out;
    }
    input {
        color: #fff;
        width: 30rem;
        letter-spacing: .3rem;
        font-weight: bold;
        padding: 1.5rem 2rem;
        border: 1px solid var(--color-green);
        border-radius: .5rem;
        margin-right: 1rem;
        background-color: var(--color-black);
        outline: none;
    }
    input:focus {
        border: 1px solid var(--color-green);
        background-color: var(--main-bg-color--secundary);
        font-weight: bold;
    }
    p {
        margin: .5rem 1rem;
    }
    .focusP {
        top: -2rem;
        left: 0rem;
        font-size: .9rem;
    }

`
export const ButtonsContainer = styled.div`
    min-width: 5rem;
    position: absolute;
    top: -1rem;
    right: 2rem;
    display: flex;
    align-items: center;
    button {
        margin-left: .3rem;
        padding: .5rem;
        border-radius: .5rem;
        border: none;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    button:hover {
        transform: scale(1.2);
    }
    button:first-child { 
        background-color: var(--color-green);
    }
    button:last-child { 
        background-color: var(--btn-edit);
    }
`
export const SelectContainer = styled.div`
  position: relative;
  margin-left: 5rem;
  select {
    cursor: pointer;
    padding: 1rem 2rem;
    min-width: 15rem;
    text-align: center;
    font-weight: bold;
    color: var(--color-green);
    background-color: var(--color-black);
    border: .1rem solid var(--color-green);
    border-radius: .5rem;
    letter-spacing: .2rem;
  }
  svg {
    position: absolute;
    top: 1.4rem;
    left: 1rem;
    color: #fff;
    animation: animationSVG 1s ease-in-out infinite;
  }
  @keyframes animationSVG {
    to {
        transform: rotate(0);
    } 
    from {
        transform: rotate(360deg);
    }
  }
`