import { useEffect, useState } from 'react';
import { FetchData } from '../../pages/api';
import { PromoBanner, StandardBanner } from '../index';

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
				bannerType,
				bgColor,
				textColor,
				textColor2,
				"btnType": *[_type == "button" && ^.btnType._ref == _id][0]
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

	return <>{bannerOutput}</>;
};

export default Banner;
