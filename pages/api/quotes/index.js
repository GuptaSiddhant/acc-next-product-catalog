// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  const data = await fetchData();
  res.status(200).json(data);
}

function mergeData(quotes, counts) {
  return quotes.map((quote) => {
    const matchedDocument = counts.find((count) => quote.id === count.id);
    return {
      ...quote,
      charlieUtterance: matchedDocument?.charlieUtterance || 0,
      comments: matchedDocument?.comments || [],
    };
  });
}

export async function fetchData() {
  const quotesResponse = await fetch(
    "https://api.chucknorris.io/jokes/search?query=hand"
  );
  const quotes = (await quotesResponse.json()).result;

  const snapshot = await getDocs(collection(db, "quotes"));
  const counts = [];
  snapshot.forEach((doc) => counts.push(doc.data()));

  return mergeData(quotes, counts);
}
