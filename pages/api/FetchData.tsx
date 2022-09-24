import axios from 'axios';
import React from 'react';

const FetchData = ({
	query,
	callBack,
}: {
	query: string;
	callBack: CallableFunction;
}) => {
	// api url
	let url = process.env.NEXT_PUBLIC_BASE_URL + '/api/getData';
	axios
		.post(url, {
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
