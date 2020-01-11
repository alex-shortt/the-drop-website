import React, { useState, useCallback } from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"

const Container = styled.div`
  width: 100%;
  height: 100%;
  `

const Title = styled.h1`
  text-align: center;
  color: black;
  margin: 0;
  border-bottom: 1px solid black;
`

const Button = styled.button``

const Input = styled.input``

export default function Landing(props) {
  const [phone, setPhone] = useState("")
  const [venmo, setVenmo] = useState("")

  const onSubmitPhone = useCallback(
    e => {
      console.log(phone)
    },
    [phone]
  )

  const onSubmitVenmo = useCallback(
    e => {
      console.log(venmo)
    },
    [venmo]
  )

  return (
    <Container>
      <Helmet title="Landing" />
      <Title>The Drop</Title>
      <Input value={phone} onChange={e => setPhone(e.target.value)} />
      <Button onClick={onSubmitPhone}>submit</Button>
      <Input value={venmo} onChange= {e => setVenmo(e.target.value)}/>
      <Button onClick={onSubmitVenmo}>submit</Button>

    </Container>
  )
}
