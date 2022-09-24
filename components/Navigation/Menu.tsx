import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Menu = ({
	className,
	itemClass,
}: {
	className?: string;
	itemClass?: string;
}) => {
	const [menus, setMenus] = useState([
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'Shop',
			href: '/shop',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	]);

	const router = useRouter();
	return (
		<div
			className={`w-full ${
				className?.includes('block') || className?.includes('hidden')
					? ''
					: 'flex'
			} ${
				className?.includes('justify-') ? '' : 'justify-center'
			} ${className}`}
		>
			{menus?.map((item, i) => (
				<Link href={item.href} key={i}>
					<p
						className={`transition ease-in cursor-pointer hover:bg-primary  sm:hover:bg-transparent hover:text-white focus:text-white active:text-white  sm:hover:text-primary sm:focus:text-primary sm:active:text-primary ${itemClass} ${
							router.pathname == item.href
								? 'bg-primary sm:bg-transparent text-white sm:text-primary'
								: 'text-black'
						} ${itemClass?.includes('py') ? '' : 'py-3 sm:py-7'} ${
							itemClass?.includes('px') ? '' : 'px-4'
						} `}
					>
						{item.title}
					</p>
				</Link>
			))}
		</div>
	);
};

export default Menu;
