import {add} from '../../calculator.js';

describe('The add() method', function () {

	test('adds numbers together', function () {
		expect(add(1, 2)).toBe(3);
	});

	test('adds multiple numbers', function () {
		expect(add(1, 2, 3, 4)).toBe(10);
	});

	test('works with a single number', function () {
		expect(add(3)).toBe(3);
	});

	test('works with no numbers', function () {
		expect(add()).toBe(0);
	});

});