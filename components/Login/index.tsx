import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../pages/api';
import { authLogin, type RootState } from '../../redux';
import { getUserInfo } from '../../utils/';
import Singing from './Singing';
import SingUp from './SingUp';
import Success from './Success';

const Login = () => {
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);
	const breadcrumbHeight = useSelector(
		(state: RootState) => state.basic.breadcrumbHeight
	);
	const footerHeight = useSelector(
		(state: RootState) => state.basic.footerHeight
	);

	// page state
	const [isLogin, setIsLogin] = useState(true);

	// login
	const authUser = useSelector((state: RootState) => state.auth?.user);

	// redux
	const dispatch = useDispatch();

	// singup
	const onSingup = (user: any) => {
		FetchData({
			sub: 'addUser',
			query: user,
			source: 'google',
			callBack: (data: any) => {
				dispatch(authLogin(user));
			},
		});
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
				{!authUser && (
					<div className="w-full max-w-[600px] m-auto p-4 bg-white drop-shadow-2xl rounded-md">
						{isLogin && <Singing onSingUp={setIsLogin} />}
						{!isLogin && <SingUp onSingUp={setIsLogin} />}

						<div className="flex items-center w-[90%] mx-auto my-4">
							<div className="w-full border mr-2" />
							or
							<div className="w-full border ml-2" />
						</div>
						<div className="w-[max-content] m-auto">
							<GoogleLogin
								onSuccess={(response) => {
									getUserInfo(response, onSingup);
								}}
								onError={() => {
									console.log('Login Failed');
								}}
								theme="outline"
								shape="square"
								size="large"
							/>
						</div>
					</div>
				)}

				{authUser && <Success />}
			</div>
		</>
	);
};

export default Login;
