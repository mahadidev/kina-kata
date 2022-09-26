import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, RootState, setCartSidebar } from '../../redux';
import { ImageUrl } from '../../utils';
import { Button, Icons } from '../index';

const products = [
	{
		id: 1,
		name: 'Throwback Hip Bag',
		href: '#',
		color: 'Salmon',
		price: '$90.00',
		quantity: 1,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
		imageAlt:
			'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
	},
	{
		id: 2,
		name: 'Medium Stuff Satchel',
		href: '#',
		color: 'Blue',
		price: '$32.00',
		quantity: 1,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
		imageAlt:
			'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
	},
	// More products...
];

const Cart = () => {
	const cartData = useSelector((state: RootState) => state.cart);
	const cartStatus = useSelector((state: RootState) => state.basic.cartSidebar);

	const dispatch = useDispatch();
	const sidebarController = (status: boolean = false) => {
		dispatch(setCartSidebar(status));
	};

	// controll cart items
	const cartController = (product: any) => {
		const item = {
			product: product.product,
			qty: 0,
			price: 0,
		};
		dispatch(removeCartItem(item));
	};

	return (
		<Transition.Root show={cartStatus} as={Fragment}>
			<Dialog as="div" className="relative z-40" onClose={sidebarController}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
										<div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
											<div className="flex items-start justify-between">
												<Dialog.Title className="text-lg font-medium text-black-light">
													Shopping cart
												</Dialog.Title>
												<div className="ml-3 flex h-7 items-center">
													<Button
														className="-m-2 p-2 bg-transparent text-black hover:text-black-dark"
														onClick={() => sidebarController(false)}
													>
														<span className="sr-only">Close panel</span>
														<span className="h-6 w-6">{Icons.closeIcon}</span>
													</Button>
												</div>
											</div>

											<div className="mt-8">
												<div className="flow-root">
													<ul
														role="list"
														className="-my-6 divide-y divide-gray-200"
													>
														{cartData?.cartItems?.map((item) => (
															<li key={item.product._id} className="flex py-6">
																<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
																	<img
																		src={ImageUrl(item.product.image[0]).url()}
																		alt={'product image'}
																		className="h-full w-full object-cover object-center"
																	/>
																</div>

																<div className="ml-4 flex flex-1 flex-col">
																	<div>
																		<div className="flex justify-between text-base font-medium text-black-light">
																			<h3>
																				<Link
																					href={`product/${item.product.name}`}
																				>
																					{item.product.name}
																				</Link>
																			</h3>
																			<p className="ml-4">{item.price}</p>
																		</div>
																		<p className="mt-1 text-sm text-black-light">
																			{item.product.categories.name}
																		</p>
																	</div>
																	<div className="flex flex-1 items-end justify-between text-sm">
																		<p className="text-black-light">
																			Qty {item.qty}
																		</p>

																		<div className="flex">
																			<Button
																				className="bg-transparent hover:bg-transparent text-primary hover:text-primary-light p-0"
																				onClick={() => {
																					cartController(item);
																				}}
																			>
																				Remove
																			</Button>
																		</div>
																	</div>
																</div>
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>

										<div className="border-t border-gray-200 py-6 px-4 sm:px-6">
											<div className="flex justify-between text-base font-medium text-black">
												<p>Subtotal</p>
												<p>${cartData?.totalPrice}</p>
											</div>
											<p className="mt-0.5 text-sm text-black-light">
												Shipping and taxes calculated at checkout.
											</p>
											<div className="mt-6">
												<Button
													href="/checkout"
													onClick={() => sidebarController(false)}
													className="w-full disabled:bg-primary-light "
													disabled={cartData?.totalPrice > 0 ? false : true}
												>
													Checkout
												</Button>
											</div>
											<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
												<p>
													or
													<Button
														href="/shop"
														className="bg-black-light hover:bg-black"
														onClick={() => sidebarController(false)}
													>
														Continue Shopping
														<span className="flex items-center ml-2">
															{Icons.arrowLongRightIcon}
														</span>
													</Button>
												</p>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Cart;
