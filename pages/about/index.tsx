import React from 'react';
import TrackVisibility from 'react-on-screen';
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
			<TrackVisibility>
				{({ isVisible }) =>
					isVisible ? <About isVisible={true} /> : <About isVisible={false} />
				}
			</TrackVisibility>
		</div>
	);
};

export default AboutPage;
