import React, { useState, useCallback } from "react"
import styled from "styled-components"
import QrReaderBase from "react-qr-reader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { verifyCode } from "services/backend"

const Button = styled.button`
  position: absolute;
  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);
  background: #2c6674;
  border: none;
  font-size: 1.2rem;
  padding: 15px 25px;
  color: white;
  max-width: 200px;
  width: 100%;
  border-radius: 10px;
  z-index: 2;
  cursor: pointer;
  transition: filter 0.15s linear;
  outline: none;

  @media screen and (max-width: 700px) {
    font-size: 1.25rem;
    max-width: 175px;
  }

  &:hover,
  &:active {
    filter: brightness(1.1);
  }
`

const QrReader = styled(QrReaderBase)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 500px !important;
  max-width: 95%;
  z-index: 2;
`

const Background = styled.div`
  background: black;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const CameraIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`

export default function CodeInput(props) {
  const { venmo } = props

  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [qrOpen, setQrOpen] = useState(false)

  const handleError = err => {
    console.error(err)
  }

  const handleScan = useCallback(
    async data => {
      if (data) {
        setError(null)
        setQrOpen(false)
        console.log(venmo)
        const response = await verifyCode({ venmo, code: data })
        const result = await response.json()

        if (!response.ok) {
          setSuccess(true)
        } else {
          setError(result.message || "Unknown Error")
        }
      }
    },
    [venmo]
  )

  const toggleQrOpen = useCallback(() => {
    setQrOpen(!qrOpen)
  }, [qrOpen])

  return (
    <>
      {qrOpen && (
        <>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
          <Background />
        </>
      )}
      <Button onClick={toggleQrOpen}>
        {qrOpen ? (
          <FontAwesomeIcon icon="times" />
        ) : (
          <>
            <CameraIcon icon="camera" /> submit
          </>
        )}
      </Button>
    </>
  )
}
