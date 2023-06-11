import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { join } from 'path';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				custom: {
					azul: '#2B4162',
					rojo: '#FF1053',
					cian: '#4EA5D9',
					verde: '#3DDC97',
					white: '#FFFFFF'
				}
			}
		}
	},
	plugins: [forms, typography, ...skeleton()]
};
