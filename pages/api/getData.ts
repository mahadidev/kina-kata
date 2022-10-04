import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '../../utils';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// check product count
	const sub = req.body.sub;
	const query = req.body.query;
	const source = req.body.source;

	switch (sub) {
		case 'get':
			const data = await Client.fetch(query);
			res.status(200).json(data);
			break;
		case 'addUser':
			if (source === 'google') {
				Client.createIfNotExists(query)
					.then(() => res.status(200).json('login Success'))
					.catch((error) => {
						console.log(error);
					});
			} else if (source === 'custom') {
				Client.create(query)
					.then(() => res.status(200).json(query))
					.catch((error) => {
						console.log(error);
					});
			}
			break;
		default:
			break;
	}
}
