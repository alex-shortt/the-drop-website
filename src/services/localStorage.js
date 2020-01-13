import React, { useState } from "react"

export function useVenmo() {
  const [venmo, setVenmo] = useState(localStorage.venmo)

  return { venmo, setVenmo }
}

export function storeVenmo(venmo) {
  localStorage.venmo = venmo
}
