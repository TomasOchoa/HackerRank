/**
 * Created by Tom's Desktop on 10/17/2016.
 */
/*
 * Complete the function below.
 */
"use strict";

//Main
(function (){
    var n = 6;
    StairCase(n);
}());

function StairCase(n) {

    for(var i=1;i<=n;i++){
        var spaces = Math.abs((n)-i);
        console.log(printSpaces(spaces)+printTag(i));
    }
}

//Helper Function
function printSpaces(spaces){
    var stringSpaces = '';
    for(var i=0;i<spaces;i++){
        stringSpaces += ' ';
    }
    return stringSpaces;
}

function printTag(tagsToPrint){
    var tags = '';
    for(var i=0;i<tagsToPrint;i++)
        tags += '#';
    return tags;
}