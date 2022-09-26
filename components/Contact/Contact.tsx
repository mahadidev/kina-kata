import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import contactAnimation from '../../assets/lotties/about_animation.json';
import { type RootState } from '../../redux';
import { Button } from '../index';

const Contact = () => {
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);

	const breadcrumbHeight = useSelector(
		(state: RootState) => state.basic.breadcrumbHeight
	);

	return (
		<>
			<div className="relative">
				<div
					className="container m-auto flex items-center relative z-10"
					style={{
						height: `calc(100vh - ${navigationHeight + breadcrumbHeight}px)`,
					}}
				>
					<div className="w-full 2xl:w-[30%] xl:w-[50%] lg:w-[70%] m-auto">
						<h1 className="text-4xl font-bold font-title text-black mb-2">
							Contact us.
						</h1>
						<p className="text-black">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industrys standard dummy text
							ever since the 1500s.
						</p>
						<div className="pt-4">
							<input
								className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary"
								name="name"
								placeholder="Full Name"
							/>
							<input
								className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary"
								name="email"
								placeholder="Email adress"
							/>
							<input
								className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary"
								name="name"
								placeholder="Subject"
							/>

							<textarea
								className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary"
								rows={6}
								placeholder="Message"
							></textarea>

							<Button className="w-100">Send</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
