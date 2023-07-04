import { chromium } from '@playwright/test'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'

describe('Theme toggling', () => {
	let browser: Browser
	let page: Page

	beforeAll(async () => {
		browser = await chromium.launch()
	})

	afterAll(async () => {
		await browser.close()
	})

	beforeEach(async () => {
		page = await browser.newPage()
		await page.goto('http://localhost:3000')
	})

	afterEach(async () => {
		await page.close()
	})

	it('should toggle the theme', async () => {
		const getTheme = async (): Promise<string> =>
			await page.evaluate(() => {
				return document.documentElement.getAttribute('color-scheme')!
			})

		const currentTheme = await getTheme()

		// Click the toggle button and wait for the new theme to be applied
		await page.click('button.toggle')
		await page.waitForFunction(
			(expectedTheme) => {
				const currentTheme = document.documentElement.getAttribute('color-scheme')
				return currentTheme === expectedTheme
			},
			{ timeout: 5000 },
			currentTheme === 'dark' ? 'light' : 'dark'
		)

		// Check that the new theme was applied and saved in localStorage
		expect(await getTheme()).toEqual(currentTheme === 'dark' ? 'light' : 'dark')
		expect(await page.evaluate(() => localStorage.getItem('color-scheme'))).toEqual(
			currentTheme === 'dark' ? 'light' : 'dark'
		)
	})
})
