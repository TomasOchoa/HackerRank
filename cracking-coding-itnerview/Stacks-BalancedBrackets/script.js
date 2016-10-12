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
        for(var i=0;i<3;i++){
            //Call balanced bracket
            console.log(balancedBracket(s));
        }
    }
}());

function balancedBracket(str){
    console.log(str);
    return 'YES';
}

