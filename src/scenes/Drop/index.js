import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"

export default function Drop(props) {
  const {
    match: {
      params: { id, venmo }
    }
  } = props

  console.log(id)
  console.log(venmo)

  return (
    <>
      <Helmet title="Drop" />
      drop
    </>
  )
}
