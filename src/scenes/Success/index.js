import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"

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

const SuccessText = styled.h3`
  color: green;
`

export default function Success(props) {
  return (
    <Container>
      <Helmet title="Success" />
      <SuccessText>success</SuccessText>
      <br />
      <br />
      <h3>check your venmo for $</h3>
    </Container>
  )
}
