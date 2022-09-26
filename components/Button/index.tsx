import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Button = ({
	children,
	type = false,
	className,
	href,
	onClick = () => {},
	disabled,
}: {
	children: any;
	type?: any;
	className?: string;
	href?: string;
	onClick?: any;
	disabled?: boolean;
}) => {
	const btnClass = `${
		className?.includes('bg-') && !className?.includes(':bg-')
			? ''
			: 'bg-primary hover:bg-primary-light'
	} ${className?.includes('text-') ? '' : 'text-white'} ${
		className?.includes('rounded-') ? '' : 'rounded-md'
	} ${className?.includes('text-') ? '' : 'text-md'} ${
		className?.includes('block') ? '' : 'flex'
	} ${className?.includes('items-') ? '' : 'items-center'} ${
		className?.includes('justify-') ? '' : 'justify-center'
	} ${className?.includes('px-') || className?.includes('p-') ? '' : 'px-4'} ${
		className?.includes('py-') || className?.includes('p-') ? '' : 'py-2'
	} ${className?.includes('absolute') ? '' : 'relative'} ${className} ${
		className?.includes('text-start') || className?.includes('text-end')
			? ''
			: 'text-center'
	} transition-all disabled:cursor-not-allowed`;

	return (
		<>
			{href && (
				<Link href={href ? href : '#'}>
					<button onClick={onClick} className={btnClass} disabled={disabled}>
						{children}
					</button>
				</Link>
			)}

			{!href && (
				<button className={btnClass} onClick={onClick} disabled={disabled}>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
