/**
 * Created by Tomas Ochoa on 5/17/2017.
 */
function readLine() {
	var input = "4\nadd hack\nadd hackerrank\nfind hac\nfind hak\n";
	
	return input;
}

/**
 * Function that stores the parameter as a new contact in the app
 * @param name String denoting a contact name
 */
function addName(name) {
	// console.log("Add: '"+name+"'");
	contacts.push(name);
}

/**
 * findPartial: Function that counts the number of contacts starting with the
 * param partial and prints prints the count on a new line.
 * @param partial: A string denoting a partial name to search the app for
 */
function findPartial(partial) {
	var count = 0;
	
	for(let each of contacts){
		if(each.includes(partial))
			count++;
	}
	return count;
}

var contacts = [];

(function main() {
	var n = parseInt(readLine());
	var tempString = readLine().split('\n');
	tempString.pop();
	tempString.shift();
	
	if((n>=1)&&(n<=100000)){
		for(var a0=0;a0<n;a0++){
			var op_temp = tempString[a0].split(' ');
			var op = op_temp[0];
			var contact = op_temp[1];
			if(contact.length>=1 && contact.length<=21){
				if(op==='add'){
					addName(contact);
				}
				else if(op==='find'){
					console.log(findPartial(contact));
				}
			}
		}
	}
}());
