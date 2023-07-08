import { writable } from 'svelte/store'
import { browser } from '$app/environment'

const themes = [
	'Light',
	'Dark',
	'Orange Light',
	'Orange Dark'
]

// We set the theme in `app.html` to prevent flashing
const userTheme = browser && (localStorage?.getItem('color-scheme'))

// Create the store
export const theme = writable(userTheme ?? 'dark')

// Update the theme
export function toggleTheme(): void {
	theme.update((currentTheme) => {
		const currentIndex = themes.indexOf(currentTheme)
		const nextIndex = (currentIndex + 1) % themes.length
		const newTheme = themes[nextIndex]

		document.documentElement.setAttribute('color-scheme', newTheme)
		localStorage?.setItem('color-scheme', newTheme)
		console.log('New Theme', newTheme);

		return newTheme
	})
}

// Set the theme
export function setTheme(newname: Theme): void {
	theme.set(newTheme)
}


