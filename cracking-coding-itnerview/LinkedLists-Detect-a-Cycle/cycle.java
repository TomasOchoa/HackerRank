/*
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as: 
    class Node {
        int data;
        Node next;
    }
*/
//boolean hasCycle(Node head) {
//    //Check if empty
//    if(head == null)
//        return false;
//
//    //Setup pointers
//    Node curr = head;
//    Node next = head.next;
//
//    //While curr is not next
//    while(curr != next){
//        //Cycle through the list
//        //if(next == null){
//        if(next == null || next.next == null){
//            return false;
//        }
//        curr = curr.next;
//        next = next.next.next;
//
//    }
//
//    //If it reaches here, curr was next, meaning a cycle, thus return true
//    return true;
//}
