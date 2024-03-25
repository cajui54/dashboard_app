import styled from "styled-components";

export const MainFormStock = styled.div`
  background-color: var(--main-bg-color--secundary);
  width: 25%;
  min-height: 50rem;
  margin-top: 10rem;
  border-radius: 1rem;
`;
export const LogoForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 12rem;
  div {
    color: #64748b;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 12rem;
    text-align: center;
  }
  svg {
    margin-top: 4rem;
    font-size: 10rem;
  }
  h2 {
    text-align: center;
    font-size: 1rem;
    margin-top: .2rem;
  }
`;
