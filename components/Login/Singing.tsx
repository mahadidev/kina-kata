import React from 'react';
import { Button } from '../index';

const Singing = ({ onSingUp }: { onSingUp: any }) => {
	return (
		<>
			<h1 className="text-xl text-semibold mb-2">Login</h1>
			<form className="mb-2">
				<input
					className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary text-black-dark"
					type="text"
					name="email"
					placeholder="email"
				/>
				<input
					className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary text-black-dark"
					type="password"
					name="password"
					placeholder="password"
				/>

				<Button type="button">Login</Button>
			</form>
			<div className="flex mt-4">
				<p>Don{`'`}t have an account? </p>
				<span
					className="text-primary cursor-pointer ml-1"
					onClick={() => {
						onSingUp(false);
					}}
				>
					Sing up
				</span>
			</div>
		</>
	);
};

export default Singing;
