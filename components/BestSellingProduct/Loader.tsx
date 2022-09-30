import React from 'react';

const Loader = ({ rows = 1 }: { rows?: number }) => {
	return (
		<div className="animate-pulse">
			<div className="w-80 h-4 rounded-md bg-slate-200" />
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center sm:justify-start gap-6 grid-flow-col-dense overflow-x-hidden pt-4">
				{Array.from(Array(rows), (e, i) => (
					<>
						<div className="W-full group relative" key={i}>
							<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-200 aspect-none h-80">
								<div className="w-full h-full bg-slate-200" />
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<div className="w-24 h-2 rounded-md bg-slate-200" />
									<div className="w-full flex items-center space-x-1 mt-2">
										<div className="w-32 h-2 rounded-md bg-slate-200" />
										<div className="w-8 h-2 rounded-md bg-slate-200" />
									</div>
								</div>
								<div className="w-10 h-2 rounded-md bg-slate-200" />
							</div>
						</div>
						<div className="W-full group relative">
							<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-200  aspect-none h-80">
								<div className="w-full h-full bg-slate-200" />
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<div className="w-24 h-2 rounded-md bg-slate-200" />
									<div className="w-full flex items-center space-x-1 mt-2">
										<div className="w-32 h-2 rounded-md bg-slate-200" />
										<div className="w-8 h-2 rounded-md bg-slate-200" />
									</div>
								</div>
								<div className="w-10 h-2 rounded-md bg-slate-200" />
							</div>
						</div>
						<div className="W-full group relative">
							<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-200  aspect-none h-80">
								<div className="w-full h-full bg-slate-200" />
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<div className="w-24 h-2 rounded-md bg-slate-200" />
									<div className="w-full flex items-center space-x-1 mt-2">
										<div className="w-32 h-2 rounded-md bg-slate-200" />
										<div className="w-8 h-2 rounded-md bg-slate-200" />
									</div>
								</div>
								<div className="w-10 h-2 rounded-md bg-slate-200" />
							</div>
						</div>
						<div className="W-full group relative">
							<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-200  aspect-none h-80">
								<div className="w-full h-full bg-slate-200" />
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<div className="w-24 h-2 rounded-md bg-slate-200" />
									<div className="w-full flex items-center space-x-1 mt-2">
										<div className="w-32 h-2 rounded-md bg-slate-200" />
										<div className="w-8 h-2 rounded-md bg-slate-200" />
									</div>
								</div>
								<div className="w-10 h-2 rounded-md bg-slate-200" />
							</div>
						</div>
						<div className="W-full group relative">
							<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-200  aspect-none h-80">
								<div className="w-full h-full bg-slate-200" />
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<div className="w-24 h-2 rounded-md bg-slate-200" />
									<div className="w-full flex items-center space-x-1 mt-2">
										<div className="w-32 h-2 rounded-md bg-slate-200" />
										<div className="w-8 h-2 rounded-md bg-slate-200" />
									</div>
								</div>
								<div className="w-10 h-2 rounded-md bg-slate-200" />
							</div>
						</div>
					</>
				))}
			</div>
			<div className="w-32 h-10 bg-slate-200 rounded-md m-auto mt-8" />
		</div>
	);
};

export default Loader;
