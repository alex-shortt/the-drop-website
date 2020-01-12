export async function addDrop(data) {
  return fetchWithBody("addDrop", {
    body: data
  })
}

export async function verifyCode(data) {
  return fetchWithBody("verifyCode", {
    body: data
  })
}

async function fetchWithBody(endpoint, params) {
  const { body, ...restParams } = params

  const payloadBody = typeof body === "string" ? body : JSON.stringify(body)

  return fetch(
    `https://us-central1-the-drop-264819.cloudfunctions.net/${endpoint}`,
    {
      method: "POST",
      body: payloadBody,
      ...restParams
    }
  )
}
