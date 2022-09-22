import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '../index';
import { FetchData } from './../../pages/api';

const BestSellingProduct = () => {
	const [products, setProducts] = useState(null);
	const getData = (data: any) => {
		setProducts(data);
	};

	useEffect(() => {
		// fetch data
		FetchData({
			name: 'product',
			countStart: 0,
			countEnd: 12,
			order: 'desc',
			orderBy: 'sold',
			callBack: getData,
		});
	}, []);

	return (
		<div className="py-8">
			<div className="container m-auto">
				<h1 className="text-3xl text-black">Best Selling Product.</h1>
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
							slidesPerView: 5,
						},
						1536: {
							slidesPerView: 6,
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
			</div>
		</div>
	);
};

export default BestSellingProduct;
