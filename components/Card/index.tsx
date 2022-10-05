import React, { useEffect, useState } from 'react';

interface CardPropType {
	children: any;
	className?: string;
}

const DefaultClass = [
	{
		key: 'w-',
		value: 'w-full',
	},
	{
		key: 'max-w-',
		value: 'max-w-[600px]',
	},
	{
		key: 'bg-',
		value: 'bg-white',
	},
	{
		key: 'shadow-',
		value: 'shadow-xl',
	},
	{
		key: 'mx-',
		value: 'mx-auto',
	},
	{
		key: 'my-',
		value: 'my-2',
	},
	{
		key: 'py-',
		value: 'py-3',
	},
	{
		key: 'px-',
		value: 'px-3',
	},
	{
		key: 'rounded-',
		value: 'rounded',
	},
];

const Card = (props: CardPropType) => {
	const [classNames, setClassname] = useState('');

	const hasClass = (name: string, defaultClass: string) => {
		return props.className?.includes(name) ? '' : defaultClass;
	};

	const getClass = (className: string) => {
		let temClassName = className;
		DefaultClass.map((item: { key: string; value: string }, i: number) => {
			if (className && className.match(item.key)) {
				temClassName = temClassName;
			} else {
				temClassName = temClassName + (' ' + item.value);
			}
		});

		return temClassName;
	};

	useEffect(() => {}, []);

	return (
		<>
			<div className={getClass(props.className)}>{props.children}</div>
		</>
	);
};

export default Card;
