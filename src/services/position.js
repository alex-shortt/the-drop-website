import { useState, useEffect } from "react"

export const usePosition = () => {
  const [position, setPosition] = useState({})
  const [error, setError] = useState(null)

  const onChange = ({ coords }) => {
    console.log("getting location...")
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude
    })
  }
  const onError = err => {
    setError(err.message)
  }

  useEffect(() => {
    const geo = navigator.geolocation

    if (!geo) {
      setError("Geolocation is not supported")
      return
    }
    const watcher = geo.watchPosition(onChange, onError, {
      enableHighAccuracy: true
    })

    // eslint-disable-next-line consistent-return
    // return () => geo.clearWatch(watcher)
  }, [])
  return { ...position, error }
}
