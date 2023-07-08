import { dev } from '$app/environment'

// Set up as many variables as you like here:
export const title = 'My Blog'
export const description = 'A simple Markdown blog built with SvelteKit'

// This checks if we're in development mode and sets the URL accordingly
export const url = dev ? 'http://localhost:5173/' : 'https://custom.url/'

// SEO stuff
export const author = 'Tim Smith'
export const twitter = '@yourhandle'
export const image = 'https://placekitten.com/1200/630'
export const favicon = '/favicon.ico'
export const keywords = 'svelte, sveltekit, blog, markdown'
export const themeColor = '#000000'
export const backgroundColor = '#ffffff'
export const author_website = 'https://timsmith.tech'