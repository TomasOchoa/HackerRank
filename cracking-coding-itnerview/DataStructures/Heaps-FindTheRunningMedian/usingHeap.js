/**
 * Created by Tom's Desktop on 10/18/2016.
 */
"use strict";


//ES5
var MinDoubleHeap = function(n){
//----- Var Init -----
    this.capacity = n;
    this.size = 0;
    this.list = [];
    this.median = this.list[0];

//----- "Getters" & Helpers -----
    //Parent/Child Getters
    this.getLeftChildIndex = function (parentIndex) { return 2*parentIndex + 1;};
    this.getRightChildIndex = function (parentIndex) { return 2*parentIndex + 2; };
    this.getParentIndex = function (childIndex) { return (childIndex - 1) / 2; };

    //Parent/Child Checkers
    this.hasLeftChild = function(index) { return (this.getLeftChildIndex(index) < this.size)};
    this.hasRightChild = function(index) { return (this.getRightChildIndex(index) < this.size)};
    this.hasParent = function(index) { return (this.getParentIndex(index) >= 0)};

    //Parent/Child Node Content
    this.leftChild = function(index) { return this.list[this.getLeftChildIndex(index)]};
    this.rightChild = function(index) { return this.list[this.getRightChildIndex(index)]};
    this.parent = function(index) { return this.list[this.getParentIndex(index)]};

//----- Member Methods -----
    //Swap
    this.swap = function (indexA, indexB) {
        var temp = this.list[indexA];
        this.list[indexA] = this.list[indexB];
        this.list[indexB] = temp;
    };

    //Ensure Capacity
    this.ensureCapacity  = function () {
        if(this.size === this.capacity){
            for(var i=0;i<this.capacity;i++)
                this.push(null);

            this.capacity *= 2;
        }
    };

    //Peek
    this.peek = function () {
        if(this.size === 0)
            throw new EvalError;

        return this.list[0];
    };

    //Poll
    this.poll = function () {
        //If arry is empty throw exception
        if(this.size === 0)
            throw new EvalError;
        //else return item and remove from array
        var listItem = this.list[0];
        this.list[0] = this.list[this.size - 1];
        this.size--;
        this.heapifyDown();

        return listItem;
    };

    //Add
    this.add  = function (item) {
        this.ensureCapacity();
        this.list[this.size] = item;
        this.size++;
        this.heapifyUp();
    };

    //HeapifyUp
    this.heapifyUp  = function () {
        var index = this.size - 1;

        while(this.hasParent(index) && this.parent(index) > this.list[index]){
            this.swap(this.getParentIndex(index),index);
            index = this.getParentIndex(index);
        }

    };

    //HeapifyDown
    this.heapifyDown  = function () {
        var index = 0;

        while(this.hasLeftChild(index)){
            var smallerChildIndex = this.getLeftChildIndex(index);

            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index))
                smallerChildIndex = this.getRightChildIndex(index);

            if(this.list[index] < this.list[smallerChildIndex])
                break;
            else
                this.swap(index,smallerChildIndex);
        }
    };

    //PrintList
    this.printHeap = function () {
        for(let node of this.list)
            console.log(node);
    };

//----- Meadian Methods ------
    //IIFE

};


/**
 * Main:
 */
(function () {
    //Input setup
    var input = '6\n12\n4\n5\n3\n8\n7';
    var inputArr = input.split('\n');
    for(let each of inputArr){ inputArr[inputArr.indexOf(each)] = parseInt(each);}

    //Init n
    var n = inputArr.shift();

    //Instantiate a new heap
    var myHeap = new MinDoubleHeap(n);

    //Push values
    for(let data of inputArr){
        console.log(data);
        myHeap.add(data);
        console.log(myHeap.list,myHeap.roo);
    }






}());



//Using ES6 Classes (Look up)
/**
 * MinHeap: Class definition
 */
// class MinDoubleHeap {
// //Default Constructor
//     constructor(n) {
//         this.capacity = n;
//         this.list = function () {
//             for(var i=0;i<this.capacity;i++){
//                 this.list().push(null);
//             }
//         };
//     }
//
// //Getters/Helper Methods
//     get median(){ return this.calcMedian(); }   //Get Median
//     get size(){return this.size;}
//
//
// //Methods
//     calcMedian(){
//         for(let each of this.list){
//             //console.log(each);
//         }
//     }
// }