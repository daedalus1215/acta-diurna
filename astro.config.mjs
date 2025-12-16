// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = process.env.SITE_URL ?? 'https://localhost:4321';

export default defineConfig({
	site,
	integrations: [
		starlight({
			title: 'Acta Diurna',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/daedalus1215' }],
			sidebar: [
				{
					label: 'Explanations',
					autogenerate: { directory: 'explanations' },
				},
				{
					label: 'How-to',
					autogenerate: { directory: 'how-to' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },
				},
			],
		}),
	],
});
