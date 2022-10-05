import React from 'react';
import { useSelector } from 'react-redux';
import { Checkout } from '../../components';
import { type RootState } from '../../redux';

const CheckOutPage = () => {
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);

	return (
		<div
			className="bg-white"
			style={{
				marginTop: navigationHeight + 'px',
			}}
		>
			<Checkout isVisible={true} />
		</div>
	);
};

export default CheckOutPage;
