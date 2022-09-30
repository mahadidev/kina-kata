import { useEffect, useState } from 'react';
import { FetchData } from '../../pages/api';
import { BannerLoader, PromoBanner, StandardBanner } from '../index';

const Banner = ({ name }: { name: string }) => {
	const [bannerData, setBannerData] = useState(null);
	const getBannerData = (data: any) => {
		setBannerData(data);
	};

	useEffect(() => {
		FetchData({
			query: `*[_type == "banner"]{
				name,
				image,
				title,
				desc,
				details,
				btnLabel,
				btnIcon,
				btnLink,
				bannerType
			 }`,
			callBack: getBannerData,
		});
	}, []);

	const bannerOutput = bannerData?.map((item: any, i: number) => {
		if (item.name === name) {
			switch (item.bannerType) {
				case 'standard':
					return <StandardBanner key={i} {...item} />;
				case 'promo':
					return <PromoBanner key={i} {...item} />;
			}
		}
	});

	return (
		<>
			{!bannerOutput && name === 'heroBanner' && (
				<BannerLoader type={'standard'} />
			)}
			{!bannerOutput && name === 'homePromoBanner' && (
				<BannerLoader type={'promo'} />
			)}
			{bannerOutput && bannerOutput}
		</>
	);
};

export default Banner;
