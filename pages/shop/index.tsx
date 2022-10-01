import React from 'react';
import TrackVisibility from 'react-on-screen';
import { useSelector } from 'react-redux';
import { Products } from '../../components';
import { type RootState } from '../../redux';

const ShopPage = () => {
	const count = useSelector((state: RootState) => state.basic.navigationHeight);

	return (
		<div style={{ marginTop: count + 'px' }}>
			<TrackVisibility>
				{({ isVisible }) =>
					isVisible ? (
						<Products count={24} loaderCount={2} isVisible={true} />
					) : (
						<Products count={24} loaderCount={2} isVisible={false} />
					)
				}
			</TrackVisibility>
		</div>
	);
};

export default ShopPage;
