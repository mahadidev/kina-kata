import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import aboutAnimation from '../../assets/lotties/about_animation.json';
import { FetchData } from '../../pages/api';
import { type RootState } from '../../redux';
import Loader from './Loader';

const About = ({ isVisible }: { isVisible: any }) => {
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);

	const breadcrumbHeight = useSelector(
		(state: RootState) => state.basic.breadcrumbHeight
	);

	const [aboutData, setAboutData] = useState(null);
	const getData = (data: any) => {
		setAboutData(data);
	};

	useEffect(() => {
		if (isVisible) {
			FetchData({
				query: `*[_type == "about"][0]`,
				callBack: getData,
			});
		}
	}, [isVisible]);

	return (
		<>
			<div
				className="container m-auto grid grid-cols-1 lg:grid-cols-2 items-center"
				style={{
					minHeight: `calc(100vh - ${navigationHeight + breadcrumbHeight}px)`,
				}}
			>
				{aboutData && (
					<>
						<div className="">
							<h1 className="text-4xl font-bold font-title text-black mb-2">
								About us.
							</h1>
							<p className="text-black">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industrys standard dummy text
								ever since the 1500s, when an unknown printer took a galley of
								type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged.
							</p>
						</div>
						<div className="hidden lg:block">
							<Player autoplay loop src={aboutAnimation} />
						</div>
					</>
				)}

				{!aboutData && <Loader />}
			</div>
		</>
	);
};

export default About;
