import React, { useState, useEffect } from "react"
import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/functions"

const config = {
  apiKey: "AIzaSyBWnvJdxOYYnTcWotE0DhjyDG2HAUaZFik",
  authDomain: "the-drop-4bfee.firebaseapp.com",
  databaseURL: "https://the-drop-4bfee.firebaseio.com",
  projectId: "the-drop-4bfee"
}

firebase.initializeApp(config)

const db = firebase.firestore()

export async function getDrop(id) {
  const doc = await db
    .collection("drops")
    .doc(id)
    .get()

  if (!doc.exists) {
    return null
  }

  return doc.data()
}

export const useDrop = id => {
  const [drop, setDrop] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getInfo = async () => {
      const result = await getDrop(id)
      if (!result) {
        setError("Drop Not Found")
      } else {
        setDrop(result)
        db.collection("drops")
          .doc(id)
          .onSnapshot(doc => setDrop(doc.data()))
      }
    }

    if (!drop && !error) {
      getInfo()
    }
  }, [drop, error, id])

  return { drop, error }
}
