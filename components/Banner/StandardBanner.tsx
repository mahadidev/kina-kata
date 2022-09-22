import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { ImageUrl } from '../../utils';
import { Button, Icons } from '../index';

const StandardBanner = ({
	image,
	title,
	desc,
	btnLabel,
	btnIcon,
	btnLink,
	btnType,
	bgColor,
	textColor,
	textColor2,
}: {
	image?: any;
	title?: string;
	desc?: any;
	btnLabel?: string;
	btnIcon?: string;
	btnLink?: string;
	btnType?: string;
	bgColor: string;
	textColor: string;
	textColor2: string;
}) => {
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);

	return (
		<>
			<div
				className={`relative bg-top bg-cover bg-no-repeat flex items-center flex-wrap justify-start`}
				style={{
					backgroundImage: `url(${ImageUrl(image).url()})`,
					height: `calc(100vh - ${navigationHeight}px)`,
				}}
			>
				{/* <ParticlesBg /> */}
				<div className="container m-auto relative overflow-hidden">
					{/*  backdrop-blur-lg bg-white/30 */}
					<div className="w-[100%] max-w-[700px] z-10 rounded-lg">
						{title && (
							<h1
								className={`${textColor} text-7xl font-bold font-title mb-3`}
								dangerouslySetInnerHTML={{ __html: title }}
							/>
						)}
						{desc && <p className={`${textColor} max-w-[400px]`}>{desc}</p>}
						{btnLabel && (
							<Button
								type={`${btnType}`}
								href={`${btnLink}`}
								className={'mt-2'}
							>
								{btnIcon && (
									<span className="text-2xl mr-1 flex items-center">
										{Icons[btnIcon]}
									</span>
								)}
								{btnLabel}
							</Button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default StandardBanner;
