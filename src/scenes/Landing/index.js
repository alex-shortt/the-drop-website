import React, { useState, useCallback } from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`

const Title = styled.h1`
  text-align: center;
  color: black;
  margin: 0;
`

const Button = styled.button``

const Input = styled.input``

export default function Landing(props) {
  const [phone, setPhone] = useState("")

  const onSubmit = useCallback(
    e => {
      console.log(phone)
    },
    [phone]
  )

  return (
    <Container>
      <Helmet title="Landing" />
      <Title>The Drop</Title>
      <Input value={phone} onChange={e => setPhone(e.target.value)} />
      <Button onClick={onSubmit}>submit</Button>
    </Container>
  )
}
