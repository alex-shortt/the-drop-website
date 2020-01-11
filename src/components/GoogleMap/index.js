import React from "react"
import GoogleMapReact from "google-map-react"
import styled from "styled-components/macro"

const API_KEY = "AIzaSyCjo88UEPDl7uwUV_X-x2nD3mlF0HlXrHU"

const AnyReactComponent = ({ text }) => <div>{text}</div>

const Container = styled.div`
  height: 100%;
  width: 100%;
`

export default function GoogleMap(props) {
  const { center = { lat: 59.95, lng: 30.33 }, zoom = 11, children } = props

  if (!center.lat || !center.lng) {
    console.error("You must pass in lng and lat for center")
    return <></>
  }

  return (
    // Important! Always set the container height explicitly
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        {children}
      </GoogleMapReact>
    </Container>
  )
}
