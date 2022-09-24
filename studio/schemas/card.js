import { BG, Colors } from '../../Theme';

export default {
	name: 'card',
	title: 'Card',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Card Name',
			type: 'string',
		},
		{
			name: 'title',
			title: 'Card Title',
			type: 'string',
		},
		{
			name: 'cardType',
			title: 'Card Type',
			type: 'string',
			options: {
				list: [
					{
						title: 'Standard',
						value: 'standard',
					},
				],
			},
		},
		{
			name: 'desc',
			title: 'Card Description',
			type: 'string',
		},
		{
			name: 'bgColor',
			title: 'Background Color',
			type: 'string',
			options: {
				list: BG,
			},
		},
		{
			name: 'titleColor',
			title: 'Title Color',
			type: 'string',
			options: {
				list: Colors,
			},
		},
		{
			name: 'descColor',
			title: 'Description Color',
			type: 'string',
			options: {
				list: Colors,
			},
		},
		{
			name: 'btnLabel',
			title: 'Button Label',
			type: 'string',
		},
		{
			name: 'btnLink',
			title: 'Button Link',
			type: 'string',
		},
		{
			name: 'btnType',
			title: 'Button Type',
			type: 'reference',
			to: [{ type: 'button' }],
		},
	],
};
