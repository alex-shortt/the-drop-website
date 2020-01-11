import React, { useState } from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"

import TextInput from "./components/TextInput"
import DateInput from "./components/DateInput"
import NumInput from "./components/NumInput"
import MapInput from "./components/MapInput"

const Title = styled.h1``

export default function Admin(props) {
  const [name, setName] = useState("")
  const [code, setCode] = useState("")
  const [prize, setPrize] = useState(1)
  const [startDate, setStartDate] = useState(new Date())
  const [notifyDate, setNotifyDate] = useState(new Date())
  const [location, setLocation] = useState({ lat: 34.421, lng: -119.847 })

  return (
    <>
      <Helmet title="Admin" />
      <Title>Admin</Title>
      <TextInput name="Name" state={name} setState={setName} />
      <TextInput name="Code" state={code} setState={setCode} />
      <NumInput name="Prize" state={prize} setState={setPrize} />
      <DateInput name="Start Date" state={startDate} setState={setStartDate} />
      <DateInput
        name="Notify Date"
        state={notifyDate}
        setState={setNotifyDate}
      />
      <MapInput name="Location" state={location} setState={setLocation} />
    </>
  )
}
