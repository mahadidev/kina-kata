export default {
	name: 'page',
	title: 'page',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Page Name',
			type: 'string',
		},
		{
			name: 'pageTitle',
			title: 'Page Title',
			type: 'string',
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'section' }],
				},
			],
		},
	],
};
