// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, getDocs, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  await firestoreAddCollectionDoc("quotes", {
    id: "yYAmRPoeSYKP2xu8jfx_BQ",
    charlieUtterance: 0,
  });
  const data = await firestoreReadCollectionDocs("quotes");
  res.status(200).json(data);
}

async function firestoreReadCollectionDocs(collectionName) {
  const { db } = await import("../../firebase");
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data = [];
  querySnapshot.forEach((doc) => data.push(doc.data()));
  return data;
}

async function firestoreAddCollectionDoc(collectionName, docData) {
  const { db } = await import("../../firebase");
  try {
    const docRef = await addDoc(collection(db, collectionName), docData);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}
