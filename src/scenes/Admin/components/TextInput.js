import React from "react"
import styled from "styled-components/macro"

import { Container, Input } from "./commonComponents"

export default function TextInput(props) {
  const { name, state, setState, ...restProps } = props
  return (
    <Container>
      <h3>{name}</h3>
      <Input
        value={state}
        onChange={e => setState(e.target.value)}
        {...restProps}
      />
    </Container>
  )
}
