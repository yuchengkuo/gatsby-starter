import { createGlobalStyle } from "styled-components"
import font from "../assets/fonts/Sora[wght].woff2"

const Typography = createGlobalStyle`
    @font-face {
        font-family: Sora;
        src: url(${font});
    }
    html {
        font-family: Sora, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        color: var(--white);
    }
    mark, .mark {
    background: var(--primary);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
    }
    h1 {
        font-size:4.0rem;
        font-weight: 600;
    }
    h2 {
        font-size: 3.6rem;
        font-weight: 600;
    }
    h3 {
        font-size: 2.8rem;
        font-weight: 600;
    }
    h4{
        font-size: 2.4rem;
        font-weight: 600;
        line-height:140%;
    }
    h5{
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing:0.7px;
    }
    a {
        font-size: 1.4rem;
        font-weight:600;
        letter-spacing: 0.7px;
    }
    p{
        font-size:2.0rem;
        font-weight:200;
        line-height:220%;
        color: var(--light-gray);
    }
    .cap {
        font-size: 1.4rem;
        font-weight: 400;
        line-height:115%;
        letter-spacing:1px;
    }

`

export default Typography
