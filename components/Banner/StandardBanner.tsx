import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux';
import { ImageUrl } from '../../utils';
import Button from '../Button';
import { BannerLoader, Icons } from '../index';

const StandardBanner = ({
	image,
	title,
	desc,
	btnLabel,
	btnIcon,
	btnLink,
}: {
	image?: any;
	title?: string;
	desc?: any;
	btnLabel?: string;
	btnIcon?: string;
	btnLink?: string;
}) => {
	const navigationHeight = useSelector(
		(state: RootState) => state.basic.navigationHeight
	);

	return (
		<>
			<div
				className={`relative bg-primary-dark bg-top bg-cover bg-no-repeatflex items-center flex flex-wrap justify-start`}
				style={{
					backgroundImage: `url(${image && ImageUrl(image).url()})`,
					height: `calc(100vh - ${navigationHeight}px)`,
				}}
			>
				<div className="container m-auto relative overflow-hidden">
					<div className="w-[100%] max-w-[700px] z-10 rounded-lg">
						{title && (
							<h1
								className={`text-white text-7xl font-bold font-title mb-3`}
								dangerouslySetInnerHTML={{ __html: title }}
							/>
						)}
						{desc && <p className={`text-white-light max-w-[400px]`}>{desc}</p>}
						{btnLabel && (
							<Button href={btnLink} className={'mt-4'}>
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
