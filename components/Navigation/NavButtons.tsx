import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setCartSidebar } from '../../redux';
import { Button, Icons } from '../index';

const NavButtons = () => {
	const { totalProduct } = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();
	const showCartSidebar = () => {
		dispatch(setCartSidebar(true));
	};

	return (
		<div
			className={`w-full flex ml-3 sm:ml-0 mt-3 sm:mt-0 justify-start sm:justify-end`}
		>
			<Button className="mr-2" type="primary" href={'/login'}>
				<span className="text-lg mr-2  flex items-center">
					{Icons.loginIcon}
				</span>
				<span className="block">Login</span>
			</Button>
			<Button
				className="block disabled:bg-primary-light"
				onClick={showCartSidebar}
				disabled={totalProduct > 0 ? false : true}
			>
				<div className="flex">
					<span className="text-lg mr-2 flex items-center">
						{Icons.cartIcon}
					</span>
					<span className="block">Cart</span>
				</div>

				{totalProduct > 0 && (
					<div className="bg-white text-black-light w-6 h-6 text-sm absolute -top-2 -right-2 flex items-center justify-center rounded-full shadow-2xl">
						{totalProduct}
					</div>
				)}
			</Button>
		</div>
	);
};

export default NavButtons;
