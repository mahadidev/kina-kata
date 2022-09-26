import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNavigationHeight } from '../../redux';
import { Cart, Navbar } from '../index';

const Navigation = () => {
	const navbarRef = useRef(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setNavigationHeight(navbarRef?.current?.offsetHeight));
	});

	return (
		<div
			className="w-[100%] fixed top-0 left-0 bg-white shadow-sm z-40 py-4"
			ref={navbarRef}
		>
			<div className="container m-auto">
				<Navbar />
			</div>
			<Cart />
		</div>
	);
};

export default Navigation;
