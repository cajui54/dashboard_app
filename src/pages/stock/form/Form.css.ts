import styled from "styled-components";

export const MainFormStock = styled.div`
  background-color: var(--main-bg-color--secundary);
  width: 25%;
  min-height: 50rem;
  margin-top: 10rem;
  border-radius: 1rem;
  .rangerInputContainer {
    position: relative;
    input {
      width: 15rem;
      margin: 1rem 0;
      cursor: pointer;
    }
    span {
      position: absolute;
      color: var(--color-green--dark);
      font-size: 2rem;
      right: 2rem;
      bottom: 2.5rem;
    }
  }
  .ContainerProfit {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-right: 1rem;
      text-align: center;
    }
    span p:first-child {
      color: var(--color-green--dark);
      font-size: 2rem;
    }
    span p:last-child {
      color: #fff;
      font-size: .7rem;
    }
  }
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
export const ContainerPriceUnity = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  right: 5rem;
  top: 1rem;

  span:first-child {
    font-size: 2rem;
    color: var(--color-green--dark);
  }
  span:last-child {
    color: #fff;
    font-size: .7rem;
  }
`
