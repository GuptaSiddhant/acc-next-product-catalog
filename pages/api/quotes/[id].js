// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { fetchData } from ".";

export default async function handler(req, res) {
  const data = await fetchData();
  const quoteFilter = data.find((quote) => quote.id === req.query.id) || {};
  res.status(200).json(quoteFilter);
}
