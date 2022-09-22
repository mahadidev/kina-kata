import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useDispatch } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import { FetchData } from '../pages/api';
import { cartProductAdd, cartProductRemove } from '../redux/CartSlice';
import { ImageUrl } from '../utils';
import { Button, Qty, Slider } from './index';

const Test = ({ title }) => {
	const [products, setProducts] = useState(null);
	const [qtyCount, setQtyCount] = useState(1);
	const [price, setPrice] = useState(0);
	const [imagesArray, setImageArray] = useState([]);

	const onChangeQty = (count: number) => {
		setQtyCount(count);
		setPrice(Number(products.price * count));
	};

	const getData = (data: any) => {
		setProducts(data[0]);
		setPrice(data[0].price);

		setImageArray([]);
		data[0].image?.map((items: any, i: number) => {
			setImageArray((oldArray) => [
				...oldArray,
				{ original: ImageUrl(items).url(), thumbnail: ImageUrl(items).url() },
			]);
		});
	};

	useEffect(() => {
		// fetch data
		if (title) {
			FetchData({
				name: 'product',
				countStart: 0,
				countEnd: 12,
				order: 'desc',
				orderBy: 'sold',
				customQuery: `name match '${title}'`,
				callBack: getData,
			});
		}
	}, [title]);

	const dispatch = useDispatch();
	const addCart = () => {
		dispatch(cartProductAdd(products));
	};

	return (
		<>
			{products && (
				<div className="container grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-10 py-4 sm:py-10 min-h-full">
					<div className="md:col-span-2 xl:col-span-2">
						<ImageGallery
							items={imagesArray}
							showNav={false}
							showFullscreenButton={false}
							showPlayButton={false}
						/>
					</div>
					<div className="justify-center md:col-span-2 xl:col-span-4 grid xl:grid-cols-2 gap-10">
						<div className="order-2 xl:order-1">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-primary text-md">Electric Gadget</p>
									<h1 className="text-xl text-black">{products?.name}</h1>
								</div>
								<p className="text-primary text-xl">${products?.price}</p>
							</div>
							<Rating
								className="text-sm mt-2"
								initialValue={products?.rating}
								ratingValue={0}
								readonly
								size={28}
							/>
							<hr className="my-4" />
							<p className="mt-2">{products?.detail}</p>
							<hr className="my-4" />
							<h2 className="text-black mb-2">Qty:</h2>
							<Qty
								className="shadow-sm bg-light"
								onChange={onChangeQty}
								maxQty={products?.qty}
								minQty={0}
							/>
							<Button className="mt-4" type="primary" onClick={addCart}>
								Add to Cart
							</Button>
						</div>

						<div className="order-1 xl:order-2 bg-light rounded p-4 h-full mt-2 xl:mt-0">
							<h2 className="text-md text-center mb-2">Calculator</h2>
							<hr className="py-2 mt-4" />
							<div className="flex justify-between mb-2">
								<span>Qty: </span> <span>{qtyCount}</span>
							</div>
							<div className="flex justify-between mb-2">
								<span>Price: </span> <span>${products?.price}</span>
							</div>
							<div className="flex justify-between">
								<span>Discount: </span> <span>0</span>
							</div>
							<hr className="py-2 mt-4" />
							<div className="flex justify-between">
								<span>Total Price: </span> <span>${price}</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Test;
