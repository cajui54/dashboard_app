import styled from "styled-components";

export const FieldsetContainer = styled.div`
  width: 95%;
  margin: 6rem auto;
  h6 {
    font-size: 1rem;
    width: 80%;
    margin: 1rem auto;
    color: #64748b;
    margin-bottom: 3rem;
  }
`;
export const InputContainer = styled.div`
  width: 90%;
  margin: 2.5rem auto;
  label {
    position: relative;
    display: flex;
    margin-bottom: 0.5rem;
  }
  label p {
    position: absolute;
    left: 1rem;
    top: 0.4rem;
  }
  label span {
    margin-left: 1rem;
  }
  label p,
  span {
    color: #64748b;
    font-weight: bold;
  }
  input {
    background-color: #111827;
    width: 90%;
    padding: 1.5rem 1rem;
    color: #e5e7eb;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 1rem;
    border: 2px solid #64748b;
    outline: none;
  }
  input:focus {
    border: 2px solid var(--color-green);
    background-color: #334155;
  }
  input:focus + span {
    color: var(--color-green) !important;
  }
`;
export const SelectContainer = styled.div`
  width: 90%;
  margin: 2.5rem auto;
  label {
    position: relative;
    display: flex;
    margin-bottom: 0.5rem;
  }
  label p {
    position: absolute;
    left: 1rem;
    top: 0.4rem;
  }
  label span {
    margin-left: 1rem;
  }
  label p,
  span {
    color: #64748b;
    font-weight: bold;
  }
  label svg {
    position: absolute;
    top: 2rem;
    left: 3rem;
  }
  select {
    background-color: #111827;
    width: 90%;
    padding: 1.5rem 1rem;
    color: #e5e7eb;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 1rem;
    border: 2px solid #64748b;
    outline: none;
    text-align: center;
    cursor: pointer;
  }
  option {
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    cursor: pointer;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    border-radius: 0.5rem;
    border: none;
    font-weight: bold;
    color: #fff;
    transition: all 0.5s ease-in-out;
  }
  button svg {
    margin-right: 0.8rem;
  }
  button:nth-child(1) {
    background-color: #0d9488;
  }
  button:nth-child(1):hover {
    background-color: #0f766e;
  }
  button:nth-child(2) {
    background-color: #eab308;
  }
  button:nth-child(1):hover {
    background-color: #0f766e;
  }
  button:nth-child(3) {
    background-color: #374151;
  }
  button:nth-child(3):hover {
    background-color: #475569;
  }
`;
