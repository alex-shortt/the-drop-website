import React, { useState, useCallback } from "react"
import styled from "styled-components/macro"

import { addUser } from "services/backend"
import Helmet from "components/Helmet"
import TextInput from "./components/TextInput"

const Container = styled.div`
  width: 100%;
  height: 100%;
  `
  const Submit = styled.button`
  border: 1px solid black;
  padding: 10px 10px;
  margin: 40px auto;
  display: block;
  cursor: pointer;
  font-size: 1.4rem;

  &:hover,
  &:active {
    background: black;
    color: white;
  }
`

const Title = styled.h1`
  text-align: center;
  color: black;
  margin: 0;
  border-bottom: 1px solid black;
`
const ErrorText = styled.p`
  color: red;
  text-align: center;
`

const SuccessText = styled.p`
  color: green;
  text-align: center;
`

const Button = styled.button``

const Input = styled.input``

export default function Landing(props) {
  const [error, setError] = useState()
  const [success, setSuccess] = useState()
  const [phone, setPhone] = useState("")
  const [venmo, setVenmo] = useState("")

  const onSubmit = useCallback(async () => {
    setError(null)
    const info = {
      phone,
      venmo
    }
    const response = await addUser(info)
    const result = await response.json()

    if (!response.ok) {
      setError(result.message)
    } else {
      setSuccess(true)
      setPhone("")
      setVenmo("")
    }
  }, [phone, venmo])

  return (
    <Container>
      <Helmet title="Landing" />
      <Title>The Drop</Title>
      <TextInput
          name = "Sign Up"
          subtitle="Phone number"
          state={phone}
          setState={setPhone}
      />
      <TextInput
        subtitle="Venmo"
        state={venmo}
        setState={setVenmo}
      />
      {error && <ErrorText>{error}</ErrorText>}
      {success && <SuccessText>Success</SuccessText>}
      <Submit onClick={onSubmit}>Submit</Submit>

    </Container>
  )
}
