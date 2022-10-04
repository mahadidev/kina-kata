import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import aboutAnimation from '../../assets/lotties/about_animation.json';
import { type RootState } from '../../redux';
import getStripe from '../../utils/getStripe';
import { Button } from '../index';

const Checkout = ({ isVisible }: { isVisible: any }) => {
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);
	const breadcrumbHeight = useSelector(
		(state: RootState) => state.basic.breadcrumbHeight
	);
	const footerHeight = useSelector(
		(state: RootState) => state.basic.footerHeight
	);
	const authLogin = useSelector((state: RootState) => state.auth.user);
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

	const handleCheckout = async () => {
		const stripe = await getStripe();

		const response = await fetch('/api/stripe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cartItems),
		});

		if (response.status === 500) return;

		const data = await response.json();

		stripe.redirectToCheckout({ sessionId: data.id });
	};

	return (
		<>
			<div
				className="container m-auto py-8 flex flex-col justify-center items-center"
				style={{
					minHeight: `calc(100vh - ${
						navigationHeight + breadcrumbHeight + footerHeight
					}px)`,
				}}
			>
				{cartItems && (
					<div className="w-full max-w-[600px] m-auto">
						<div className="w-full bg-white drop-shadow-2xl rounded-md py-3 px-3">
							<div className="mb-4">
								<h1 className="text-black-dark underline">Product List</h1>
								<div className="border rounded-md p-2 mt-2">
									<div className="grid grid-cols-5 py-2">
										<div className="col-span-3 text-black-light font-semibold">
											Product
										</div>
										<div className=" text-black-light font-semibold">Qty</div>
										<div className=" text-black-light font-semibold">Price</div>
									</div>
									{cartItems?.map((item: any, i: number) => (
										<div className="grid grid-cols-5 py-2" key={i}>
											<div className="col-span-3 text-black-light">
												{item.product.name}
											</div>
											<div className="text-black-light">{item.qty}</div>
											<div className="text-black-dark">{item.price}</div>
										</div>
									))}
								</div>
							</div>
							<form>
								<h2 className="text-md text-black-light underline mb-3">
									Billing Info
								</h2>
								<input
									className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary text-black-dark"
									name="name"
									placeholder="Name"
									defaultValue={authLogin && authLogin.name}
									required
								/>
								<input
									className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary text-black-dark"
									name="mail"
									placeholder="Email adress"
									defaultValue={authLogin && authLogin.email}
									required
								/>
								<input
									className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary text-black-dark"
									name="address"
									placeholder="shipping address"
									required
								/>

								<select className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary form-select text-black-dark">
									<option className="p-2" value="stripe">
										Stripe
									</option>
								</select>
								<Button
									className="w-100"
									onClick={handleCheckout}
									type="button"
								>
									Purchase
								</Button>
							</form>
						</div>
					</div>
				)}
				{!cartItems && (
					<>
						<h1 className="text-2xl text-black-light">Cart is empty.</h1>
						<Button className="mt-2" href="/shop">
							go to shopping.
						</Button>
					</>
				)}
			</div>
		</>
	);
};

export default Checkout;
