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
    font-family: Futura, Avenir, Lato, Roboto, sans-serif;
    overflow: auto;
    overflow-x: hidden;
  }
  
  .gm-control-active.gm-fullscreen-control {
    display: none;
  }
  
  .gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom{
    top: 0;
  }
`
