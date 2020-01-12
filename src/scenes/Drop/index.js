import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"
import { Marker } from "@react-google-maps/api"

import Helmet from "components/Helmet"
import { getDrop } from "services/firebase"
import GoogleMap from "components/GoogleMap"
import { usePosition } from "services/position"
import dropImage from "assets/images/drop.png"

import LoadingDrop from "./components/LoadingDrop"
import ErrorDrop from "./components/ErrorDrop"
import CodeInput from "./components/CodeInput"

const Container = styled.div`
  height: 100%;
  width: 100%;
`

export default function Drop(props) {
  const {
    match: {
      params: { id, venmo }
    }
  } = props

  const [error, setError] = useState(false)
  const [drop, setDrop] = useState(null)
  const [code, setCode] = useState("")
  const userPosition = usePosition()

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

  if (!drop && !error) {
    return <LoadingDrop />
  }

  if (error) {
    return <ErrorDrop error={error} />
  }

  const center = convertCoords(drop.location)
  const userPos =
    userPosition && userPosition.latitude ? convertCoords(userPosition) : null

  return (
    <Container>
      <Helmet title="Drop" />
      <GoogleMap center={center}>
        <Marker icon={dropImage} position={center} />
        {userPos && <Marker position={userPos} />}
      </GoogleMap>
      <CodeInput state={code} setState={setCode} />
    </Container>
  )
}

const convertCoords = pos => ({
  lat: pos.latitude,
  lng: pos.longitude
})
