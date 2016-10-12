/**
 * Created by Tom's Desktop on 10/11/2016.
 */
"use strict";

//Main
(function (){
    var n  = 3;                 //Integer that denotes the number of strings
    var s = '{[()]}';          //First string to test. (Balanced)
    // var s = '{[(])}';          //Second string to test (Not balanced)
    // var s = '{{[[(())]]}}';    //Third test string. (Balanced)

    //Do check only if meet constraints
    if((n >= 1 && n <= 1000) && (s.length >= 1 && s.length <= 1000)){
        //For loop to check each string
        // for(var i=0;i<3;i++){
            //Call balanced bracket
            console.log(balancedBracket(s));
            // balancedBracket(s);
        // }
    }
}());

function balancedBracket(str){
    var expStack = [];
    var peek = '';

    //Loop through the whole string first
    for(let bracket of str){
        //Peek at the top of the stack
        peek = expStack[expStack.length-1];

        //Push opening brackets
        if(bracket ==='{' || bracket==='(' || bracket==='['){
            expStack.push(bracket);
            // console.log("'"+bracket+"' is an open bracket");
            // console.log("top of stack: '"+peek+"'");
        }
        //Else it's a closing bracket, check if top is pair
        else {
            // console.log("'"+bracket+"' is a closing bracket");
            // console.log("top of stack: '"+peek+"'");

            if((peek === '{' && bracket === '}') || (peek === '[' && bracket === ']') || (peek === '(' && bracket === ')')){
                expStack.pop();
                // console.log('match...continue');
            }
            else{
                return 'NO';
            }
        }
    }
    return 'YES';
}

