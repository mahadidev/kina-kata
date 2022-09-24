const { defaultConfig } = require('next/dist/server/config-shared');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
				title: ['Nunito'],
			},
			backgroundColor: {
				primary: {
					light: '#5c59ff',
					DEFAULT: '#5c59ff',
					dark: '#1f2538',
				},
				white: {
					light: '#ffffffc7',
					DEFAULT: '#fff',
					dark: '#F1F1F2',
				},
				black: {
					light: '#334155',
					DEFAULT: '#1e293b',
					dark: '#0f172a',
				},
				transparent: {
					gray: '#00000005',
					DEFAULT: '#0000',
				},
			},
			colors: {
				primary: {
					light: '#5c59ff',
					DEFAULT: '#5c59ff',
					dark: '#1f2538',
				},
				white: {
					light: '#ffffffc7',
					DEFAULT: '#fff',
					dark: '#F1F1F2',
				},
				black: {
					light: '#334155',
					DEFAULT: '#1e293b',
					dark: '#0f172a',
				},
				blue: {
					light: '#80c7f5',
					DEFAULT: '#6cc1f6',
				},
				orange: {
					light: '#f8bb7f',
					DEFAULT: '#fbaf65',
				},
				green: {
					light: '#95ccb0',
					DEFAULT: '#7fcb9e',
				},
				pink: {
					DEFAULT: '#e57bc9',
					light: '#e08fc8',
				},
				transparent: {
					gray: '#00000005',
					DEFAULT: '#0000',
				},
			},
		},
	},
	plugins: [],
};
