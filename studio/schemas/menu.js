import { BG, Colors } from '../../Theme';
export default {
	name: 'menus',
	title: 'Menus',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Menu Name',
			type: 'string',
		},
		{
			name: 'color',
			title: 'Menu Color',
			type: 'string',
			options: {
				list: Colors,
			},
		},
		{
			name: 'hoverColor',
			title: 'Menu Hover Color',
			type: 'string',
			options: {
				list: Colors,
			},
		},
		{
			name: 'item',
			title: 'Menu Item',
			type: 'array',
			of: [
				{
					type: 'document',
					fields: [
						{
							name: 'title',
							title: 'Title',
							type: 'string',
						},
						{
							name: 'url',
							title: 'URL',
							type: 'string',
						},
					],
				},
			],
		},
	],
};
