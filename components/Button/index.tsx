import Link from 'next/link';
import React, { useEffect } from 'react';

const Button = ({
	children,
	type,
	className,
	href,
	onClick = () => {},
}: {
	children: any;
	type?: any;
	className?: string;
	href?: string;
	onClick?: any;
}) => {
	const classChecker = `px-4 py-2 ${
		type.bgColor ? type.bgColor : 'bg-primary'
	} ${type.textColor ? type.textColor : 'text-white'} ${
		type.rounded ? type.rounded : 'rounded-sm'
	} ${type.fontSize ? type.fontSize : 'text-md'} ${
		type.paddingX ? type.paddingX : 'px-4'
	} ${type.paddingY ? type.paddingY : 'py-2'} ${
		className ? className : ''
	} flex items-center`;

	useEffect(() => {
		console.log(type);
	}, [type]);

	return (
		<>
			{onClick && !href && (
				<button className={`${classChecker}`} onClick={onClick}>
					{children}
				</button>
			)}
			{href && (
				<Link href={href}>
					<button className={`${classChecker}`}>{children}</button>
				</Link>
			)}
		</>
	);
};

export default Button;
