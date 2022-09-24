import { motion } from 'framer-motion';
import { ImageUrl } from '../../utils';
import { Button, Icons } from '../index';

const PromoBanner = ({
	image,
	title,
	details,
	btnLabel,
	btnIcon,
	btnLink,
	btnType,
	btnShadow,
	bgColor,
	textColor,
	textColor2,
}: {
	image?: any;
	title?: string;
	details?: any;
	btnLabel?: string;
	btnIcon?: string;
	btnLink?: string;
	btnType?: string;
	btnShadow?: boolean;
	bgColor: string;
	textColor: string;
	textColor2: string;
}) => {
	return (
		<>
			<div className={`relative sm:h-[500px] flex items-center`}>
				{image && (
					<motion.img
						animate={{ scale: 1.1 }}
						transition={{
							ease: 'linear',
							duration: 2,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
						className="m-auto hidden xl:block absolute top-0 bottom-0 right-[30%] w-[50%] sm:w-auto sm:h-[500px] z-10"
						src={`${ImageUrl(image).url()}`}
						alt="Iphone Image"
					/>
				)}
				<div
					className={`container relative ${
						bgColor ? bgColor : 'bg-white-dark'
					} rounded-xl py-8 sm:mx-auto shadow-sm`}
				>
					{title && (
						<h1
							className={`${
								textColor ? textColor : 'text-white'
							} text-3xl ml-4 mb-2`}
							dangerouslySetInnerHTML={{ __html: title }}
						/>
					)}
					<div className="flex flex-wrap max-w-[580px]">
						{details?.map((item: any, i: number) => (
							<div className="flex max-w-[280px] p-2 items-center" key={i}>
								<span
									className={`text-5xl ${
										textColor2 ? textColor2 : 'text-white-dark'
									} mr-3`}
								>
									{Icons[item.icon]}
								</span>
								<div className="pl-2">
									<h2
										className={`text-lg ${
											textColor2 ? textColor2 : 'text-white-dark'
										}`}
									>
										{item.title}
									</h2>
									<p
										className={`text-sm ${
											textColor2 ? textColor2 : 'text-white-dark'
										}`}
									>
										{item.desc}
									</p>
								</div>
							</div>
						))}
						{btnLabel && (
							<Button
								className={`md:absolute ml-4 md:ml-0 mt-2 md:mt-0 right-4 bottom-4`}
								href={btnLink}
								type={btnType}
							>
								{btnLabel}
								{btnIcon && (
									<span className="text-2xl ml-3 flex items-center">
										{Icons[btnIcon]}
									</span>
								)}
							</Button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default PromoBanner;
