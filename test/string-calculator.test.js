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

	it('return sum of any amount of numbers (add delimiter \\n)', () => {
		let calculator = new Calculator();

		let sum = calculator.add("1,2\n3");
		assert.equal(sum, 6);
	});

	it('return the following input is NOT ok:  "1,\\n"', () => {
		let calculator = new Calculator();

		let sum = calculator.add("1,\n");
		assert.isNotOk(sum, 1);
	});

	it('return sum of any amount of number (Support different delimiters)', () => {
		let calculator = new Calculator();

		let sum = calculator.add("//;\n1;2");
		assert.equal(sum, 3);
	});

});