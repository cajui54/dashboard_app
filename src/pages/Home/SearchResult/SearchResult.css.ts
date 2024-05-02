import styled from "styled-components";

export const MainSearchResult = styled.div`
  width: 90%;
  margin: 3rem 1rem;
  min-height: 30rem;
  h2 {
    margin: 2rem;
    letter-spacing: 0.2rem;
  }
  ul {
    width: 100%;
    font-size: 1.5rem;
    list-style: none;
  }
  li {
    background-color: var(--main-bg-color--secundary);
    margin-bottom: 2rem;
    padding: 0.2rem 1.5rem;
    border-radius: 1rem;
    border: 1px solid var(--color-grey-light);
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  li:hover {
    transform: scale(1.1);
    background-color: #334155;
  }
  li div {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1rem;
  }
  li div span:first-child {
    position: relative;
    text-align: center;
    font-size: 1.5rem;
  }
  li div span:first-child svg {
    position: absolute;
    top: 0.1rem;
    left: -1.5rem;
  }
  li div span:last-child {
    color: var(--color-green--dark);
    font-weight: bold;
    position: absolute;
    top: -0.1rem;
    left: 0;
    font-size: 0.8rem;
    width: 7rem;
  }
  button {
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: transparent;
    color: var(--color-green--dark);
    border: 1px solid var(--color-green--dark);
    font-weight: bold;
    transition: all 0.5 ease-in;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--color-green--dark);
    color: #334155;
  }
  button span {
    margin-left: 0.5rem;
  }
  .liEmptyItem {
    justify-content: center;
  }
  .liEmptyItem svg {
    margin-right: 1rem;
    transform: scale(1.2);
    color: var(--color-green--dark);
  }
`;
export const ContainerInput = styled.div`
  position: relative;
  margin-left: 1rem;
  span {
    z-index: 2;
    font-weight: bold;
    font-size: 0.6rem !important;
    position: absolute;
    top: -0.2rem;
    color: var(--color-green--dark);
  }
  input {
    background-color: var(--main-bg-color--secundary);
    border: none;
    text-align: center;
    color: #fff;
    font-weight: bold;
    width: 4rem;
    padding: 0.8rem 0.5rem;
    border-radius: 0.5rem;
    border: 0.1rem solid var(--color-green--dark);
    position: relative;
    top: -1rem;
  }
`;
export const ContainerPrice = styled.div``;
