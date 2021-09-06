import { createGlobalStyle } from "styled-components"
// import "normalize.css"

const GlobalStyles = createGlobalStyle`
    :root{
        --black: #1D1E21;
        --white: #E5E5E5;
        --primary:#FECD48;
        --gray: #777980;
        --light-gray:#BBBCBF;
        --dropshadow:drop-shadow(0px 4px 36px rgba(0, 0, 0, 0.3));;
    }

    html {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: var(--black);
        color: var(--white);
    }

    a {
        color: var(--gray);
        text-decoration: none;
    }

    ul {
        list-style:none;
    }
`

export default GlobalStyles
