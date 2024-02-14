import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    * {
        margin: 0;
        padding: 0;
    }
     body {
        color: #fff;
        background-color: #030712;
        color: #fff;
        font-family: "Roboto", sans-serif, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        //font-family: "Protest Strike", sans-serif;
    }
    .focusInput__span {
        color: #2dd4bf !important;
        top: .5rem !important;
        font-size: 1rem !important;
        transition: all .5s ease-in-out;
    }
    .focusInput__svg {
        color: #2dd4bf !important;
        transform: scale(.7);
    }
    .errorMessage {
        margin: .5rem 1rem;
        letter-spacing: 1px;
        color: #ef4444;
    }

`
export default GlobalStyle;