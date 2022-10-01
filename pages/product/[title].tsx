import { useRouter } from 'next/router';
import React from 'react';
import TrackVisibility from 'react-on-screen';
import { useSelector } from 'react-redux';
import { BestSellingProduct, ViewProduct } from '../../components';
import { type RootState } from '../../redux';

const ProductPage = () => {
	const router = useRouter();
	const { title } = router.query;
	const count = useSelector((state: RootState) => state.basic.navigationHeight);

	return (
		<div style={{ marginTop: count + 'px' }}>
			<TrackVisibility>
				{({ isVisible }) =>
					isVisible ? (
						<ViewProduct title={title} isVisible={true} />
					) : (
						<ViewProduct title={title} isVisible={false} />
					)
				}
			</TrackVisibility>
			<TrackVisibility>
				{({ isVisible }) =>
					isVisible ? (
						<BestSellingProduct isVisible={true} />
					) : (
						<BestSellingProduct isVisible={false} />
					)
				}
			</TrackVisibility>
		</div>
	);
};

export default ProductPage;
