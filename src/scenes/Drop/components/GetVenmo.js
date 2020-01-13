import React, { useState, useCallback } from "react"
import styled from "styled-components/macro"

import { storeVenmo } from "services/localStorage"

const Container = styled.div`
  background: #0e1525;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
`

const Input = styled.input`
  flex: 1;
  margin-left: 5px;
  padding: 5px;
`

const Group = styled.div`
  width: 100%;
  display: flex;
  max-width: 300px;
  margin: 0 auto;
  align-items: center;
`

const Submit = styled.button`
  color: white;
  background: #2c6674;
  margin-top: 15px;
  padding: 8px;
  border: none;
`

export default function GetVenmo(props) {
  const { setVenmo } = props

  const [typed, setTyped] = useState("")
  const onSubmit = useCallback(() => {
    storeVenmo(typed)
    setVenmo(typed)
  }, [setVenmo, typed])

  return (
    <Container>
      <h3>Enter your venmo to participate</h3>
      <br />
      <br />
      <Group>
        <h3>@</h3>
        <Input value={typed} onChange={e => setTyped(e.target.value)} />
      </Group>
      <Submit onClick={onSubmit}>OK</Submit>
    </Container>
  )
}
