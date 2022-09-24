import { BG, Colors } from '../../Theme';

export default {
	name: 'cardBanner',
	title: 'Card Banner',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Banner Name',
			type: 'string',
		},
		{
			name: 'type',
			title: 'Banner Type',
			type: 'string',
			options: {
				list: [
					{
						title: 'Image Card',
						value: 'imageCart',
					},
					{
						title: 'Title Description',
						value: 'titleDesc',
					},
				],
			},
		},
		{
			name: 'image',
			title: 'Banner Image',
			type: 'array',
			of: [{ type: 'image' }],
			options: {
				hotspot: true,
			},
		},
		{
			name: 'card',
			title: 'Card',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'card' }],
				},
			],
		},
		{
			name: 'btnType',
			title: 'Button Type',
			type: 'reference',
			to: [
				{
					type: 'button',
				},
			],
		},
	],
};
