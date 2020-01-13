import React from "react"
import styled from "styled-components/macro"
import DatePickerBase from "react-datepicker"

import { Container, Title } from "./commonComponents"

const DatePicker = styled(DatePickerBase)`
  margin: 10px 0;
`

export default function DateInput(props) {
  const { name, state, setState } = props

  return (
    <Container>
      <Title>{name}</Title>
      <DatePicker
        selected={state}
        onChange={date => setState(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </Container>
  )
}
