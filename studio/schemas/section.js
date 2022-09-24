export default {
	name: 'section',
	title: 'Section',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Section Title',
			type: 'string',
		},
		{
			name: 'name',
			title: 'Section Name',
			type: 'string',
		},
		{
			name: 'subTitle',
			title: 'Sub Section Title',
			type: 'string',
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{ type: 'banner' },
						{
							type: 'cardBanner',
						},
					],
				},
			],
		},
	],
};
