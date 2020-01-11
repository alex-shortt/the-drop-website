import React from "react"
import styled from "styled-components"

export default function ErrorDrop(props) {
  const { error } = props
  return <>Error: {error}</>
}
