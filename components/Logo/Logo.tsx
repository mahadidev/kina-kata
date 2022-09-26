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
			<h1 className={`'text-black text-3xl cursor-pointer font-semibold`}>
				Kina <span className={`text-primary`}>Kata</span>
			</h1>
		</Link>
	);
};

export default Logo;
