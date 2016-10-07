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

    var magazine = ['give','me','one','grand','today','night3'];     //Available words in magazine
    var ransom = ['give','one','grand','today'];                    //Letters that make up the note

    // console.log(ransomNote(m,n,magazine,ransom));
    console.log(ransomNote(m,n,magazine,ransom));

}());

/**
 * alphabetVerify:
 * - Verifies if a word parameter contains characters 'a'-'z' and 'A'-'Z'
 * @param word Word to verify
 * @return isLetter False if contains anything that is not a letter
 */
function alphabetVerify(word){
    var isLetter;

    //Check each letter in string and verify it is an ascii code for a letter (a-z || A-Z)
    for(let char of word){
        if(!((char.charCodeAt() >= 97 && char.charCodeAt() <= 122) || (char.charCodeAt() >= 65 && char.charCodeAt() <= 90))){
            isLetter = false;
            break;
        }
        else
            isLetter = true;
    }
    return isLetter;
}

/**
 * mapper:
 * - Function that maps array of words
 * @param wordBank Array of words
 * @return {Map}
 */
function mapper (wordBank){

    var wordMap = new Map();

    //Map words passed
    for(let word of wordBank){
        word = word.toLowerCase();

        //Check constraints (length of any word MUST be <= 1 && <= 5)
        if(!(word.length > 5 && alphabetVerify(word))){
            if(!wordMap.has(word)){
                wordMap.set(word,0);
            }
            var key = wordMap.get(word);
            key++;
            wordMap.set(word,key);
        }
    }
    return wordMap;
}

/**
 * ransomNote: Decides if a ransome not can be encrypted using magazine words
 * @param m Number of magazine words inputed
 * @param n Number of words in the ransom note
 * @param mag Array of the words within the magazine
 * @param note Array of the words that create the note
 * @return 'Yes' if possible, 'No' if not
 */
function ransomNote(m,n,mag,note) {

    //Map variables
    var magMap = new Map(mapper(mag));

    //Check constraints
    if((1 <= m && m <= 30000) && (1 <= n && n <= 30000)){
        if(mag.length === m && note.length === n){

            //Check if the ransome note can be recreated ONLY using available words in the magazine
            for(let word of note){
                //Check mag map
                if(!magMap.has(word)){
                    return 'No';
                }
                // else {
                //     console.log(word,'isnt in magazine.Cant be hashed');
                // }
            }
            return 'Yes';
        }
    }
}
