import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../pages/api';
import { authLogin, RootState, setCartSidebar } from '../../redux';
import { createOrGetUser } from '../../utils/User';
import { Button, Icons } from '../index';

export const CartButton = ({ className }: { className?: string }) => {
	const { totalProduct } = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();
	const showCartSidebar = () => {
		dispatch(setCartSidebar(true));
	};

	return (
		<>
			<Button
				className="block bg-primary disabled:bg-primary-light"
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
		</>
	);
};

export const AuthButton = ({
	className,
	googleBtnProps,
}: {
	className?: string;
	googleBtnProps?: any;
}) => {
	const dispatch = useDispatch();
	// login
	const authUser = useSelector((state: RootState) => state.auth?.user);
	const onLogin = (user: any) => {
		FetchData({
			sub: 'addUser',
			query: user,
			callBack: (data: any) => {
				console.log(data);
				dispatch(authLogin(user));
			},
		});
	};

	// log out
	const logOut = () => {
		dispatch(authLogin(null));
	};

	return (
		<>
			{!authUser && (
				<div className={`${className} ml-3`}>
					<GoogleLogin
						onSuccess={(response) => {
							createOrGetUser(response, onLogin);
						}}
						onError={() => {
							console.log('Login Failed');
						}}
						theme="outline"
						text="signin"
						shape="square"
						{...googleBtnProps}
					/>
				</div>
			)}

			{authUser && (
				<Button
					className={`${className} relative p-0 bg-none ml-3`}
					type="primary"
					dropdown={
						<div className="w-40 absolute top-full left-0 bg-white drop-shadow-2xl rounded-md overflow-hidden mt-3">
							<Button className="bg-none hover:bg-white-dark text-black-dark rounded-0 w-full justify-start">
								<span className="mr-2 flex items-center">{Icons.shopIcon}</span>
								Order List
							</Button>
							<Button
								className="bg-none hover:bg-white-dark text-black-dark rounded-0 w-full justify-start"
								onClick={logOut}
							>
								<span className="mr-2 flex items-center">
									{Icons.logOutIcon}
								</span>
								Log Out
							</Button>
						</div>
					}
				>
					<img
						className="w-10 h-10 rounded-full overflow-hidden"
						src={authUser?.image}
						alt={'User Profile'}
						title={authUser?.name}
					/>
				</Button>
			)}
		</>
	);
};
