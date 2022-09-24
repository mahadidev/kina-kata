import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Button = ({
	children,
	type = false,
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
	const [classList, setClassList] = useState(
		`px-4 py-2 ${type.bgColor ? type.bgColor : 'bg-primary'} ${
			type.textColor ? type.textColor : 'text-black-light'
		} ${type.rounded ? type.rounded : 'rounded-sm'} ${
			type.fontSize ? type.fontSize : 'text-md'
		} ${type.paddingX ? type.paddingX : 'px-4'} ${
			type.paddingY ? type.paddingY : 'py-2'
		} ${className ? className : ''} flex items-center`
	);

	useEffect(() => {
		setClassList(
			`px-4 py-2 ${type.bgColor ? type.bgColor : 'bg-primary'} ${
				type.textColor ? type.textColor : 'text-white'
			} ${type.rounded ? type.rounded : 'rounded-sm'} ${
				type.fontSize ? type.fontSize : 'text-md'
			} ${type.paddingX ? type.paddingX : 'px-4'} ${
				type.paddingY ? type.paddingY : 'py-2'
			} ${className ? className : ''} flex items-center`
		);
	}, [type]);

	return (
		<>
			{onClick && !href && (
				<button className={classList} onClick={onClick}>
					{children}
				</button>
			)}
			{href && (
				<Link href={href}>
					<button className={`${classList}`}>{children}</button>
				</Link>
			)}
		</>
	);
};

export default Button;
