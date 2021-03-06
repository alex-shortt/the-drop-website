import React, { useState, useCallback, useEffect, useRef } from "react"
import styled from "styled-components/macro"

import { addUser } from "services/backend"
import { storeVenmo } from "services/localStorage"

import { ThreeWrapper } from "./components/threeWrapper"
import TextInput from "./components/TextInput"

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #0d1526;
  color: white;
  box-sizing: border-box;
  padding-top: 40px;

  & > canvas {
    position: absolute;
    top: 0;
  }
`
const Submit = styled.button`
  border: 1px solid black;
  padding: 10px 10px;
  margin: 40px auto;
  display: block;
  cursor: pointer;
  font-size: 1.4rem;

  &:hover,
  &:active {
    background: black;
    color: white;
  }
`

const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 3.5rem;
`
const ErrorText = styled.p`
  color: red;
  text-align: center;
`

const SuccessText = styled.p`
  color: green;
  text-align: center;
`

const Content = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Subtitle = styled.p`
  margin: 20px 0 10px;
  text-align: center;
  font-size: 17px;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default function Landing(props) {
  const [error, setError] = useState()
  const [success, setSuccess] = useState()
  const [phone, setPhone] = useState("")
  const [venmo, setVenmo] = useState("")
  const [setup, setSetup] = useState(false)
  const containerRef = useRef()
  const threeWrapper = new ThreeWrapper()

  useEffect(() => {
    if (setup === false) {
      threeWrapper.sceneSetup(containerRef.current)
      threeWrapper.addCustomSceneObjects()
      threeWrapper.startAnimationLoop()
      setSetup(true)
    }
  }, [setup, threeWrapper])

  const onSubmit = useCallback(async () => {
    setError(null)
    const info = {
      phone,
      venmo
    }
    const response = await addUser(info)
    const result = await response.json()

    if (!response.ok) {
      setError(result.message)
    } else {
      setSuccess(true)
      storeVenmo(venmo)
      setPhone("")
      setVenmo("")
    }
  }, [phone, venmo])

  return (
    <>
      <Container>
        <Content>
          <Title>the drop</Title>
          <Subtitle>
            you want the drip?
            <br />
            get the drop.
          </Subtitle>
          <TextInput name="Phone" state={phone} setState={setPhone} />
          <TextInput name="Venmo" state={venmo} setState={setVenmo} />
          {error && <ErrorText>{error}</ErrorText>}
          {success && <SuccessText>Success</SuccessText>}
          <Submit onClick={onSubmit}>Submit</Submit>
        </Content>
      </Container>
      <Background ref={containerRef} />
    </>
  )
}
