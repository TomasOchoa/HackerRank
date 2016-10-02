"use strict";

function rotateLeft(n,d,a){
    //base case
    if(d == 0)
        return a;
    else if (d >= 1 && d <= n){
        var temp = [];                          //Temp to store result
        var firstEl = a.shift();                //First element of original
        var remaining = a.slice(0);             //Remaining elements

        //Do rotation
        temp = temp.concat(remaining);
        temp.push(firstEl);

        //Recursive call
        return rotateLeft(n,d-1,temp);
    }
}
//Initialize Variables
var n = 5;
var d = 4;
var arr = [1,2,3,4,5];

//Print answer
console.log(rotateLeft(n,d,arr).join(" "));