import React from "react"
import styled from "styled-components/macro"
import { Marker } from "@react-google-maps/api"

import Helmet from "components/Helmet"
import { useDrop } from "services/firebase"
import GoogleMap from "components/GoogleMap"
import { usePosition } from "services/position"
import dropImage from "assets/images/drop.png"
import markerImage from "assets/images/marker.png"
import { useVenmo } from "services/localStorage"

import GetVenmo from "./components/GetVenmo"
import NoDrop from "./components/NoDrop"
import CodeInput from "./components/CodeInput"

const Container = styled.div`
  height: 100%;
  width: 100%;
`

export default function Drop(props) {
  const {
    history,
    match: {
      params: { id }
    }
  } = props

  const { venmo, setVenmo } = useVenmo()
  const userPosition = usePosition()
  const { drop, error } = useDrop(id)

  if (!venmo) {
    return <GetVenmo setVenmo={setVenmo} />
  }

  if ((!drop && !error) || error || drop.status !== "active" || drop.winner) {
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
      <CodeInput venmo={venmo} history={history} />
    </Container>
  )
}

const convertCoords = pos => ({
  lat: pos.latitude,
  lng: pos.longitude
})
