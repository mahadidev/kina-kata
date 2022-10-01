import React from 'react';

const Loader = () => {
	return (
		<>
			<div className="">
				<div className="w-32 h-2 bg-slate-200 rounded-md" />
				<div className="w-full max-w-[500px]">
					<div className="w-[90%] h-1 bg-slate-200 rounded-md mt-2" />
					<div className="w-[80%] h-1 bg-slate-200 rounded-md mt-2" />
					<div className="w-[90%] h-1 bg-slate-200 rounded-md mt-2" />
					<div className="w-[87%] h-1 bg-slate-200 rounded-md mt-2" />
					<div className="w-[90%] h-1 bg-slate-200 rounded-md mt-2" />
					<div className="w-[80%] h-1 bg-slate-200 rounded-md mt-2" />
				</div>
			</div>
			<div className="hidden lg:block">
				<div className="w-full max-w-[400px] h-[400px] rounded-md box-shadow-2xl bg-slate-200 ml-auto" />
			</div>
		</>
	);
};

export default Loader;
