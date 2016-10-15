/**
 * Created by Tom's Desktop on 10/14/2016.
 */
"use strict";

/**
 * main:
 */
(function main() {
    //HACKERRANK DEFAULT CODE
    // var n = parseInt(readLine());
    // a = readLine().split(' ');
    // a = a.map(Number);
    // for(var i=0;i<n;i++){
    //     a = readLine().split(' ');
    //     a = a.map(Number);
    //     console.log(a);
    // }

    //MYCODE (Tried to mimic as much as possible as original)
    //Input
    var rawInput = '6\n12\n4\n5\n3\n8\n7';      //Sample Input
    // var rawInput = '10\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10';      //Case 0
    var input = rawInput.split('\n');

    //Initial Setup
    var n = parseInt(rawInput);
    var list = [];
    var a = 0;

    //Constraints
    if(n >= 1 && n <= 100000){
        for(var i=1;i<=n;i++){
            a = parseInt(input[i]);
            if(a >= 0 && a <= 100000)
                list.push(a);
        }
        doRunningMedian(n,list);
    }
}());

function doRunningMedian(n,input){
    var list = [];              //Empty list
    var median = 0;             //Median

    //Loop n times
    for(var i=0;i<n;i++){
        list.push(input[i]);                    //Push to list
        //console.log(list);
        list.sort(function (a,b) {
            if(a>b)
                return 1;
            if(a < b)
                return -1;
            return 0;
        });        //Sort it after pushing

        if(i==0)
            console.log(Number(list[0]).toFixed(1));
        //Figure if even/odd
        else{
            //Get Middle || Start of Middle
            var middle = Math.floor((list.length-1)/2);

            //If even, mean = e[middle] + e[middle+1]
            if(!isOdd(list.length))
                console.log(Number((list[middle]+list[middle+1])/2).toFixed(1));
            else
                //If odd, mean is middle
                console.log(Number(list[middle]).toFixed(1));
        }
    }
}

function isOdd(n){
    return Math.abs(n%2) == 1;
}
