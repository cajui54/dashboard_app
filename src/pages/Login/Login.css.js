import styled from "styled-components";

export const LoginMain = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const FormContainer = styled.div`
    width: 300px;
    background-color: #0f172a;
    border-radius: 1rem;
`
export const Form = styled.form`
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const InputContainer = styled.div`
    margin: 2rem 0;
    padding: 0 1rem;
    box-sizing: border-box;
    width: 80%;
    label {
        display: block;
        margin: 2rem 0;
        position: relative;
    }
    label span{
        color: #334155;
        font-size: 1.3rem;
        letter-spacing: 1.2px;
        font-family: "Protest Strike", sans-serif;
        position: absolute;
        top: 2rem;
        left: 3rem;
        transition: all .5s ease-in-out;
    }
    label svg { 
        color: #334155;
        position: absolute;
        font-size: 2rem;
        top: 1.5rem;
        left: .5rem;
        transition: all .5s ease-in-out;
    }
    input {
        font-family: "Protest Strike", sans-serif;
        letter-spacing: .4rem;
        width: 90%;
        padding: 2rem 0;
        padding-left: 3rem;
        font-size: 1.5rem;
        background-color: #030712;
        border-radius: .5rem;
        color: #fff;
        font-weight: bold;
        border: none;
        outline: none;
    }
    input:focus {
        background-color: #18181b;
        box-shadow: 0 0 3px #2dd4bf;
    }
  
`
export const ButtonsContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     button {
        letter-spacing: .1rem;
        width: 100%;
        margin: .5rem 0;
        padding: .8rem 0 ;
        border: none;
        border-radius: .5rem;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        transition: all .5s ease-in;
     }
     button:first-child {
        background-color: #14b8a6;
     }
     button:first-child:hover {
        background-color: #0f766e;
     }
     button:last-child {
        background-color: #030712;
     }
     button:last-child:hover {
        background-color: #18181b;
     }
`