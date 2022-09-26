import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Banner, BestSellingProduct, Products, PromoCard } from '../components';
import { type RootState } from '../redux';

const HomePage = () => {
	const count = useSelector((state: RootState) => state.basic.navigationHeight);

	const getPageData = (data: any) => {
		console.log(data);
	};

	return (
		<div style={{ marginTop: count + 'px' }}>
			<Banner name={'heroBanner'} />
			<PromoCard name="homePromoBanner" />
			<BestSellingProduct />
			<Banner name={'homePromoBanner'} />
			<Products count={5} />
		</div>
	);
};

export default HomePage;
