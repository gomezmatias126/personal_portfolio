/** @type {import('tailwindcss').Config} */

let defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			'light':{
				DEFAULT:'#EEE',
				dark:'#ddd'
			},
			'grey':{
				DEFAULT:'#CCCCCC',
			},
			'dark': {
				DEFAULT:'#222222',
				light: '#444444'
			},
			transparent: 'transparent',
			'red': '#3A6A72',
			'blue': '#aA90c9',
			'green': '#f3c919',
		},
		fontWeight: {
      light: '300',
      medium: '500',
      bold: '900',
    },
		container:{
			center:true,
			padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
		extend: {
			fontFamily: {
				sans: ['"JetBrains Mono"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
