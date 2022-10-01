export default {
	name: 'about',
	title: 'About Page',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			required: true,
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
			required: true,
		},
	],
};
