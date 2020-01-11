import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import { getDrop } from "services/firebase"

export default function Drop(props) {
  const {
    match: {
      params: { id, venmo }
    }
  } = props

  const [error, setError] = useState(false)
  const [drop, setDrop] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDrop(id)
      if (!result) {
        setError("Drop Not Found")
      } else {
        setDrop(result)
      }
    }

    if (!drop && !error) {
      fetchData()
    }
  }, [drop, error, id])

  console.log(id)
  console.log(venmo)

  if (!drop && !error) {
    return (
      <>
        <Helmet title="Drop" />
        Loading...
      </>
    )
  }

  if (error) {
    return (
      <>
        <Helmet title="Drop" />
        Error: {error}
      </>
    )
  }

  return (
    <>
      <Helmet title="Drop" />
      drop
    </>
  )
}
