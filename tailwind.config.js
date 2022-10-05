module.exports = {
	content: [
		'./node_modules/flowbite-react/**/*.js',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./public/**/*.html',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
				title: ['Nunito'],
			},
			backgroundColor: {
				primary: {
					light: '#7775fb',
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
					gray: '#00000008',
					DEFAULT: '#0000',
				},
			},
			colors: {
				primary: {
					light: '#7775fb',
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
				red: {
					DEFAULT: '#ff0000',
				},
				transparent: {
					gray: '#00000026',
					DEFAULT: '#0000',
				},
			},
			borderRadius: {
				sm: '0.1rem',
				DEFAULT: '0.5rem',
				lg: '1rem',
			},
			borderWidth: {
				sm: '0.5px',
				DEFAULT: '1px',
				lg: '3px',
			},
			boxShadow: {
				DEFAULT: '0 2px 10px 0 rgb(6 6 6 / 6%)',
				lg: '0 6px 24px 0 rgb(6 6 6 / 8%)',
				xl: '7px 7px 34px 0 rgb(6 6 6 / 10%)',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
