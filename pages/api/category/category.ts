import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils";
import ApiSubject from "../ApiSubject";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = req.query;

  // fetch products
  const checkOrder =
    params[ApiSubject.orderBy] && params[ApiSubject.order]
      ? `| order(${params[ApiSubject.orderBy]} ${params[ApiSubject.order]})`
      : "";
  const checkCount =
    params[ApiSubject.productCountStart] || params[ApiSubject.productCountEnd]
      ? `[${
          params[ApiSubject.productCountStart]
            ? params[ApiSubject.productCountStart]
            : ""
        }${
          params[ApiSubject.productCountEnd]
            ? `...` + params[ApiSubject.productCountEnd]
            : ""
        }]`
      : "";

  const query = `*[_type == 'product'] ${checkOrder} ${checkCount}`;
  const products = await client.fetch(query);

  res.status(200).json(query);
}
