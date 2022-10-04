import React from 'react';
import { Button } from '../index';

const Success = () => {
	return (
		<>
			<div className="w-full">
				<h1 className="text-2xl text-center text-black-dark mb-2">
					Login Successful.
				</h1>
				<Button className="m-auto">go shop.</Button>
			</div>
		</>
	);
};

export default Success;
