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

//Test cases
var test = {
    test1:{
        a:'add',
        b:'dad'
    },
    test2:{
        a:'abc',
        b:'cde'
    },
    test3:{
        a:'abcdefg',
        b:'aabbccddeeffgg'
    },
    test4:{
        a:'abcdefgh',
        b:'gfedcba'
    },
};

/*
* main:
* -Defined test cases:
*   -test1: a='add',b='dad'
*   -test2: a='abc',b='cde'
*   -test3: a='abcdefg',b='aabbccddeeffgg'
*   -test4: a='abcdefgh',b='gfedcba'
* */
(function () {
    var a = test.test1.a;
    var b = test.test1.b;

    anagram(a,b);
}());

function anagram(a,b){
    // var aSize = a.length;
    // var bSize = b.length;
    // var totalSize = aSize+bSize;

    //Variables to hold maps of each letter and their occurences
    var aMap = new Map();
    var bMap = new Map();
    var key = {};

    //Map keys for string a
    for(let e of a){
        if(aMap.has(e)){
            key = aMap.get(e);
            key++;
            aMap.set(e,key);
        }
        else {
            aMap.set(e,1);
        }
    }
    //Map keys for string b
    for(let e of b){
        if(bMap.has(e)){
            key = bMap.get(e);
            key++;
            bMap.set(e,key);
        }
        else {
            bMap.set(e,1);
        }
    }

    //Check if anagrams

    //if a has the same keys and values
        //Its an anagram, return 0
    //Else
        //Not an anagram, figure out the amount of characters necessary to convert to an anagram
        //Return that amount

    // console.log(aMap);
    // console.log(bMap);
}
