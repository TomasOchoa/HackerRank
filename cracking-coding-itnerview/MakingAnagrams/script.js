/**
 * Created by Tom's Desktop on 10/4/2016.
 */
"use strict";
/*
Constraints:
- a and b are >= 1 and <= 10000
- Strings a and b contain lowercase letters a-z (ascii 97-122)
*/

function makeAnagram(a,b){
    //Strings mapped
    var aMapped = mapper(a);
    var bMapped = mapper(b);

    for(let objA of aMapped){
        console.log(objA);
        for(let objB of bMapped){
            console.log(objB);
        }
    }
}

function anagram(a,b){
    //a is biggest => 1
    //b is biggest => 0
    //same size => -1
    var compareSize = function () {
        if(a.length > b.length)
            return 1;
        else if(a.length < b.length)
            return 0;
        return -1;
    };

    if(compareSize()== -1){
        var result = (function () {
            var toRemove = a.length+b.length;
            console.log(toRemove);
            for(var i=0;i<a.length;i++){
                for(var j=0;j<b.length;j++){
                    console.log(a[i],b[j]);
                    if(a[i]==b[j]){
                        break;
                    }
                    else {
                        console.log('toRemove');
                    }

                    // if(c == b[j]) {
                    //     console.log('match');
                    // }
                    // else if(c != b[j]){
                    //     console.log('Dont match');
                    //     toRemove--;
                    // }
                }
            }
            console.log(toRemove);
        })();

        // if(result()==0){
        //     console.log('Anagram');
        // }
        // else{
        //     console.log('!anagram');
        // }
    }
    else{
        // console.log('hello world');
        // makeAnagram();
    }










}

/*
* Mapper:
* - takes a string as argument
* - Converts to array and sorts it
* - Uses sorted array to create a map
* - returns map
**/
// function mapper(str) {
//     var strArr = [];        //Variable to hold the string in array format
//     var strMap = [];        //Variable for map
//
//     //Convert to Array
//     for(var i=0;i<str.length;i++){
//         strArr.push(str[i]);
//     }
//
//     //Sort the array
//     strArr = strArr.sort();
//
//     //variables to store prev,curr,and next values in for loop
//     var prev,curr,next=null;
//     var count = 0;
//
//     //Create a Map that holds the unique letters used, and numver of occurrences of each
//     for(i=0;i<strArr.length;i++){
//         curr=strArr[i];
//         next=strArr[i+1];
//
//         if(prev!=curr) {
//             count=1;
//             if(curr!=next){
//                 strMap.push({letter:curr,occurrences:count});
//             }
//         }
//         else {
//             count++;
//             if(curr!=next){
//                 strMap.push({letter:curr,occurrences:count});
//             }
//         }
//         prev=curr;
//     }
//     return strMap;
// }
//
// //Main Function
// (function () {
//     var a = 'dad';
//     var b = 'add';
//
//     anagram(a,b);
// })();
//
