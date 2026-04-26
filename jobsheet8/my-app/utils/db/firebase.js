import { getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

const requiredKeys = [
  'apiKey',
  'authDomain',
  'projectId',
  'storageBucket',
  'messagingSenderId',
  'appId'
]

const hasAllFirebaseConfig = requiredKeys.every((key) => {
  const value = firebaseConfig[key]
  return typeof value === 'string' && value.trim().length > 0
})

let firestore = null

if (hasAllFirebaseConfig) {
  const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig)
  firestore = getFirestore(app)
}

export { firestore, hasAllFirebaseConfig }
