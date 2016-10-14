/**
 * Created by Tom's Desktop on 10/14/2016.
 */
public class IsBinarySearchTree {
/*
Hidden stub code will pass a root argument to the function below. Complete the function to solve the challenge. Hint: you may want to write one or more helper functions.
The Node class is defined as follows:
    class Node {
        int data;
        Node left;
        Node right;
    }
*/
    ArrayList<Integer> treeData = new ArrayList<Integer>();         //Global arraylist to hold tree data varaibles in post depth order

    //Check BST
    boolean checkBST(Node root) {
        //If tree not empty, traverse
        if(root != null)
            traverse(root);

        //If
        ListIterator<Integer> treeDataIter = treeData.listIterator();
        int curr,next = 0;

        //While iterator has a next value and within bounds
        while(treeDataIter.hasNext() && treeDataIter.nextIndex() < treeData.size()-1){
            curr = treeDataIter.next();         //Current data value
            next = treeData.get(treeDataIter.nextIndex());  //Next data value

            //Check if doesnt meet properties of binary tree. If not, return false
            if(curr > next || curr == next)
                return false;
        }
        //If reaches here, it is a BST
        return true;
    }
    //Traverse (in order)
    void traverse(Node node){
        if(node.left != null)
            traverse(node.left);

        //Insert data in arraylist
        treeData.add(node.data);

        if(node.right != null)
            traverse(node.right);
    }
}
