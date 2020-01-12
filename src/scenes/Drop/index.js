import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"
import { Marker } from "@react-google-maps/api"

import Helmet from "components/Helmet"
import { getDrop } from "services/firebase"
import GoogleMap from "components/GoogleMap"
import { usePosition } from "services/position"
import dropImage from "assets/images/drop.png"
import markerImage from "assets/images/marker.png"

import NoDrop from "./components/NoDrop"
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

  if ((!drop && !error) || error || drop.status !== "active") {
    return <NoDrop drop={drop} error={error} />
  }

  const center = convertCoords(drop.location)
  const userPos =
    userPosition && userPosition.latitude ? convertCoords(userPosition) : null

  return (
    <Container>
      <Helmet title="Drop" />
      <GoogleMap center={center}>
        <Marker icon={dropImage} position={center} />
        {userPos && <Marker icon={markerImage} position={userPos} />}
      </GoogleMap>
      <CodeInput venmo={venmo} />
    </Container>
  )
}

const convertCoords = pos => ({
  lat: pos.latitude,
  lng: pos.longitude
})
