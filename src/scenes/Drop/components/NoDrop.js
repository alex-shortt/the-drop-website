import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: #0e1525;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
`

const ErrorText = styled.h3`
  color: red;
`

export default function NoDrop(props) {
  const { error, drop } = props

  if (!drop && !error) {
    return (
      <Container>
        <h3>Loading...</h3>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <ErrorText>error</ErrorText>
        <br />
        <br />
        <h3>{error}</h3>
      </Container>
    )
  }

  if (drop.status !== "active") {
    return (
      <Container>
        <ErrorText>error</ErrorText>
        <br />
        <br />
        <h3>Someone got to the drop before you</h3>
      </Container>
    )
  }

  return <Container />
}
