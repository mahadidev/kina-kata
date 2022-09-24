import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '../../utils';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// check product count
	const query = req.body.query;
	const data = await Client.fetch(query);
	res.status(200).json(data);
}
