import React from "react"
import styled from "styled-components/macro"

import { Container, Input } from "./commonComponents"

export default function NumInput(props) {
  const { name, state, setState } = props

  return (
    <Container>
      <h3>{name}</h3>
      <Input
        value={state}
        onChange={e => setState(e.target.value)}
        type="number"
      />
    </Container>
  )
}
