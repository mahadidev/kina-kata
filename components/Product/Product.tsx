import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import { cartProductAdd, cartProductRemove } from '../../redux/CartSlice';
import { ImageUrl } from '../../utils/';
import { Button, Icons } from '../index';

const Product = ({
	product,
	width,
	isMinimal = true,
}: {
	product: {
		_id: any;
		name: string;
		image: string;
		slug: string;
		qty: number;
		rating: number;
		price: number;
		detail: string;
		sold?: number;
	};
	isMinimal?: boolean;
	width?: any;
}) => {
	const [isCart, setIsCart] = useState(null);
	const [isWishlist, setIsWishlist] = useState(null);
	const [imageWidth, setImageWidth] = useState(null);
	const [showOptions, setShowOptions] = useState(false);
	const imgRef = useRef(null);

	const textShorter = (name: string, maxLength: number) => {
		return name && name.length > maxLength
			? name.slice(0, maxLength).split(' ').slice(0, -1).join(' ')
			: name;
	};
	const dispatch = useDispatch();

	const addCartHandle = () => {
		setIsCart((result: boolean) => !result);
		dispatch(cartProductAdd(product));
	};
	const addWishlistHandle = () => {
		setIsWishlist((result: boolean) => !result);
		dispatch(cartProductRemove(product));
	};

	useEffect(() => {
		setImageWidth(imgRef?.current?.offsetWidth);
	}, []);

	return (
		<>
			{product && (
				<>
					<div>
						<div className="W-full group relative">
							<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
								<img
									src={ImageUrl(product?.image[0]).url()}
									alt={'Product Image'}
									ref={imgRef}
									className="h-full w-full object-cover object-center lg:h-full lg:w-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700">
										<Link href={`/product/${product?.name}`}>
											<a>
												<span
													aria-hidden="true"
													className="absolute inset-0"
												></span>
												{product?.name}
											</a>
										</Link>
									</h3>
									<div className="w-[100%] flex items-center">
										<Rating
											className="text-sm"
											initialValue={
												product?.rating
													? Number(
															(Math.round(product?.rating * 2) / 2).toFixed(1)
													  )
													: 0
											}
											ratingValue={0}
											readonly
											size={16}
										/>
										<span className="pl-1 text-sm">({product?.sold})</span>
									</div>
								</div>
								<p className="text-sm font-medium text-gray-900">
									${product?.price}
								</p>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Product;
