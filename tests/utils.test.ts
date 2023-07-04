import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { chromium } from '@playwright/test'
import { formatDate } from '../src/lib/utils'

const knownDate = '2022-01-01T12:00:00Z'
const mediumFormattedDate = 'Jan 1, 2022'
const fullFormattedDate = 'Saturday, January 1, 2022'

describe('formatDate', () => {
	let browser

	beforeAll(async () => {
		browser = await chromium.launch()
	})

	afterAll(async () => {
		await browser.close()
	})

	it('should format date correctly in medium style', async () => {
		const page = await browser.newPage()
		const formattedDate = await page.evaluate((d) => formatDate(d), knownDate)
		expect(formattedDate).toBe(mediumFormattedDate)
		await page.close()
	})

	it('should format date correctly in full style', async () => {
		const page = await browser.newPage()
		const formattedDate = await page.evaluate((d) => formatDate(d, 'full'), knownDate)
		expect(formattedDate).toBe(fullFormattedDate)
		await page.close()
	})
})
