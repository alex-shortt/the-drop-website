import React from "react"
import styled from "styled-components/macro"

import { Container, Input, Subtitle, Title } from "./commonComponents"

export default function TextInput(props) {
  const { name, state, setState, subtitle, ...restProps } = props
  return (
    <Container>
      <Title>{name}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Input value={state} onChange={e => setState(e.target.value)} />
    </Container>
  )
}
