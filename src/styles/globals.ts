import styled, { createGlobalStyle } from 'styled-components'

import Colors from '@/utils/colors'
import Fonts from '@/utils/fonts'

export const responsiveUltrawide = '1400px'
export const responsiveDesktop = '1000px'
export const responsiveTablet = '760px'
export const responsiveMobile = '480px'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 14px;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }


  /* @font-face {
    font-family: 'MagmaWaveCaps';
    src: url('/fonts/MagmaWaveCaps.otf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  } */

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-family: 'Lexend Deca', sans-serif;
    /* 100;200;300;400;500;600;700;800;900 */
    /* font-family: 'Roboto', sans-serif; */
    /* 100;300;400;500;700;900 */
    text-decoration: none;
    user-select: none;
    transition: .2s;
    color: white;
  }

  scroll-behavior: smooth;

  body {
    background-color: ${Colors.background};
  }

  // ------------------------- SCROLL BAR

  ::-webkit-scrollbar {
    width: 5px;
    z-index: 1000;
  }

  ::-webkit-scrollbar-track {
    background: ${Colors.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${Colors.contrast};
    border-radius: 10px;
  }
`

export default GlobalStyle

export const Window = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
