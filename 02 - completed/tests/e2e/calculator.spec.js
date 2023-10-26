import {test, expect} from '@playwright/test';

test.describe('The calculator app', function () {

	// Open the app before each test
	test.beforeEach(async function ({page}) {
		await page.goto('http://localhost:8000/');
	});

	test('adds numbers together', async function ({page}) {
		await page.fill('#numbers', '1,2,3');
		await page.click('button');
		await expect(page.locator('#answer')).toHaveText('6');
	});

	test('subtracts numbers', async function ({page}) {
		await page.fill('#numbers', '4,2');
		await page.selectOption('#math', 'subtract');
		await page.click('button');
		await expect(page.locator('#answer')).toHaveText('2');
	});

	test('multiplies numbers', async function ({page}) {
		await page.fill('#numbers', '4,2,3');
		await page.selectOption('#math', 'multiply');
		await page.click('button');
		await expect(page.locator('#answer')).toHaveText('24');
	});

	test('divides numbers', async function ({page}) {
		await page.fill('#numbers', '100,2,2');
		await page.selectOption('#math', 'divide');
		await page.click('button');
		await expect(page.locator('#answer')).toHaveText('25');
	});

	test('ignores invalid values', async function ({page}) {
		await page.fill('#numbers', 'a,b,c,42');
		await page.click('button');
		await expect(page.locator('#answer')).toHaveText('42');
	});

	test('Shows an error message if no numbers are provided', async function ({page}) {
		await page.fill('#numbers', '');
		await page.click('button');
		await expect(page.locator('#answer')).toHaveText('Please include some numbers');
	});

});