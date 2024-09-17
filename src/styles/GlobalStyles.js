import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  :root {

    // colors

    --bg-lt: #555;
    --bg-md: #444;
    --bg-dk: #272727;
    --lt-grey: #aaa;
    --dk-grey: #777;
    --grey: #333;
    --white: #fff;
    --blue: #5accdb;
    font-size: 62.5%;

    // font sizes
    --fs-xxs: .8rem;
    --fs-xs: 1.2rem;
    --fs-sm: 1.4rem;
    --fs-md: 1.6rem;
    --fs-lg: 1.8rem;
    --fs-xl: 3.2rem;

    // margins and paddings
    --xs: .4rem;
    --sm: .8rem;
    --md: 1.6rem;
    --lg: 3.2rem;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100svw;
    height: 100svh;
    overflow: hidden;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }
  body {
    font-size: var(--fs-md);
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      to right bottom,
      #333333,
      #252525,
      #222222,
      #151515,
      #111111
    );
    overflow-x: hidden;
  }
  p {
    color: var(--lt-grey);
  }
`

export default GlobalStyles