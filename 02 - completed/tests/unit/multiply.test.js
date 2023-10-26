import {multiply} from '../../calculator.js';

describe('The multiply() method', function () {

	test('multiplies numbers together', function () {
		expect(multiply(2, 3)).toBe(6);
	});

	test('multiplies multiple numbers', function () {
		expect(multiply(2, 3, 4, 5)).toBe(120);
	});

	test('works with a single number', function () {
		expect(multiply(3)).toBe(3);
	});

	test('works with no numbers', function () {
		expect(multiply()).toBe(0);
	});

});