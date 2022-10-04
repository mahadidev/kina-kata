import React from 'react';

const getImageUrl = (image: any) => {
	const img = image.asset._ref;
	const newImage = img
		.replace(
			'image-',
			`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/`
		)
		.replace('-jpg', '.jpg');

	return newImage;
};

export default getImageUrl;
