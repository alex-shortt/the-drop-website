import React, { useState, useCallback } from "react"
import { GoogleMap as GoogleMapReact, LoadScript } from "@react-google-maps/api"
import styled from "styled-components/macro"

import Marker from "components/Marker"

const API_KEY = "AIzaSyCjo88UEPDl7uwUV_X-x2nD3mlF0HlXrHU"

const Container = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;

  & > * {
    height: 100%;
    position: absolute;
    width: 100%;

    & > * {
      height: 100%;
    }
  }
`

const Title = styled.h3`
  text-align: center;
`

let initCenter

export default function MapInput(props) {
  const { zoom = 15, children, name, state, setState } = props

  const [map, setMap] = useState(null)

  const handleDrag = useCallback(() => {
    if (!map) {
      return
    }

    const loc = map.center

    setState({
      lng: loc.lng(),
      lat: loc.lat()
    })
  }, [map, setState])

  if (!state.lat || !state.lng) {
    console.error("You must pass in lng and lat for center")
    return <></>
  }

  if (!initCenter) {
    initCenter = state
  }

  const options = {
    streetViewControl: false
  }

  return (
    <>
      <Title>{name}</Title>
      <Container>
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMapReact
            center={initCenter}
            zoom={zoom}
            options={options}
            onLoad={locMap => setMap(locMap)}
            onDrag={handleDrag}
          >
            <Marker position={state} />
          </GoogleMapReact>
        </LoadScript>
      </Container>
    </>
  )
}
