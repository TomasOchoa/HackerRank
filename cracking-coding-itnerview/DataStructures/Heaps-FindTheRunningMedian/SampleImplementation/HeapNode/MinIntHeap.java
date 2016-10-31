package HeapNode;
import java.util.Arrays;

/**
 * Created by Tom's Desktop on 10/18/2016.
 */
public class MinIntHeap {
    private int capacity = 10;
    private int size = 0;

    int [] items = new int[capacity];

    //Parent/Child getters
    private int getLeftChildIndex(int parentIndex){return 2 * parentIndex + 1;}
    private int getRightChildIndex(int parentIndex){return 2 * parentIndex + 2;}
    private int getParentIndex(int childIndex){return (childIndex - 1) / 2;}

    //Parent/Child checkers
    private boolean hasLeftChild(int index){return getLeftChildIndex(index) < size;}
    private boolean hasRightChild(int index){return getRightChildIndex(index) < size;}
    private boolean hasParent(int index){return getParentIndex(index) >= 0;}

    //Parent/Child Node content
    private int leftChild(int index){return items[getLeftChildIndex(index)];}
    private int rightChild(int index){return items[getRightChildIndex(index)];}
    private int parent(int index){return items[getParentIndex(index)];}

    //Swap
    private void swap(int indexOne, int indexTwo){
        int temp = items[indexOne];
        items[indexOne] = items[indexTwo];
        items[indexTwo] = temp;
    }

    //Ensure Capacity
    private void ensureCapacity(){
        if(size == capacity){
            items = Arrays.copyOf(items, capacity * 2);
            capacity *= 2;
        }
    }

    //Peek:
    public int peek(){
        if(size == 0) throw new IllegalStateException();
        return items[0];
    }

    //Poll:
    public int poll() {
        //If array is empty, throw exception
        if (size == 0) throw new IllegalStateException();

        //Else return and remove item
        int item = items[0];            //Get value
        items[0] = items[size-1];       //Get last element in array, and make it root
        size--;                         //Shrink the array (size)
        heapifyDown();                  //Reheapify

        return item;
    }

    //Add:
    public void add(int item){
        ensureCapacity();            //Ensure there is capacity
        items[size] = item;          //Add element into the very last spot
        size++;                      //Increment size
        heapifyUp();                 //Heapify upwards
    }

    //HeapifyUp:
    public void heapifyUp(){
        int index = size - 1;        //Decrement Size

        while(hasParent(index) &&               //While the node has a parent and the data in the parent
              parent(index) > items[index]){    //node is greater than that of the current node
            swap(getParentIndex(index), index);     //Swap the parent with the current
            index = getParentIndex(index);          //Set index to the index of the parent
        }
    }

    //HeapifyDown:
    public void heapifyDown(){
        int index = 0;                      //Start at root

        //While has left child
        while(hasLeftChild(index)) {
            int smallerChildIndex = getLeftChildIndex(index);                   //Variable to hold the index of the smaller child (leftChildIndex)

            //If has a right child && right child data is < left child data
            if(hasRightChild(index) && rightChild(index) < leftChild(index))
                smallerChildIndex = getRightChildIndex(index);    //Set smaller index of small child to the index of the right child

            //If the data in current node is less than the data in the smaller child element
            if(items[index] < items[smallerChildIndex])
                break;    //Break
            //Else if not case, heap is still out of order
            else
                swap(index, smallerChildIndex);    //swap index with index of smaller child

            //Set index to the index of smaller child
            index = smallerChildIndex;
        }
    }
}


