import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '../index';
import { FetchData } from './../../pages/api';
import Loader from './Loader';

const BestSellingProduct = ({ isVisible }, { isVisible: any }) => {
	const [products, setProducts] = useState(null);
	const getData = (data: any) => {
		setProducts(data);
	};

	useEffect(() => {
		if (isVisible) {
			// fetch data
			FetchData({
				query: `*[_type == "product"] | order(sold desc) [0...7]`,
				callBack: getData,
			});
		}
	}, [isVisible]);

	return (
		<div className="py-8">
			<div className="container m-auto">
				{products && (
					<>
						<h1 className="text-3xl text-black font-semibold">
							Best Selling Product.
						</h1>
						<Swiper
							breakpoints={{
								350: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 4,
								},
								1280: {
									slidesPerView: 4,
								},
								1536: {
									slidesPerView: 5,
								},
							}}
							spaceBetween={25}
							className={'py-4'}
						>
							{products?.map((product: any, i: number) => (
								<SwiperSlide key={i}>
									<Product width="w-[100%]" product={product} />
								</SwiperSlide>
							))}
						</Swiper>
					</>
				)}

				{!products && <Loader />}
			</div>
		</div>
	);
};

export default BestSellingProduct;
