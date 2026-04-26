import { collection, getDocs } from 'firebase/firestore'

import { firestore, hasAllFirebaseConfig } from './firebase'

export async function getProductsData(collectionName) {
  if (!hasAllFirebaseConfig || !firestore) {
    return []
  }

  const querySnapshot = await getDocs(collection(firestore, collectionName))

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
}