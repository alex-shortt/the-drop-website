import React, { useState, useCallback } from "react"
import styled from "styled-components"
import QrReaderBase from "react-qr-reader"

const Container = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 20px;
  display: flex;
`

const Input = styled.input`
  margin-right: 20px;
`

const Button = styled.button`
  border: 1px solid black;
  background: white;
`

const QrReader = styled(QrReaderBase)`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 50vh !important;
`

export default function CodeInput(props) {
  const { state, setState } = props

  const [qrOpen, setQrOpen] = useState(false)

  const handleError = err => {
    console.error(err)
  }

  const handleScan = data => {
    if (data) {
      setState(data)
      setQrOpen(false)
    }
  }

  const toggleQrOpen = useCallback(() => {
    setQrOpen(!qrOpen)
  }, [qrOpen])

  return (
    <>
      {qrOpen && (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      )}
      <Container>
        <Input value={state} onChange={e => setState(e.target.value)} />
        <Button onClick={toggleQrOpen}>
          {qrOpen ? "Close" : "Open"} Camera
        </Button>
      </Container>
    </>
  )
}
