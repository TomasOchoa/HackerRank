/**
 * Created by Tom's Desktop on 10/7/2016.
 */

/*
Sample Input:

6 4
give me one grand today night
give one grand today

*/
"use strict";

/**
 * Main:
 */
(function(){

    var m = 6;      //Number of words available in magazine
    var n = 4;      //Number of words that make up the ransom note

    var magazine = ['give','me','one','grand','today','night'];     //Available words in magazine
    var ransom = ['give','one','grand','today'];                    //Letters that make up the note

    // console.log(ransomNote(m,n,magazine,ransom));
    ransomNote(m,n,magazine,ransom);

}());

function mapper (wordBank){

    var wordMap = new Map();

    //Map words passed
    for(let word of wordBank){
        //Check constraints (length of any word MUST be <= 1 && <= 5)
        if(word.length > 5){
            continue;
        }
        else if(!wordMap.has(word)){
            wordMap.set(word,0);
        }
        var key = wordMap.get(word);
        key++;
        wordMap.set(word,key);
    }
    return wordMap;
}

/**
 * ransomNote:
 */
function ransomNote(m,n,mag,note) {

    //Check constraints
    if((1 <= m && m <= 30000) && (1 <= n && n <= 30000)){

    }
    else{
        console.log('constraints bad');
        return;
    }

    //Map variables
    var magMap = new Map(mapper(mag));
    var ransomMap = new Map(mapper(note));




    console.log(magMap);
    console.log(ransomMap);



}
