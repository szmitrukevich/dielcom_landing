import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: #ABA2B6;
  }
  }
`

export { GlobalStyle }