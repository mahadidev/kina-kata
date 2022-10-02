import axios from 'axios';
import React from 'react';

const FetchData = ({
	sub = 'get',
	query,
	callBack,
}: {
	sub?: 'get' | 'addUser';
	query: any;
	callBack: CallableFunction;
}) => {
	// api url
	let url = process.env.NEXT_PUBLIC_BASE_URL + '/api/getData';
	axios
		.post(url, {
			sub: sub,
			query: query,
		})
		.then((response) => {
			if (callBack) {
				callBack(response.data);
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export default FetchData;
