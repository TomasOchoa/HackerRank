/**
 * Created by Tom's Desktop on 10/11/2016.
 */
"use strict";

//Main
(function (){
    var t  = 3;                         //Integer that denotes the number of strings
    // var expression = '{[()]}';       //First string to test. (Balanced)
    // var expression = '{[(])}';       //Second string to test (Not balanced)
    // var expression = '{{[[(())]]}}';    //Third test string. (Balanced)
    var expression = '{[{((({}{({({()})()})[]({()[[][][]]}){}}))){}}]}{}{({((){{}[][]{}[][]{}}[{}])(())}[][])}'; //Test case 4, line 17. (NO)
    // var expression = '{';

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
// function balancedBracket(str){
//     if(str.length === 1){
//         return 'NO';
//     }
//
//     var expStack = [];      //Stack array that holds closed brackets
//     var peek = '';          //Variable to hold the value at the top of the stack
//     var bracket = '';       //Variable to hold the vale of the bracket at i (For syntactical purposes)
//
//     for(var i=0;i<str.length;i++){
//         bracket = str[i];
//         peek = expStack[expStack.length-1];
//
//         //If loop iteration started and peek undefined, that means there are multiple balanced brackets. (Not within each other)
//         //If open, push to stack
//         if((bracket === '{' || bracket === '[' || bracket === '(')){
//             expStack.push(bracket);
//         }
//         else if(i>0 && peek === undefined){
//             return 'NO';
//         }
//         //Check for open/closed brackets and pairings
//         else {
//             //If a pair exists, pop the closing pair bracket from stack
//             if((peek === '{' && bracket === '}') || (peek === '[' && bracket === ']') || (peek === '(' && bracket === ')'))
//                 expStack.pop();
//             //Else unbalanced
//             else
//                 return 'NO';
//         }
//     }
//     //If program reaches here, bracket is balanced
//     return 'YES';
// }

//2nd version
function balancedBracket(str){
    if(str.length === 1){
        return 'NO';
    }

    //If reaches here, then balanced
    return 'YES';
}