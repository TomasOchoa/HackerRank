/**
 * Created by Tom's Desktop on 10/14/2016.
 */
"use strict";

//======================================CODE FOR HACKERRANK========================================

//
// /**
//  * Main:
//  */
// function main() {
//     var n = parseInt(readLine());
//     var list = [];
//
//     //Constraints
//     if(n >= 1 && n <= 100000){
//         for(var i=0;i<n;i++){
//             a = readLine().split(' ');
//             a = a.map(Number);
//             list.push(a.join());
//         }
//         doRunningMedian(n,list);
//     }
//
// }
//
// /**
//  * isOdd: Helper method that checks if odd
//  * @param n Number to check
//  * @return {boolean} True if Odd. False if even
//  */
// function isOdd(n){
//     return Math.abs(n%2) == 1;
// }
//
// /**
//  * doRunningMedian
//  * @param n Number of input
//  * @param input Actual stream of n inputs
//  */
// function doRunningMedian(n,input){
//     var list = [];              //Empty list
//     //var median = 0;             //Median
//
//     //Loop n times
//     for(var i=0;i<n;i++){
//         list.push(parseInt(input[i]));                    //Push to list
//         list.sort(function (a,b) {
//             if(a>b)
//                 return 1;
//             if(a < b)
//                 return -1;
//             return 0;
//         });        //Sort it after pushing
//
//         if(i==0)
//             console.log(Number(list[0]).toFixed(1));
//         //Figure if even/odd
//         else{
//             //Get Middle || Start of Middle
//             var middle = Math.floor((list.length-1)/2);
//
//             //If even, mean = e[middle] + e[middle+1]
//             if(!isOdd(list.length))
//                 console.log(Number((list[middle]+list[middle+1])/2).toFixed(1));
//             else
//             //If odd, mean is middle
//                 console.log(Number(list[middle]).toFixed(1));
//         }
//     }
// }

//======================================CODE FOR MY IDE========================================
//NOTE: This is MY VERSION of solving it. Heap version coming next
(function main() {
    //Input
    // var rawInput = '6\n12\n4\n5\n3\n8\n7';      //Sample Input
    var rawInput = '10\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10';      //Case 0
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

function isOdd(n){
    return Math.abs(n%2) == 1;
}

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
