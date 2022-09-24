import { BG, Colors, FontSize, PaddingX, PaddingY } from '../../Theme';

export default {
	name: 'button',
	title: 'Buttons',
	type: 'document',
	fields: [
		{
			name: 'btnType',
			title: 'Button Type',
			type: 'string',
		},
		{
			name: 'bgColor',
			title: 'Background color',
			type: 'string',
			options: {
				list: BG,
			},
		},
		{
			name: 'textColor',
			title: 'Text Color',
			type: 'string',
			options: {
				list: Colors,
			},
		},
		{
			name: 'rounded',
			title: 'Border Radius',
			type: 'string',
			options: {
				list: [
					{
						title: 'Rounded Small',
						value: 'rounded-sm',
					},
					{
						title: 'Rounded Medium',
						value: 'rounded-md',
					},
					{
						title: 'Rounded Large',
						value: 'rounded-lg',
					},
					{
						title: 'Rounded Full',
						value: 'rounded-full',
					},
				],
			},
		},
		{
			name: 'fontSize',
			title: 'Font Size',
			type: 'string',
			options: {
				list: FontSize,
			},
		},
		{
			name: 'paddingX',
			title: 'Padding X',
			type: 'string',
			options: {
				list: PaddingX,
			},
		},
		{
			name: 'paddingY',
			title: 'Padding Y',
			type: 'string',
			options: {
				list: PaddingY,
			},
		},
	],
	initialValue: {
		fontSize: false,
		paddingX: false,
		paddingY: false,
	},
};
