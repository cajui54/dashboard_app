import styled from "styled-components";

export const MainForm = styled.div`
    background-color: var(--main-bg-color--secundary);
    width: 30rem;
    min-height: 40rem;
    margin-top: 29rem;
    border-radius: 2rem;
`

export const ContainerInfo = styled.div`
    margin: 3rem auto;
    width: 90%;
    text-align: center;
    svg {
        font-size: 9rem;
    }
    h2 {
        font-size: 1rem;
        margin-top: -1rem;
    }
    .addSvg {
        color: #22d3ee;
    }
    .editSvg {
        color: var(--btn-edit);
    }
`

export const Form = styled.form`
    width: 90%;
    margin: 1rem auto;
    fieldset {
        padding: 1rem 2rem;
        border-radius: .5rem;
        border: none;
    }
    fieldset legend {
        font-size: 1rem;
        margin-bottom: 1rem;
    }

`

