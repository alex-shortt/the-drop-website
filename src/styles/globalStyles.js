import { createGlobalStyle } from "styled-components/macro"
import "typeface-roboto"
import "normalize.css"

import "./fontawesome"

import "react-datepicker/dist/react-datepicker.css"

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    font-family: Avenir, Lato, Roboto, sans-serif;
    overflow: auto;
    overflow-x: hidden;
  }
`
