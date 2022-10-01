import React, { useEffect } from 'react';
import TrackVisibility from 'react-on-screen';
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
			<TrackVisibility>
				{({ isVisible }) =>
					isVisible ? (
						<Banner isVisible={true} name={'heroBanner'} />
					) : (
						<Banner isVisible={false} name={'heroBanner'} />
					)
				}
			</TrackVisibility>
			<TrackVisibility>
				{({ isVisible }) =>
					isVisible ? (
						<PromoCard isVisible={true} name="homePromoBanner" />
					) : (
						<PromoCard isVisible={false} name="homePromoBanner" />
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
			<TrackVisibility>
				{({ isVisible }) =>
					isVisible ? (
						<Banner name={'homePromoBanner'} isVisible={true} />
					) : (
						<Banner name={'homePromoBanner'} isVisible={false} />
					)
				}
			</TrackVisibility>
			<TrackVisibility>
				{({ isVisible }) =>
					isVisible ? (
						<Products count={5} loaderCount={1} isVisible={true} />
					) : (
						<Products count={5} loaderCount={1} isVisible={false} />
					)
				}
			</TrackVisibility>
		</div>
	);
};

export default HomePage;
