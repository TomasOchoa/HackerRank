# Trees: Is this a Binary Search Tree?

For the purposes of this challenge, we define a _binary search tree_ to be a binary tree with the following ordering properties:
- The `data` value of every node in a node's left subtree is less than the data value of that node.
- The `data` value of every node in a node's right subtree is greater than the data value of that node.

Given the root node of a binary tree, can you determine if it's also a binary search tree?

Complete the function in your editor below, which has **`1`** parameter: a pointer to the root of a binary tree. It must return
a _boolean_ denoting whether or not the binary tree is a binary search tree. You may have to write one or more helper
functions to complete this challenge.

**Note:** A binary tree is not a binary search if there are duplicate values.

### Input Format

You are not responsible for reading any input from stdin. Hidden code stubs will assemble a binary tree and pass its
root node to your function as an argument.

### Constraints

- **`0 <= data <= 1000`**

### Output Format

You are not responsible for printing any output to stdout. Your function must return _true_ if the tree is a binary 
search tree; otherwise, it must return _false_. Hidden code stubs will print this result as a _Yes_ or _No_ answer on a new line.

### Sample Input

[Tree](https://s3.amazonaws.com/hr-challenge-images/8131/1461698192-c9e0fcb28d-BTinput.png)

### Sample Output

```
No
```
### Explanation

The tree in the diagram does not satisfy the ordering property for a Binary Search Tree, so we print `No`.