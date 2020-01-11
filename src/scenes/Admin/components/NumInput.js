import React from "react"
import styled from "styled-components"

const Container = styled.div``

const Input = styled.input``

export default function NumInput(props) {
  const { name, state, setState } = props

  return (
    <Container>
      <p>{name}</p>
      <Input
        value={state}
        onChange={e => setState(e.target.value)}
        type="number"
      />
    </Container>
  )
}
