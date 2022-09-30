import React from 'react';

const Loader = () => {
	return (
		<>
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-pulse sm:gap-3 flex-nowrap overflow-x-hidden grid-flow-col-dense">
				<div className="w-full h-48 bg-slate-200 rounded-md" />
				<div className="w-full h-48 bg-slate-200 rounded-md" />
				<div className="w-full h-48 bg-slate-200 rounded-md" />
				<div className="w-full h-48 bg-slate-200 rounded-md" />
			</div>
		</>
	);
};

export default Loader;
