process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
});

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split("\n");
	main();
});

function readLine() {
	return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
/**
 * Function To Check if brackets passed are paired
 */
function checkPair(open,closed){
	if((open === '{' && closed === '}') || (open === '[' && closed === ']') || (open === '(' && closed === ')'))
		return true
	else
		return false;
}

/**
 * Function to do actual check
 **/
function doCheck(bracketExpression){
	//Stack to check if bracket in order
	var stack = [];

	//For each bracket in expression
	for(let bracket of bracketExpression){
		//If a opening bracket push to stack
		if(bracket === '{' || bracket === '[' || bracket === '('){
			stack.push(bracket);
		}

		//If a closing bracket and stack empty, expression is not balanced
		if((bracket === '}' || bracket === ']' || bracket === ')') && stack.length === 0){
			return 'NO';
		}
		//Else if a closing bracket and stack not empty check if balanced
		else if((bracket === '}' || bracket === ']' || bracket === ')') && stack.length !== 0){
			//If the pair check returns false, expression imbalanced
			if(!checkPair(stack.pop(),bracket))
				return 'NO';
		}
	}
	//If code reaches here and stack is empty it is balanced, else it is not
	return stack.length > 0 ? 'NO':'YES';
}

function main() {
	var t = parseInt(readLine());
	for(var a0 = 0; a0 < t; a0++){
		var expression = readLine();
		console.log(doCheck(expression));
	}
}