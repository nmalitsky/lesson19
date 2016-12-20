let assert = require('chai').assert;
const Calculator = require('../lib/calculator');

describe('String calculator should', () => {
	it('return 0 if input is empty', () => {
		let calculator = new Calculator();

		let sum = calculator.add("");
		assert.equal(sum, 0);
	});

	it('return sum of any amount of numbers (delimiter by ,)', () => {
		let calculator = new Calculator();

		let sum = calculator.add("1,2,3");
		assert.equal(sum, 6);
	});
});