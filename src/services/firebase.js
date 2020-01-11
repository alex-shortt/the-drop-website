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
