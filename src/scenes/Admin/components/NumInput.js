import React from "react"
import styled from "styled-components/macro"

import { Container, Input, Subtitle, Title } from "./commonComponents"

export default function NumInput(props) {
  const { name, state, setState, subtitle } = props

  return (
    <Container>
      <Title>{name}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Input
        value={state}
        onChange={e => setState(e.target.value)}
        type="number"
      />
    </Container>
  )
}
