// Pokemon class

'use strict';

module.exports = class Calculator {
	constructor () {
		this.defaultValue = 0;
	}
	add(numbers) {
		if(this.isEmpty(numbers))
			return this.defaultValue;
	
		if(this.hasSeveralNumbers(numbers)) 
			return this.parseMultipleNumbers(numbers);

		return this.parseSingleNumber(numbers);
	}
	
	isEmpty(numbers) {
		return !numbers;
	}

	hasSeveralNumbers(numbers) {
		return numbers.indexOf(',') > -1;
	}

	parseSingleNumber(number) {
		return parseInt(number, 10);
	}

	parseMultipleNumbers(numbers) {
		let nums = numbers.split(',');
		return nums.reduce((a, b) => { 
			return this.parseSingleNumber(a) + this.parseSingleNumber(b);
		});
	}
}
