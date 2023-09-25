function decimalToBinary(num) {
  //Write you code here
	if(num===0){
		return 0;
	}
	return num.toString(2);
  
}

window.decimalToBinary = decimalToBinary;