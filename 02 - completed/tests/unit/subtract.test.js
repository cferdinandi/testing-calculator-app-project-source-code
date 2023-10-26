import {subtract} from '../../calculator.js';

describe('The subtract() method', function () {

	test('subtracts numbers together', function () {
		expect(subtract(4, 1)).toBe(3);
	});

	test('subtracts multiple numbers', function () {
		expect(subtract(10, 3, 2, 1)).toBe(4);
	});

	test('works with a single number', function () {
		expect(subtract(3)).toBe(3);
	});

	test('works with no numbers', function () {
		expect(subtract()).toBe(0);
	});

});