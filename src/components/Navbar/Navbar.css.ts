import styled from "styled-components";

export const NavMain = styled.nav`
    min-width: 50rem;
    margin-right: 1rem;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        text-align: center;
        text-decoration: none;
        color: #14b8a6;
        cursor: pointer;
        transition: all .9s ease-in-out;
        display: inline-block;
        margin-left: 5rem;
    }
    svg {
        font-size: 4rem;
    }
    svg:hover {
        transform: scale(1.3);
        transition: all .9s ease-in-out;
        color: #fff;
    }

`