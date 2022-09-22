import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Button, Icons } from '../index';

const Qty = ({
	onChange = () => {},
	maxQty,
	minQty = 1,
	className,
}: {
	onChange: CallableFunction;
	maxQty: number;
	minQty: number;
	className?: string;
}) => {
	const [qty, setQty] = useState(1);

	const Controller = (type: string, count: number = 1) => {
		let qtyCounter = qty;

		if (type === 'plus' && qty + 1 <= maxQty) {
			qty + count <= maxQty
				? (qtyCounter = qty + count)
				: (qtyCounter = qty + 1);
		}

		if (type === 'minus' && qty - 1 >= minQty) {
			qty - count >= minQty
				? (qtyCounter = qty - count)
				: (qtyCounter = qty - 1);
		}

		onChange(qtyCounter);
		setQty(qtyCounter);
	};

	return (
		<>
			<div
				className={`grid grid-cols-3 max-w-[150px] w-full ${
					className ? className : ''
				}`}
			>
				<div className="">
					<Button
						className={`w-full h-full rounded-none ${
							className.includes('bg-') ? 'bg-transparent' : ''
						}`}
						type={'white'}
						onClick={() => {
							Controller('minus', 1);
						}}
					>
						{Icons.minusIcon}
					</Button>
				</div>
				<div className="">
					<input
						className={`max-w-full py-2 outline-none text-center ${
							className.includes('bg-') ? 'bg-transparent' : ''
						}`}
						type="number"
						value={qty}
						readOnly
					/>
				</div>
				<div className="">
					<Button
						className={`w-full h-full rounded-none ${
							className.includes('bg-') ? 'bg-tranparent' : ''
						}`}
						type={'white'}
						onClick={() => {
							Controller('plus', 1);
						}}
					>
						{Icons.plusIcon}
					</Button>
				</div>
				<Toaster position="bottom-left" reverseOrder={true} />
			</div>
		</>
	);
};

export default Qty;
