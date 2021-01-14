/*
Time Complexity:
siftUp & siftDown:  O(logN)		
Insert & Remove:    O(logN)
BuildHeap:          O(N)
		- siftDown is not ALWAYS O(logN)
		- The closer the node belongs to the bottom, the close to O(1) it runs
		- The higher up the node is, the closer to O(logN) it runs
		- Majority of the nodes we call siftDown on are closer
		  to the bottom, so closer to O(1)
		- As opposed to siftUP, the closer to bottom, the closer to O(logN) it runs

ROOT is always the MIN value
Every parent node is strictly less than its children nodes
ParentIdx = Math.floor((idx-1)/2)	LeftChildIdx = 2*i+1	RightChildIdx = 2*i+2
*/
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array)
  }

  buildHeap(array) {
    let firstParentIdx = Math.floor((array.length - 2) / 2)

    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array)
    }
    return array
  }

  // If there's a smaller child, swap with current (parent)
  // Starting from idx 0, keep comparing with 2 children elements
  // We'll swap with the SMALLER child then walk down
  siftDown(currentIdx, endIdx, heap) {
    let leftChildIdx = currentIdx * 2 + 1

    // Just check leftChild first since if theres no left, there cant be a right
    while (leftChildIdx <= endIdx) {
      let smallerChildIdx = leftChildIdx

      let rightChildIdx = currentIdx * 2 + 2
      if (rightChildIdx <= endIdx && heap[rightChildIdx] < heap[leftChildIdx]) {
        smallerChildIdx = rightChildIdx
      }

      if (heap[smallerChildIdx] < heap[currentIdx]) {
        this.swap(smallerChildIdx, currentIdx, heap)
        currentIdx = smallerChildIdx
        leftChildIdx = currentIdx * 2 + 1
      } else {
        break
      }
    }
  }

  // Starting from the last idx, compare to parent element
  // While parent is greater than current, keep swapping, then walk up
  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2)

    while (currentIdx > 0 && heap[parentIdx] > heap[currentIdx]) {
      this.swap(parentIdx, currentIdx, heap)

      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
    }
  }

  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)
  }

  // To remove the minimum element (at the 0th idx) we first swap(latestIdx, 0)
  // This we'll put the min element at the end, which we can pop() to remove
  // Now the last element is at index 0, we need to siftDown() to mvoe it down to correctIdx
  remove() {
    this.swap(0, this.heap.length - 1, this.heap)
    let valueToRemove = this.heap.pop()

    this.siftDown(0, this.heap.length - 1, this.heap)
    return valueToRemove
  }

  peek() {
    return this.heap[0]
  }

  swap(idx1, idx2, heap) {
    [heap[idx1], heap[idx2]] = [heap[idx2], heap[idx1]]
  }
}
