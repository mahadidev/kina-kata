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
								<div className="w-56 h-2 bg-gray-200 rounded-md mb-3" />
								<div className="w-full max-w-[400px]">
									<div className="h-1 bg-slate-200 rounded-md w-[86%]"></div>
									<div className="h-1 bg-slate-200 rounded-md w-[100%] mt-2"></div>
									<div className="h-1 bg-slate-200 rounded-md w-[50%] mt-2"></div>
									<div className="w-20 h-10 bg-slate-200 rounded-md mt-3" />
								</div>
							</div>
							<div className="w-full max-w-[400px] h-[400px] lg:h-[400px] bg-slate-200 rounded-2xl -order-1 lg:order-1" />
						</div>
					</div>
				)}
				{type === 'promo' && (
					<>
						<div className="container h-[500px]  flex items-center">
							<div className="w-full h-auto sm:h-[276px] bg-white drop-shadow-2xl rounded-xl py-8 px-8 flex flex-col justify-center">
								<div className="w-full max-w-[250px] h-2 bg-slate-200 rounded-md" />
								<div className="w-full max-w-[500px] mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 flex-wrap">
									<div className="w-full flex">
										<div className="w-20 h-14 bg-slate-200 rounded-md" />
										<div className="w-full ml-3 flex flex-col justify-center">
											<div className="w-[50%] h-2 bg-slate-200 rounded-md"></div>
											<div className="w-full">
												<div className="w-full h-1 bg-slate-200 mt-2" />
												<div className="w-[80%] h-1 bg-slate-200 mt-1" />
												<div className="w-full h-1 bg-slate-200 mt-1" />
											</div>
										</div>
									</div>
									<div className="w-full flex">
										<div className="w-20 h-14 bg-slate-200 rounded-md" />
										<div className="w-full ml-3 flex flex-col justify-center">
											<div className="w-[50%] h-2 bg-slate-200 rounded-md"></div>
											<div className="w-full">
												<div className="w-full h-1 bg-slate-200 mt-2" />
												<div className="w-[80%] h-1 bg-slate-200 mt-1" />
												<div className="w-full h-1 bg-slate-200 mt-1" />
											</div>
										</div>
									</div>
									<div className="w-full flex">
										<div className="w-20 h-14 bg-slate-200 rounded-md" />
										<div className="w-full ml-3 flex flex-col justify-center">
											<div className="w-[50%] h-2 bg-slate-200 rounded-md"></div>
											<div className="w-full">
												<div className="w-full h-1 bg-slate-200 mt-2" />
												<div className="w-[80%] h-1 bg-slate-200 mt-1" />
												<div className="w-full h-1 bg-slate-200 mt-1" />
											</div>
										</div>
									</div>
									<div className="w-full flex">
										<div className="w-20 h-14 bg-slate-200 rounded-md" />
										<div className="w-full ml-3 flex flex-col justify-center">
											<div className="w-[50%] h-2 bg-slate-200 rounded-md"></div>
											<div className="w-full">
												<div className="w-full h-1 bg-slate-200 mt-2" />
												<div className="w-[80%] h-1 bg-slate-200 mt-1" />
												<div className="w-full h-1 bg-slate-200 mt-1" />
											</div>
										</div>
									</div>

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
