import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { BestSellingProduct, Test } from '../../components';
import { type RootState } from '../../redux/store';

const ProductPage = () => {
	const router = useRouter();
	const { title } = router.query;
	const count = useSelector((state: RootState) => state.basic.navigationHeight);

	return (
		<div style={{ marginTop: count + 'px' }}>
			<Test title={title} />
			<BestSellingProduct />
		</div>
	);
};

export default ProductPage;
