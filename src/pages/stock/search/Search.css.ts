import styled from "styled-components";

export const SearchMain = styled.div`
  padding: 1rem;
  width: 40rem;
  margin-left: 10rem;
`;
export const ContainerInput = styled.div`
  position: relative;
  label {
    display: flex;
  }
  label p {
    color: var(--color-green);
    font-weight: bold;
    position: absolute;
    top: 2.8rem;
    left: 1rem;
    transition: all 0.6s ease-in-out;
  }
  input {
    background-color: var(--main-bg-color--secundary);
    padding: 1.5rem;
    width: 30rem;
    border: none;
    border-radius: 1rem;
    border: 1px solid var(--color-green);
    margin: 1rem 0;
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.2rem;
    outline: none;
  }
  input:focus {
    box-shadow: 0 0 10px var(--color-green);
  }
  span {
    margin: 1rem 1.5rem;
  }
`;
export const ContainerButtons = styled.div`
  position: absolute;
  right: 8rem;
  top: 2.2rem;
  button {
    margin-right: 0.5rem;
    padding: 0.2rem;
    border: none;
    border-radius: 0.5rem;
    color: var(--main-bg-color--secundary);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
  button:hover {
    transform: scale(1.2);
  }
  button:first-child {
    background-color: var(--color-green);
  }
  button:last-child {
    background-color: #f59e0b;
  }
`;
