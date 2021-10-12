// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from "../../../firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

export default async function handler(req, res) {
  console.log(req.query);
  const { id, comment } = req.query;
  if (!id) {
    return res.status(404).end();
  }

  const docRef = doc(db, "quotes", id);
  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    const previousComments = snapshot.data().comments || [];
    await updateDoc(docRef, {
      comments: [comment, ...previousComments],
    });
    console.log("Document updated with ID: ", id);
    return res.status(200).end();
  } else {
    try {
      await setDoc(doc(db, "quotes", id), {
        id,
        charlieUtterance: 0,
        comments: [comment],
      });
      console.log("Document written with ID: ", id);
      return res.status(200).end();
    } catch (e) {
      console.error("Error adding document: ", e);
      res.status(400).end();
    }
  }
}
