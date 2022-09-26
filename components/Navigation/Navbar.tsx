import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux';
import { Icons, Logo, Menu, NavButtons } from '../index';

const Navbar = () => {
	const [isSidebar, setIsSidebar] = useState(false);
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);

	return (
		<div className="w-full grid grid-cols-2 sm:grid-cols-3 justify-between items-center">
			<Logo />
			<span
				className="flex items-center sm:hidden text-2xl cursor-pointer ml-auto z-20"
				onClick={() => {
					setIsSidebar((result) => !result);
					{
						document.body.setAttribute(
							'style',
							`overflow: ${isSidebar ? 'auto' : 'hidden'}`
						);
					}
				}}
			>
				{!isSidebar ? Icons.menuIcon : Icons.closeIcon}
			</span>
			<motion.div
				animate={{
					width: isSidebar ? '90%' : '',

					transition: {
						duration: 0.1,
						type: 'spring',
						damping: 10,
					},
				}}
				className="absolute sm:relative top-0 right-0 bg-white w-0 sm:w-full h-[100vh] sm:h-auto sm:bg-transparent sm:grid sm:grid-cols-2 sm:items-center sm:col-span-2 z-10 shadow-xl sm:shadow-none"
			>
				<div
					className="sm:hidden"
					style={{ height: `${navigationHeight}px` }}
				></div>
				<Menu />
				<NavButtons />
			</motion.div>
		</div>
	);
};

export default Navbar;
