/**
 Created by Tom's Desktop on 10/5/2016.
 A NOTE ON MAPS:

 Maps do not support the [subscript] notation used by Objects.
 That syntax implicitly casts the subscript value to a primitive string or symbol.
 Maps support any values as keys, so you must use the methods

 .get(key)
 .set(key, value)
 .has(key)

 var m = new Map();
 var key1 = 'key1';
 var key2 = {};
 var key3 = {};

 m.set(key1, 'value1');
 m.set(key2, 'value2');

 console.assert(m.has(key2), "m should contain key2.");
 console.assert(!m.has(key3), "m should not contain key3.");
 */

"use strict";
//main:
(function () {
    // var a = test.test2.a;
    // var b = test.test2.b;
    var a = 'cde';
    var b = 'abc';
    anagram(a,b);
    //Only perform action if constraints are met
    // if((a.length>=1 && a.length <= 10000)&&((b.length>=1 && b.length <= 10000))){
    //     console.log(anagram(a,b));
    // }
}());

/*
* mapper:
* - Returns a mapped string that contains unique
*   letters used and number of occurrences
* */
function mapper (str) {
    var stringMap = new Map();

    for(let char of str){
        if(!stringMap.has(char))
            stringMap.set(char,1);
        else {
            var key = stringMap.get(char);
            key++;
            stringMap.set(char,key);
        }
    }
    return stringMap;

}

/*
* anagram:
* - Returns the number of letters to remove from
*   both strings for both to be anagrams of each other
*   - 0 == anagram
*   - n>0 == number of letters necessary to remove to be an anagram
* */
function anagram(a,b) {
    var aMap = new Map(mapper(a));
    var bMap = new Map(mapper(b));

    var charsSeen = [];
    var totalSize=a.length+b.length;
    var sameChars=0;

    for(let char of a){
        //If seen char, continue
        if(charsSeen.indexOf(char) != -1){
            // console.log('seen');
            continue;
        }
        else {
            // console.log('!seen');
            if(bMap.has(char)){
                var inA = aMap.get(char);
                var inB = bMap.get(char);
                sameChars += Math.abs(inA+inB);
            }
        }
        charsSeen.push(char);
    }

    var retVal = Math.abs(totalSize-sameChars);
    console.log(retVal);

    //Calculate how many to remove to make anagram
    //if 0: It is an anagram
    //else: Number of letters to remove to make anagram
}

//CODE GRAVEYARD
// function anagram(a,b){
//Flag to check if a > b || a < b
// var is_aSmaller = a.length < b.length;
// var inString = new Map();
// var sameSize = a.length === b.length;

//If a and b same length
// if(sameSize){
//     var toRemove = a.length+b.length;
//
//     for(let charA of a){
//         for(let charB of b){
//             if(charA===charB){
//                 toRemove= Math.abs(toRemove-2);
//             }
//         }
//     }
//     console.log(toRemove);
// }
// //Else check which string is bigger
// else{
//     console.log(is_aSmaller);
// }
// console.log(is_aSmaller,sameSize);
//
//
//     //Variables to hold maps of each letter and their occurrences
//     var aMap = new Map();
//     var bMap = new Map();
//     var key = {};
//
//     //Map keys for string a
//     for(let e of a){
//         if(aMap.has(e)){
//             key = aMap.get(e);
//             key++;
//             aMap.set(e,key);
//         }
//         else {
//             aMap.set(e,1);
//         }
//     }
//     //Map keys for string b
//     for(let e of b){
//         if(bMap.has(e)){
//             key = bMap.get(e);
//             key++;
//             bMap.set(e,key);
//         }
//         else {
//             bMap.set(e,1);
//         }
//     }
//
//     //Iterators for maps
//     var aMapIter = aMap.entries();
//     var bMapIter = bMap.entries();
//
//     var isAnagram = false;
//
//     for(let c of a){
//         var count = 0;
//         if(bMap.has(c)){
//             if(count == bMap.size){
//                 break;
//             }
//             count++;
//             isAnagram=true;
//         }
//         else if(!bMap.has(c))
//             isAnagram=false;
//     }
//     console.log(isAnagram);
//
//     // for(var pair of aMapIter){
//     //     console.log(pair);
//     //     console.log(aMapIter.next().valueOf().);
//     // }
//     // console.log(aMapIter.next());
//     // console.log(aMapIter.next());
//     // console.log(aMapIter.next());
//
//
//
//
//
//
//     // if(aMap.size===bMap.size){
//     //     //Flag that stays true if the strings are still anagrams
//     //     var val;
//     //     do{
//     //         console.log(aMapIter.next().value());
//     //     }while (aMapIter.next().value!=null);
//     //     // console.log(aMapIter.next());
//     //     // console.log(aMapIter.next());
//     //
//     //
//     //
//     //
//     // }
//
//     // console.log(aMap);
//     // console.log();
//     // console.log(bMap);
//
//
//     //if a has the same keys and values
//         //Its an anagram, return 0
//     //Else
//         //Not an anagram, figure out the amount of characters necessary to convert to an anagram
//         //Return that amount
//
//     // console.log(aMap);
//     // console.log(bMap);
// }
// console.log(sameSize);
// for(let charA of a){
//     for(let charB of b){
//         if(charA===charB && !inString.has(charA)){
//             inString.set(charA,1);
//             console.log(charA,charA);
//             break;
//         }
//         else if (charA===charB && inString.has(charA)){
//             console.log(charB,'is mapped, increment');
//             var count = inString.get(charA);
//             count++;
//             inString.set(charA,count);
//         }
//         else{
//             console.log(a,b);
//         }
//     }
//     console.log(inString.entries());
// }
