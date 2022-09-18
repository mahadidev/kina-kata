import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "../../../utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const products = await Client.fetch(
    "*[_type == 'product'] | order(sold desc) [0...2]"
  );

  res.status(200).json(products);
}
