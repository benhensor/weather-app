import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        width: 100svw;
        height: 100svh;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        width: 100%;
        height: 100vh;
        background: linear-gradient(
		to right bottom,
		#303030,
		#2c2c2c,
		#252525,
		#202020,
		#1a1a1a
	);
        overflow-x: hidden;
    }

    p {
        color: #aaa;
    }

`

export default GlobalStyles