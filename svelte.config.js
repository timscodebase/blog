// https://kit.svelte.dev/docs/adapters
//
// Adapters: Netlify, Vercel, Cloudflare, AWS, Azure, Google Cloud,
// CloudCannon, GitHub Pages, GitLab Pages, Render, Deno and more.
//
// https://sveltesociety.dev/components#adapters

import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'

import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
}

export default config