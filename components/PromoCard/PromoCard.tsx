import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FetchData } from '../../pages/api';
import { ImageUrl } from '../../utils';
import { Button, Icons } from '../index';

const PromoCard = ({ name }: { name: string }) => {
	const [swiper, setSwiper] = useState(null);
	const slideRef = useRef(null);

	const [data, setData] = useState(null);
	const getData = (data: any) => {
		setData(data);
	};

	useEffect(() => {
		FetchData({
			query: `*[_type == "cardBanner" && name == "homePromoBanner"][0]{
        name,
        type,
        image,
        "card": *[_type == "card" && _id in ^.card[]._ref]{
			 title,
          name,
          desc,
          bgColor,
          titleColor,
          descColor,
          btnLabel,
          btnLink,
          "btnType": *[_type == "button" && _id == ^.btnType._ref][0]
        },
        "btnType": *[_type == "button" && _id == ^.btnType._ref][0]
      }`,
			callBack: getData,
		});
	}, []);

	const cardBg = [
		'bg-primary-dark',
		'bg-gradient-to-r from-blue-light to-blue',
		'bg-gradient-to-r from-orange-light to-orange',
		'bg-gradient-to-r from-pink-light to-pink',
		'bg-gradient-to-r from-green-light to-green',
	];

	return (
		<div className="px-4 py-8 overflow-hidden">
			<div className="relative flex items-center justify-center">
				<div className="w-full top-0 left-0 right-0 absolute flex justify-between items-center h-full m-auto">
					<Button
						className={
							'bg-white text-black-light rounded-full py-2 px-2 shadow-xl relative z-10 ml-[-12px]'
						}
						onClick={() => {
							swiper?.slidePrev();
						}}
					>
						{Icons.arrowShortLeftIcon}
					</Button>
					<Button
						className={
							'bg-white text-black-light rounded-full py-2 px-2 shadow-xl relative z-10 mr-[-12px]'
						}
						onClick={() => {
							swiper?.slideNext();
						}}
					>
						{Icons.arrowShortRightIcon}
					</Button>
				</div>
				<Swiper
					spaceBetween={10}
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
						1280: {
							slidesPerView: 4,
						},
					}}
					onInit={(swiperElm: any) => {
						setSwiper(swiperElm);
					}}
				>
					{data &&
						[...data.image, ...data.card]?.map((item, i) => {
							return (
								<SwiperSlide key={i}>
									{item._type === 'image' ? (
										<div
											className="rounded-md bg-no-repeat bg-cover cursor-grabbing"
											ref={slideRef}
										>
											<img
												className="w-[100%]"
												src={ImageUrl(item)?.url()}
												alt={'Delivery Image'}
											/>
										</div>
									) : (
										<>
											<div
												className={`w-full ${
													cardBg[i < cardBg.length ? i : 0]
												} p-4 rounded-lg flex justify-center flex-col cursor-grabbing`}
												style={{
													minHeight: `${slideRef?.current?.offsetHeight}px`,
												}}
											>
												<h1 className={`text-white text-2xl font-semibold`}>
													{item.title}
												</h1>
												<p className={`text-white mt-1`}>{item.desc}</p>
												<Button
													href={item.btnLink}
													className="bg-white text-blue w-[max-content] rounded-full py-1 px-4 mt-2"
												>
													{item.btnLabel}
												</Button>
											</div>
										</>
									)}
								</SwiperSlide>
							);
						})}
				</Swiper>
			</div>
		</div>
	);
};

export default PromoCard;
