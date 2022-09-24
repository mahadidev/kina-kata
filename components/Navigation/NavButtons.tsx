import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Button, Icons } from '../index';

const NavButtons = ({ className }: { className?: string }) => {
	const { totalProduct } = useSelector((state: RootState) => state.cart);
	return (
		<div
			className={`w-full flex ${
				className?.includes('justify') ? '' : 'justify-start'
			} ${className}`}
		>
			<Button className="mr-2" type="primary" href={'login'}>
				<span className="text-lg mr-2  flex items-center">
					{Icons.loginIcon}
				</span>
				<span className="block">Login</span>
			</Button>
			<Button type="primary" href={'cart'}>
				<span className="text-lg mr-2 flex items-center">{Icons.cartIcon}</span>
				<span className="block">Cart</span>
			</Button>
		</div>
	);
};

export default NavButtons;
