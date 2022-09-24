import React from 'react';
import { useSelector } from 'react-redux';
import { Banner, BestSellingProduct, Products, PromoCard } from '../components';
import { type RootState } from '../redux/store';

const HomePage = () => {
	const count = useSelector((state: RootState) => state.basic.navigationHeight);

	return (
		<div style={{ marginTop: count + 'px' }}>
			<Banner name={'heroBanner'} />
			<PromoCard />
			<BestSellingProduct />
			<Banner name={'homePromoBanner'} />
			<Products count={5} />
		</div>
	);
};

export default HomePage;
