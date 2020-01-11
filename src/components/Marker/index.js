import React from "react"
import styled from "styled-components/macro"
import { Marker as GoogleMarker, Circle } from "@react-google-maps/api"

export default function Marker(props) {
  const { circle, ...restProps } = props

  return <GoogleMarker {...restProps} />
}
