/**
 * Created by Tom's Desktop on 10/12/2016.
 */

"use strict";

//Main
(function(){
    var _input = ['10','1 42','2','1 14','3','1 28','3','1 60','1 78','2','2'];
    processData(_input);

}());


/**
 * Class: Queue
 * - Definition of a queue
 */
function Queue(){
//Properties
    this.queue = [];
    this.front = this.queue[0];
//Methods
    //Enqueues a value. (New value becomes tail)
    this.enqueue =  function (element) {
        this.queue.push(element);
        //Update front
        this.front = this.queue[0];
    };
    //dequeues value at the head of the queue
    this.dequeue = function () {
        this.queue.shift();
        this.front = this.queue[0];
    };
//Print the value at the head of the queue
    this.print = function () {
        console.log(this.front);
    };
}

/**
 * processData
 * @param input Array that holds queries
 * 1. enqueue
 * 2. dequeue
 * 3. Print head
 */
//For compatible
// function processData(input) {
//     var queueInstructions = input.split('\n');      //Get instriction set
//     var q = parseInt(queueInstructions[0]);         //q
//     var queue = new Queue();                        //Queue constructor
//
//     for(var i=1;i <= q;i++){
//         var query = queueInstructions[i].split(' ');//For syntactical purposes
//         var type = parseInt(query[0]);
//
//         if(type===1){var x = parseInt(query[1]);    //Element to queue
//             queue.enqueue(x);
//         }
//         else if (type === 2)
//             queue.dequeue();
//         else if (type === 3){
//             console.log(type);
//             queue.print();
//         }
//     }
// }
//My Version (NOT COMPATIBLE WITH PROBLEM)
function processData(input) {
    var q = parseInt(input[0]);                 //Number of queries
    var queueInstructions = input.splice(1);    //instruction set
    var queue = new Queue();

    //Check constraints of q
    if(q >= 1 && q <= 100000){
        for(var i=0;i < q;i++){
            var query = queueInstructions[i].split(' ');//For syntactical purposes
            var type = parseInt(query[0]);

            //Check for constraints of type
            if((type===1) && (type <= 1 && type <= 3)){
                var x = parseInt(query[1]);    //Element to queue
                //Check for x constraints
                if(Math.abs(x)>= 1 && Math.abs(x) <= 100000)
                    queue.enqueue(x);
            }
            else if (type === 2)
                queue.dequeue();
            else if (type === 3)
                queue.print();
        }
    }
}