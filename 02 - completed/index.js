import * as calculator from './calculator.js';

// DOM elements
let form = document.querySelector('form');
let numbers = document.querySelector('#numbers');
let math = document.querySelector('#math');
let answer = document.querySelector('#answer');

function showMessage (msg = '') {
	answer.textContent = msg;
}

/**
 * Handle submit events
 * @param  {Event} event The event object
 */
function submitHandler (event) {

	// Stop the form from reloading the page
	event.preventDefault();

	// Get the numbers
	let nums = numbers.value.split(',').map(function (num) {
		return parseFloat(num.trim());
	}).filter(function (num) {
		return !isNaN(num);
	});

	// Make sure there are numbers to math
	if (!nums.length) {
		showMessage('Please include some numbers');
		return;
	}

	// Do the math and show the result
	let total = calculator[math.value](...nums);
	showMessage(total);

}

// Handle form submit events
form.addEventListener('submit', submitHandler);