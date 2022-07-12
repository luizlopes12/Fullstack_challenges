import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: sans-serif;
}
body{
    background: #FAFAFB;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

`;

