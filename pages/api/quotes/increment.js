// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from "../../../firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

export default async function handler(req, res) {
  const id = req.query.id;
  if (!id) {
    return res.status(404).end();
  }

  const docRef = doc(db, "quotes", id);
  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    await updateDoc(docRef, {
      charlieUtterance: snapshot.data().charlieUtterance + 1,
    });
    console.log("Document updated with ID: ", id);
    return res.status(200).end();
  } else {
    try {
      const newDocRef = await setDoc(doc(db, "quotes", id), {
        id,
        charlieUtterance: 1,
      });
      console.log("Document written with ID: ", id);
      return res.status(200).end();
    } catch (e) {
      console.error("Error adding document: ", e);
      res.status(400).end();
    }
  }
}
