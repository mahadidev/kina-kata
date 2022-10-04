import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Button = ({
	children,
	type,
	className,
	href,
	onClick = () => {},
	disabled,
	dropdown,
}: {
	children: any;
	type?: any;
	className?: string;
	href?: string;
	onClick?: any;
	disabled?: boolean;
	dropdown?: any;
}) => {
	const btnClass = `${
		className?.includes(' bg-') || className?.includes('"bg-')
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
	} ${className?.includes('absolute') ? '' : 'relative'} ${
		className?.includes('w-') ? '' : 'w-[max-content]'
	} ${className} ${
		className?.includes('text-start') || className?.includes('text-end')
			? ''
			: 'text-center'
	} transition-all disabled:cursor-not-allowed`;

	// dropdown
	const [isDropdown, setIsDropDown] = useState(false);

	return (
		<>
			{!dropdown && href && (
				<Link href={href ? href : '#'}>
					<button
						onClick={dropdown ? dropdown : onClick}
						className={btnClass}
						disabled={disabled}
						type={type && type}
					>
						{children}
					</button>
				</Link>
			)}

			{!dropdown && !href && (
				<button
					className={btnClass}
					onClick={
						dropdown
							? () => {
									setIsDropDown((prev) => !prev);
							  }
							: onClick
					}
					type={type && type}
					disabled={disabled}
				>
					{children}
				</button>
			)}

			{dropdown && (
				<button
					className={btnClass}
					onClick={() => {
						setIsDropDown((prev) => !prev);
					}}
					type={type && type}
					disabled={disabled}
				>
					{children}

					{isDropdown && dropdown}
				</button>
			)}
		</>
	);
};

export default Button;
