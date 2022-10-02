import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '../../utils';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// check product count
	const sub = req.body.sub;
	const query = req.body.query;

	switch (sub) {
		case 'get':
			const data = await Client.fetch(query);
			res.status(200).json(data);
			break;
		case 'addUser':
			Client.createIfNotExists(query).then(() =>
				res.status(200).json('login Success')
			);
			break;
		default:
			break;
	}
}
