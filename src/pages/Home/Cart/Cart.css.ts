import styled from "styled-components";

export const CartContainer = styled.div`
  background-color: var(--main-bg-color--secundary);
  border-radius: 0.5rem;
  width: 40%;
  min-height: 30rem;
  padding: 1rem 0;
  position: relative;
  .buttonMove {
    background-color: transparent;
    font-size: 3rem;
    border: none;
    border: 1px solid var(--color-green--dark);
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -5rem;
    cursor: pointer;
    color: var(--color-green--dark);
    transition: all 0.5s ease-in;
  }
  .buttonMove:hover {
    transform: scale(1.2);
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem auto;
  width: 90%;
  padding: 0.5rem;
  h2 {
    margin-left: 0.5rem;
  }
  .SVGContainer {
    position: relative;
  }
  .SVGContainer svg {
    font-size: 2rem;
    margin: 0 0.3rem;
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
`;
export const InfoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 2rem;
  width: 95%;
  margin: 1rem auto;

  button {
    margin-right: 2rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: var(--main-bg-color--secundary);
    color: var(--color-green--dark);
    border: 1px solid var(--color-green--dark);
    cursor: pointer;
    transition: all 0.5s ease-in;
  }
  button:hover {
    transform: scale(1.1);
  }
  button svg {
    margin-right: 0.5rem;
  }
`;
export const CardInfo = styled.div`
  padding: 0.5rem;
  p {
    color: var(--color-green--dark);
    margin-top: 1rem;
  }
  p svg {
    margin-right: 1.5rem;
    transform: scale(3);
  }
  p span {
    letter-spacing: 0.1rem;
    font-weight: bold;
    font-size: 2rem;
  }
`;
export const ContainerList = styled.div`
  background-color: var(--color-black);
  width: 95%;
  min-height: 30rem;
  margin: 0 auto;
  border-radius: 0.5rem;
`;
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
    border: 0.1rem dotted var(--color-green);
    padding: 1rem;
    margin: 1rem auto;
    width: 90%;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li div {
    text-align: center;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
  }
  li div span:first-child {
    font-size: 0.6rem;
    color: var(--color-green--dark);
  }
  li div span:last-child {
    letter-spacing: 0.1rem;
    font-weight: bold;
  }
  li button {
    padding: 0.2rem;
    border-radius: 0.2rem;
    background-color: transparent;
    color: #ef4444;
    border: 0.1rem solid #ef4444;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
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
    border-radius: 0.5rem;
  }
`;
export const FormContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  form {
    padding: 0.5rem;
  }
  h2 {
    color: var(--color-green--dark);
    margin-bottom: 1.5rem;
  }
`;
export const inputContainer = styled.div<{ input: boolean }>`
  background-color: var(--color-black);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  span {
    font-size: 2rem;
  }
  span svg {
    font-size: 2rem;
    margin: 0 0.9rem;
    color: var(--color-green--dark);
  }
  p {
    position: absolute;
    top: -0.3rem;
    color: var(--color-red-dark);
  }
  input {
    background-color: ${(props) => (props.input ? "#0f172a" : "#fca5a5")};
    width: 10rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    border: 0.8px solid ${(props) => (props.input ? "#10E180" : "#ef4444")};
    color: ${(props) => (props.input ? "#10E180" : "#ef4444")};
    letter-spacing: 0.2rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
`;
export const SpanContainer = styled.div`
  background-color: var(--color-black);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span:first-child {
    font-size: 2rem;
  }
  span:first-child svg {
    font-size: 2rem;
    margin: 0 0.9rem;
    color: var(--color-green--dark);
  }
  span:last-child {
    color: var(--color-green--dark);
    font-size: 2rem;
    font-weight: bold;
  }
`;
export const ButtonsContainer = styled.div<{ button: boolean }>`
  width: 95%;
  margin: 1rem auto;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 5rem;
    background-color: var(--color-green--dark);
    color: var(--main-bg-color--secundary);
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: ${(props) => (props.button ? 0.5 : 1)};
  }
  button span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button span svg {
    margin-right: 0.5rem;
  }
`;
