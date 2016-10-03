/*
* Author: Tomas Ochoa
* Date: 10/3/16
* */
"use strict";

//Method that does rotation
function doLeftRotation(a){
    //Pop off element from the front of the array and save it in a local var
    var firstEl = a.shift();

    //Push to first to array
    a.push(firstEl);
}

//Method that checks constraints and rotates 'd' times
function rotateLeft(n,d,a){
    //Check constraints
    if( (n >= 1 && n <= 100000) && (d >= 1 && d <= n) &&  (a.length >= 1 && a.length <= 1000000)){
        //Do d rotations d times
        for (var i = 0; i < d; i++) {
            //Call
            doLeftRotation(a);
        }
    }
}

(function(){
    var n = 5;      //Number of elements that arr will have
    var d = 4;      //Number of rotations
    var arr = [1,2,3,4,5];  //Array

    rotateLeft(n,d,arr);

    //Print answer
    console.log(arr.join(" "));

})();