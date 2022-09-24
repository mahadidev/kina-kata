import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import banner from './banner';
import button from './button';
import card from './card';
import cardBanner from './cardBanner';
import category from './category';
import feedback from './feedback';
import page from './page';
import product from './product';
import section from './section';
import user from './user';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		category,
		product,
		user,
		feedback,
		banner,
		button,
		cardBanner,
		card,
		page,
		section,
	]),
});
