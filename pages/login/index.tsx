import React from 'react';
import { useSelector } from 'react-redux';
import { Login } from '../../components';
import { type RootState } from '../../redux';

const Template = () => {
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);

	return (
		<div
			className="bg-white"
			style={{
				marginTop: navigationHeight + 'px',
			}}
		>
			<Login />
		</div>
	);
};

export default Template;
