import { dev } from '$app/environment'

// Set up as many variables as you like here:
export const title = 'My Blog'
export const description = 'A simple Markdown blog built with SvelteKit'

// This checks if we're in development mode and sets the URL accordingly
export const url = dev ? 'http://localhost:5173/' : 'https://timsmith.tech'