/*
* Constraints:
* i)  1 <= |a|, |b| <= 10^4
* ii) It is guaranteed that a and b consist of lowercase English alphabetic letters (i.e. a-z)
*
* */

function numToRemove(a,b){
	a = a.split("");
	b = b.split("");
	
	var countA = a.length;
	var countB = b.length;
	var count = countA + countB;
	var pair = 0;
	for(var i = 0; i < countA;i++){
		for(var j = 0; j < countB; j++){
			if(a[i] == b[j]){
				b.splice(j,1);
				pair++;
				break;
			}
		}
	}
	return(count - (pair*2));
}

(function () {
	//var a = 'cde';
	//var b = 'abc';
	
	var a = 'imkhnpqnhlvaxlmrsskbyyrhwfvgteubrelgubvdmrdmesfxkpykprunzpustowmvhupkqsyjxmnptkcilmzcinbzjwvxshubeln';
	var b = 'wfnfdassvfugqjfuruwrdumdmvxpbjcxorettxmpcivurcolxmeagsdundjronoehtyaskpwumqmpgzmtdmbvsykxhblxspgnpgfzydukvizbhlwmaajuytrhxeepvmcltjmroibjsdkbqjnqjwmhsfopjvehhiuctgthrxqjaclqnyjwxxfpdueorkvaspdnywupvmy';
	
	console.log(numToRemove(a,b));
}());