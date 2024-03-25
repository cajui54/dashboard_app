import styled from "styled-components";

export const MainTable = styled.section`
  position: relative;
  margin-top: 2rem;
  min-height: 30rem;
  width: 100%;
  h2 {
    font-size: 3rem;
    margin: 3rem 2rem;
  }
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  caption {
    background-color: var(--main-bg-color--secundary);
    padding: 1rem 0;
    font-size: 1.2rem;
    color: var(--color-green);
    font-weight: bold;
    letter-spacing: 0.2rem;
  }

  tbody button {
    cursor: pointer;
    border: none;
    border-radius: 0.2rem;
    padding: 0.5rem;
    margin-left: 0.4rem;
    color: #fff;
  }
  tbody td button:nth-child(1) {
    background-color: red;
  }
  tbody tr:nth-child(even) {
    background-color: var(--main-bg-color--secundary);
  }
  tbody td {
    padding: 1rem 0;
    font-size: 1.5rem;
  }
  tbody td span {
    margin-left: 0.5rem;
  }
  .actionsButton button:nth-child(1) {
    background-color: #fb923c;
  }
  .actionsButton button:nth-child(2) {
    background-color: #ef4444;
  }
  .loadindComponent {
    margin: 2rem 100%;
  }
`;
export const HeadTable = styled.thead`
  background-color: var(--main-bg-color--secundary);
  th {
    font-size: 1.2rem;
    padding: 1rem;
    color: var(--color-green);
  }
`;
export const TableProduct = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-left: 2rem;

  caption {
    position: relative;
    border-radius: 0.2rem;
    background-color: var(--main-bg-color--secundary);
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    padding: 2rem 0;
  }
`;
export const TbodyTable = styled.tbody`
  text-align: center;
  font-size: 1.5rem;
  tr:nth-child(even) {
    background-color: #475569;
  }
  td {
    padding: 1rem 0;
  }
`;

export const WarningProduct = styled.div`
  position: absolute;
  width: 70rem;
  top: 14rem;
  right: 1rem;
`
