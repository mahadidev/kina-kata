import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Offer1 from '../../assets/image/offer-1.webp';
import Offer2 from '../../assets/image/offer-2.webp';
import Offer3 from '../../assets/image/offer-3.webp';
import Offer4 from '../../assets/image/offer-4.webp';
import { FetchData } from '../../pages/api';
import { ImageUrl } from '../../utils';
import { Button, Icons } from '../index';

const PromoCard = ({ name }: { name: string }) => {
	const [swiper, setSwiper] = useState(null);
	const slideRef = useRef(null);
	const sliderData = [Offer1, Offer2, Offer3, Offer4];

	const [data, setData] = useState(null);
	const getData = (data: any) => {
		setData(data);
		console.log([...data.image, ...data.card]);
	};

	useEffect(() => {
		FetchData({
			query: `*[_type == "cardBanner" && name == "homePromoBanner"][0]{
        name,
        type,
        image,
        "card": *[_type == "card" && _id == ^.card[0]._ref]{
          name,
          desc,
          bgColor,
          titleColor,
          whiteColor,
          btnLabel,
          btnLink,
          "btnType": *[_type == "button" && _id == ^.btnType._ref][0]
        },
        "btnType": *[_type == "button" && _id == ^.btnType._ref][0]
      }`,
			callBack: getData,
		});
	}, []);

	return (
		<div className="px-4 py-8 overflow-hidden">
			<div className="relative flex items-center justify-center">
				<div className="w-full top-0 left-0 right-0 absolute flex justify-between items-center h-full m-auto">
					<Button
						type={data?.btnType}
						className={'relative z-10 ml-[-12px]'}
						onClick={() => {
							swiper?.slidePrev();
						}}
					>
						{Icons.arrowShortLeftIcon}
					</Button>
					<Button
						type={data?.btnType}
						className={'relative z-10 mr-[-12px]'}
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
						[...data.image, ...data.card]?.map((item, i) => (
							<SwiperSlide key={i}>
								{item._type === 'image' ? (
									<div
										className="rounded-md bg-no-repeat bg-cover cursor-grabbing"
										ref={slideRef}
									>
										<img
											className="w-[100%]"
											src={ImageUrl(item)}
											alt={'Delivery Image'}
										/>
									</div>
								) : (
									<div
										className={`w-full ${
											item.bgColor ? item.bgColor : 'bg-primary-dark'
										} ${
											item.textColor ? item.textColor : 'text-white'
										} p-4 rounded-lg flex justify-center flex-col`}
										style={{
											minHeight: `${slideRef?.current?.offsetHeight}px`,
										}}
									>
										<h1 className="text-xl">{item.name}</h1>
										<p className="text-sm mt-1">{item.desc}</p>
										<Button
											type={item.btnType}
											className="w-[max-content] mt-1"
										>
											{item.btnLabel}
										</Button>
									</div>
								)}
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	);
};

export default PromoCard;
