/**
 * Created by Tom's Desktop on 10/31/2016.
 */

"use strict";

//Main
(function(){

    var n = 3;
    var a = [1,2,3];

    //Call do sort
    doSort(n,a);

})();

/**
 * Function: doSort(n,A)
 * @param n Denotes the number of elements in array A
 * @param a n space-separated integers descripbing the respective values
 */
function doSort(n,a){
    // console.log('Before:',a);

    console.log('Array is sorted in '+bubbleSort(a),'swaps.');
    console.log('First Element: '+a[0]);
    console.log('Last Element: '+a[a.length-1]);
}

/**
 * Function: bubbleSort(a)
 * @param a  Array to bubble sort.
 */
function bubbleSort(a) {
    //Track the number of elements swapped during a single array traversal
    var numberOfSwaps = 0;
     for(var i=0;i < a.length;i++){
         for(var j=0;j < a.length - 1;j++){
             //Swap adjacent elements if they are in decreasing order
             if(a[j] > a[j+1]){
                 swap(a,a.indexOf(a[j]),a.indexOf(a[j+1]));
                 numberOfSwaps++;
             }
         }
         //If no elements we swapped during a traversal, array is sorted
         if(numberOfSwaps === 0)
             break ;
    }
    return numberOfSwaps;
}

function swap(a,index1, index2){
    var lesser = a[index2];
    var greater = a[index1];
    a[index1] = lesser;
    a[index2] = greater;
}
