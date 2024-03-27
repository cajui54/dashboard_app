import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --main-bg-color--secundary: #0f172a;
        --color-green: #14b8a6;
        --btn-edit: #fb923c;
        --color-green--dark: #10E180;
        --color-green--ligth: #bbf7d0;
        --color-black: #030712;
        --color-red-dark: #ef4444;
        --color-red-ligth: #fca5a5;
    }
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
    .active {
        transform: scale(1.3);
        transition: all .9s ease-in-out;
        color: #fff !important;
    }
    .buttonActive {
        background-color: #22c55e;
        color: #fff;
    }
    .buttonblock {
        background-color: #ef4444;
        color: #fff;
    }
    .buttonDelete {
        background-color: #ef4444;
    }
    .buttonEdit {
        background-color: #f59e0b;
    }
    .isRequiredInput {
        background-color: #fecaca !important;
        border: .2rem solid #ef4444 !important;
        box-shadow: none !important;
    }
    .isRequiredLable {
        color: #ef4444 !important;
        margin-left: 2rem;
        letter-spacing: .1rem;
    }
    .isRequiredAsteristic {
        color: #ef4444 !important;
    }
    .editButton {
        background-color: orange !important;
    }
    .focusClass {
        top: 1.3rem !important;
        font-weight: bold !important;
        transform: scale(.8);
    }
    .tdStatus span{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tdStatus svg {
        margin-right: .5rem;
    }
    .spanAvailableTable {
        color: #22c55e !important;
    }
    .spanWarningTable {
        color: #f59e0b !important;
    }
    .spanEmptyTable {
        color: #ef4444 !important;
    }
    .actionsButtonTable button{
        padding: .5rem;
        margin-right: .5rem;
        border: none;
        border-radius: .2rem;
        font-size: 2rem;
        color: #1e293b;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    .actionsButtonTable button:first-child{
        background-color: #d97706;
    }
    .actionsButtonTable button:first-child:hover{
        background-color: #fcd34d;
    }
    .actionsButtonTable button:last-child{
        background-color: #ef4444;
    }
    .actionsButtonTable button:last-child:hover{
        background-color: #f87171;
    }
    .loadingArrow {
        animation: loadingAnimation .5s ease-in-out infinite forwards;
    }
    .editSVG {
        color: #f59e0b;
        font-size: 8rem !important;
        margin-left: 1.5rem;
    }
    .editStyle {
        color: #f59e0b !important;
    }
    @keyframes loadingAnimation {
        to {
            transform: rotate(0deg);
        }
        from {
            transform: rotate(380deg);
        }
    }
    .SearchByCategory {
        position: absolute;
        width: 30rem;
        right: .0rem;
        top: -2rem;
    }
    .SearchByCategory label p {
        font-size: .8rem;
    }
    .SearchByCategory select {
        width: 18.5rem !important;
        padding: 1.2rem !important;
    }
   
`;

export default GlobalStyle;
