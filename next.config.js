/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:3000/:path*',
			},
		];
	},
	webpack: (config) => {
		config.resolve.fallback = { fs: false };

		return config;
	},
};

module.exports = nextConfig;
