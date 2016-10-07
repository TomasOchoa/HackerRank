/**
 * Created by Tom's Desktop on 10/7/2016.
 */

"use strict";

/**
 * Main:
 */
(function(){
    // var magazine = ['give','me','one','grand','today','night3'];     //Available words in magazine
    // var ransom = ['give','one','grand','today'];                    //Letters that make up the note
    // console.log(m,n,magazine,ransom);
    // console.log(ransomNote(m,n,magazine,ransom));
    var m = 15;      //Number of words available in magazine
    var n = 17;      //Number of words that make up the ransom note

    var magazine = [];
    var mag = 'o l x imjaw bee khmla v o v o imjaw l khmla imjaw x'.split(' ');
    for(let word of mag){
        magazine.push(word)
    }

    var ransom = [];
    var r='imjaw l khmla x imjaw o l l o khmla v bee o o imjaw imjaw o'.split(' ');
    for(let word of r){
        ransom.push(word);
    }

    // console.log(magazine);
    // console.log(magazine.length === m);
    // console.log();
    // console.log(ransom);
    // console.log(ransom.length === n);
    // console.log();

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
    var noteMap = new Map(mapper(note));

    //Flag that is set to true
    var CAN_ENCRYPT = false;

    //Check constraints
    if((1 <= m && m <= 30000) && (1 <= n && n <= 30000)){
        //Check if the ransom note can be recreated ONLY using available words in the magazine
        //Check magazine map if the word is in there
        for(let mappedWord of noteMap){
            var searchWord = mappedWord[0];
            var inRansomNote = mappedWord[1];

            //Check if in map
            if(magMap.has(searchWord)){
                var inMagazine = magMap.get(searchWord);

                //If note has searchWord <= that in magazine, you can encrypt the note
                if(!(inRansomNote <= inMagazine)){
                    CAN_ENCRYPT=false;
                    break;
                }
                else
                    CAN_ENCRYPT=true;
            }
        }
    }
    return CAN_ENCRYPT == true ? 'Yes':'No';
}
