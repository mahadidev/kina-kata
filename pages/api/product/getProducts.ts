import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "../../../utils";
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

  // check product count
  let checkCount: any;
  checkCount = "";

  if (params[ApiSubject.countStart] || params[ApiSubject.countEnd]) {
    if (params[ApiSubject.countStart] && !params[ApiSubject.countEnd]) {
      checkCount = `[${params[ApiSubject.countStart]}]`;
    } else if (params[ApiSubject.countStart] && params[ApiSubject.countEnd]) {
      checkCount = `[${params[ApiSubject.countStart]}...${
        params[ApiSubject.countEnd]
      }]`;
    } else if (!params[ApiSubject.countStart] && params[ApiSubject.countEnd]) {
      checkCount = `[0...${params[ApiSubject.countEnd]}]`;
    }
  }
  // check custom query
  const customQuery = params.customQuery ? `&& ${params.customQuery}` : "";

  const query = `*[_type == '${
    params[ApiSubject.table]
  }' ${customQuery}] ${checkOrder} ${checkCount}`;
  const products = await Client.fetch(query);

  res.status(200).json(products);
}
