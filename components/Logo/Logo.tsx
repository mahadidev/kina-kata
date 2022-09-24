import Link from 'next/link';
import React from 'react';

const Logo = ({
	className,
	childClassName,
}: {
	className?: string;
	childClassName?: string;
}) => {
	return (
		<Link href={'/'}>
			<h1
				className={`${
					className?.includes('text-') ? '' : 'text-black'
				} text-3xl cursor-pointer`}
			>
				Kina{' '}
				<span
					className={`${
						childClassName?.includes('text-') ? '' : 'text-primary'
					}`}
				>
					Kata
				</span>
			</h1>
		</Link>
	);
};

export default Logo;
