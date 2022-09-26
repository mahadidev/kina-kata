import React from 'react';
import { useSelector } from 'react-redux';
import { About } from '../../components';
import { type RootState } from '../../redux';

const AboutPage = () => {
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
			<About />
		</div>
	);
};

export default AboutPage;
