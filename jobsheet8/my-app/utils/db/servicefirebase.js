import { collection, getDocs } from 'firebase/firestore'

import { firestore, hasAllFirebaseConfig } from './firebase'

export async function getProductsData(collectionName) {
  if (!hasAllFirebaseConfig || !firestore) {
    return []
  }

  const snapshot = await getDocs(collection(firestore, collectionName))

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
}
