import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const Loader = ({ type }: { type: 'standard' | 'promo' }) => {
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);

	return (
		<>
			<div className="animate-pulse">
				{type === 'standard' && (
					<div
						className="w-full flex items-center  border-b-[1px]"
						style={{
							height: `calc(100vh - ${navigationHeight}px)`,
						}}
					>
						<div className="container flex flex-col lg:flex-row items-center justify-between">
							<div className="w-full max-w-[450px] flex justify-center flex-col mt-8 lg:mt-0">
								<div className="w-full h-4 bg-gray-200 rounded-md mb-3" />
								<div className="w-full max-w-[400px]">
									<div className="h-2.5 bg-slate-200 rounded-md w-[86%]"></div>
									<div className="h-2.5 bg-slate-200 rounded-md w-[100%] mt-2"></div>
									<div className="h-2.5 bg-slate-200 rounded-md w-[70%] mt-2"></div>
									<div className="w-20 h-10 bg-slate-200 rounded-md mt-3" />
								</div>
							</div>
							<div className="w-full max-w-[400px] h-[400px] lg:h-[700px] bg-slate-200 rounded-md -order-1 lg:order-1" />
						</div>
					</div>
				)}
				{type === 'promo' && (
					<>
						<div className="container h-[500px]  flex items-center">
							<div className="w-full h-auto sm:h-[276px] bg-white drop-shadow-md rounded-xl py-8 px-8 flex flex-col justify-center">
								<div className="w-full max-w-[350px] h-4 bg-slate-200 rounded" />
								<div className="w-full max-w-[500px] mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 flex-wrap">
									<div className="w-full h-10 rounded-md bg-slate-200" />
									<div className="w-full h-10 rounded-md bg-slate-200" />
									<div className="w-full h-10 rounded-md bg-slate-200" />
									<div className="w-full h-10 rounded-md bg-slate-200" />
									<div className="w-32 h-10 bg-slate-200 rounded-md md:absolute sm:ml-4 md:ml-0 mt-2 md:mt-0 right-4 bottom-4" />
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Loader;
