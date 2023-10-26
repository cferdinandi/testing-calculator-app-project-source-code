import {divide} from '../../calculator.js';

describe('The divide() method', function () {

	test('divides numbers', function () {
		expect(divide(10, 2)).toBe(5);
	});

	test('divides multiple numbers', function () {
		expect(divide(12, 2, 3)).toBe(2);
	});

	test('works with a single number', function () {
		expect(divide(3)).toBe(3);
	});

	test('works with no numbers', function () {
		expect(divide()).toBe(0);
	});

});