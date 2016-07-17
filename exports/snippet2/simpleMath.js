module.exports = {
	add,
	substract,
	divide,
	multiply,
	valueOfTheWeek

};

module.exports.valueOfTheWeek = valueOfTheWeek;

function add(a, b){
      	return a + b;
}

function substract(a, b){
	return a - b;
}

function divide(a, b){
	return a / b;
}

function multiply(a, b){
	return a * b;
}

function valueOfTheWeek (){
	return 15;
}
