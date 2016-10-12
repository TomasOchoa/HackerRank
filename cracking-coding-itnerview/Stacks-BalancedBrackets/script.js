/**
 * Created by Tom's Desktop on 10/11/2016.
 */
"use strict";

//Main
(function (){
    var t  = 3;                         //Integer that denotes the number of strings
    // var expression = '{[()]}';       //First string to test. (Balanced)
    // var expression = '{[(])}';       //Second string to test (Not balanced)
    var expression = '{{[[(())]]}}';    //Third test string. (Balanced)

    //Do check only if meet constraints
    if((t >= 1 && t <= 1000) && (expression.length >= 1 && expression.length <= 1000)){
        console.log(balancedBracket(expression));
    }
}());

/**
 * balancedBracket:
 * @param str The string of brackets to check if balanced
 * @returns 'YES' if balanced. 'NO' if not balanced.
 */
function balancedBracket(str){
    var expStack = [];      //Stack array that holds closed brackets
    var peek = '';          //Variable to hold the value at the top of the stack

    //Loop through the whole string first
    for(let bracket of str){
        //Peek at the top of the stack
        peek = expStack[expStack.length-1];

        //Push opening brackets
        if(bracket ==='{' || bracket==='(' || bracket==='['){
            expStack.push(bracket);
        }
        //Else it's a closing bracket, check if top is pair
        else {
            //Check for corresponding pairs
            if(peek === '{' && bracket === '}')
                expStack.pop();
            else if(peek === '[' && bracket === ']')
                expStack.pop();
            else if(peek === '(' && bracket === ')')
                expStack.pop();
            else
                return 'NO';
        }
    }
    return 'YES';
}