import React, { useState } from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"

import TextInput from "./components/TextInput"
import DateInput from "./components/DateInput"
import NumInput from "./components/NumInput"
import MapInput from "./components/MapInput"

const Container = styled.div`
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 0 50px;
`

const Title = styled.h1`
  text-align: center;
`

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Submit = styled.button`
  border: 1px solid black;
  padding: 10px 25px;
  margin: 40px auto;
  display: block;
  cursor: pointer;
  transition: 0.15s linear;
  font-size: 1.4rem;
  font-weight: bold;

  &:hover,
  &:active {
    background: black;
    color: white;
  }
`

export default function Admin(props) {
  const [name, setName] = useState("")
  const [code, setCode] = useState("")
  const [prize, setPrize] = useState(1)
  const [password, setPassword] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [notifyDate, setNotifyDate] = useState(new Date())
  const [location, setLocation] = useState({ lat: 34.421, lng: -119.847 })

  return (
    <Container>
      <Helmet title="Admin" />
      <Title>Add a Drop</Title>
      <hr />
      <Group>
        <TextInput name="Name" state={name} setState={setName} />
        <TextInput name="Code" state={code} setState={setCode} />
        <DateInput
          name="Notify Date"
          state={notifyDate}
          setState={setNotifyDate}
        />
        <DateInput
          name="Start Date"
          state={startDate}
          setState={setStartDate}
        />
        <NumInput
          name="Prize Amount (in $)"
          state={prize}
          setState={setPrize}
        />
        <TextInput
          name="Password"
          state={password}
          setState={setPassword}
          type="password"
        />
      </Group>
      <br />
      <MapInput name="Location" state={location} setState={setLocation} />
      <br />
      <br />
      <br />
      <Submit>Submit</Submit>
    </Container>
  )
}