function decimalToBinary(num) {
  // Write your code here
	let input = prompt('Enter a number');
	input = Number(input);
	let result = input.toString(2);
	result = Number(result);
	return result;
}

window.decimalToBinary = decimalToBinary;