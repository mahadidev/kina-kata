import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const BannerLoader = ({ type }: { type: 'standard' | 'promo' }) => {
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);

	return (
		<>
			{type === 'standard' && (
				<>
					<div
						className="w-100% animate-pulse bg-white flex items-center"
						style={{
							height: `calc(100vh - ${navigationHeight}px)`,
						}}
					>
						<div className="container">
							<div className="w-full max-w-[700px] flex items-center space-x-2">
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
								<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
							</div>
						</div>
					</div>
				</>
			)}
			{type === 'promo' && (
				<>
					<div className="container h-[500px]  flex items-center">
						<div className="w-full h-[276px] animate-pulse bg-white drop-shadow-md rounded-xl py-8 px-8 flex flex-col justify-center">
							<div className="w-full max-w-[350px] h-7 bg-slate-200 rounded" />
							<div className="w-full max-w-[500px] mt-4 grid grid-cols-2 gap-3 flex-wrap">
								<div className="w-full h-10 rounded-md bg-slate-200" />
								<div className="w-full h-10 rounded-md bg-slate-200" />
								<div className="w-full h-10 rounded-md bg-slate-200" />
								<div className="w-full h-10 rounded-md bg-slate-200" />
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default BannerLoader;
