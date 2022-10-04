import Stripe from 'stripe';
import { getImageUrl } from '../../utils';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const params = {
				submit_type: 'pay',
				mode: 'payment',
				payment_method_types: ['card'],
				billing_address_collection: 'auto',
				shipping_options: [{ shipping_rate: 'shr_1Lp8xxIwOuOgCFx3wq7GVBEM' }],
				line_items: req.body.map((item) => {
					const img = item.product.image[0].asset._ref;
					const image = getImageUrl(item.product.image[0]);
					return {
						price_data: {
							currency: 'usd',
							product_data: {
								name: item.product.name,
								images: [image],
							},
							unit_amount: item.price,
						},
						adjustable_quantity: {
							enabled: true,
							minimum: 1,
						},
						quantity: item.qty,
					};
				}),
				success_url: `${req.headers.origin}/?success=true`,
				cancel_url: `${req.headers.origin}/?canceled=true`,
			};

			// Create Checkout Sessions from body params.
			const session = await stripe.checkout.sessions.create(params);
			res.status(200).json(session);
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}
