import React, { useState, useEffect } from "react"
import { GoogleMap as GoogleMapReact, LoadScript } from "@react-google-maps/api"
import styled from "styled-components/macro"

import mapStyle from "./assets/mapStyle"

const API_KEY = "AIzaSyCjo88UEPDl7uwUV_X-x2nD3mlF0HlXrHU"

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    height: 100%;
    position: absolute;
    width: 100%;

    & > * {
      height: 100%;
    }
  }
`

export default function GoogleMap(props) {
  const { center = { lat: 59.95, lng: 30.33 }, zoom = 15, children } = props

  const [map, setMap] = useState(null)

  if (!center.lat || !center.lng) {
    console.error("You must pass in lng and lat for center")
    return <></>
  }

  const options = {
    streetViewControl: false,
    mapTypeControl: false,
    styles: mapStyle
  }

  return (
    // Important! Always set the container height explicitly
    <Container>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMapReact
          center={center}
          zoom={zoom}
          options={options}
          onLoad={locMap => setMap(locMap)}
        >
          {children}
        </GoogleMapReact>
      </LoadScript>
    </Container>
  )
}
