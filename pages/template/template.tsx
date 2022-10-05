import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, Input } from '../../components';
import { type RootState } from '../../redux';

const Template = () => {
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);

	const [testRef, setTestRef] = useState(null);

	return (
		<div
			className="bg-white py-8"
			style={{
				marginTop: navigationHeight + 'px',
			}}
		>
			<Form title="create your account.">
				<Input type="file" name="image" label="Upload profile picture" />
				<Input type="text" name="name" label="Full Name" required={true} />
				<Input type="email" name="email" label="Email" required={true} />
				<Input
					type="password"
					name="password"
					label="Password"
					required={true}
				/>
				<Button
					className="w-full mt-4"
					onClick={() => {
						console.log(testRef);
					}}
				>
					Create
				</Button>
			</Form>
		</div>
	);
};

export default Template;
