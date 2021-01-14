/* 
   MIN Binary Heap    --  Lowest Priority element at the root   -- lower priority values have a higher priority
   MAX Binary Heap    --  Highest Priority element at the root  -- higher priority values have a higher priority
   
   For a Min Heap implementation, just need to change the comparator function
*/

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
    this.comparator = (a, b) => {
      if (a.priority > b.priority) return true
      else return false
    }
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1
    let element = this.values[idx]

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]

      if (this.comparator(element, parent) === false) break

      // otherwise swap them
      this.swap(idx, parentIdx)
      idx = parentIdx
    }
  }

  dequeue() {
    if (this.values.length === 0) console.log('nothing left')

    let maxPriority = this.values[0]
    let lastElement = this.values.pop()

    // Edge Case: If we only had 1 element before popping, now we have 0
    // We don't want to place the root we just popped off back into our array
    if (this.values.length > 0) {
      this.values[0] = lastElement
      this.bubbleDown()
    }

    return maxPriority
  }

  bubbleDown() {
    let parentIdx = 0
    let length = this.values.length
    let parent = this.values[0]

    while (true) {
      let leftChildIdx = parentIdx * 2 + 1
      let rightChildIdx = parentIdx * 2 + 2

      let leftChild, rightChild
      let smallerChildIdx = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]

        if (this.comparator(leftChild, parent)) {
          smallerChildIdx = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (this.comparator(rightChild, leftChild))
          smallerChildIdx = rightChildIdx
      }

      if (smallerChildIdx === null) break

      this.swap(parentIdx, smallerChildIdx)
      parentIdx = smallerChildIdx
    }
  }

  swap(idx1, idx2) {
    ;[this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ]
  }
}

// For Max Binary Heap, a HIGHER priority number has a higher priority
let ER = new PriorityQueue()
ER.enqueue('Common Cold', 1)
ER.enqueue('Gunshot Wound', 5)
ER.enqueue('High Fever', 2)
ER.enqueue('Broken Arm', 3)
ER.enqueue('Car Crash', 4)

console.log(ER)
console.log(ER.dequeue()) // should return the HIGHEST priority   gunshot = 5
console.log(ER.dequeue()) // car crash
console.log(ER.dequeue()) // broken arm
console.log(ER.dequeue()) // high fever
console.log(ER.dequeue()) // common cold
console.log(ER.dequeue()) // nothing left

// For Min Binary Heap, a LOWER priority numbers as a higher priority
// let ER = new PriorityQueue()
// ER.enqueue('Common Cold', 5)
// ER.enqueue('Gunshot Wound', 1)
// ER.enqueue('High Fever', 3)
// ER.enqueue('Broken Arm', 2)
// ER.enqueue('Toenail', 4)

// console.log(ER)
// console.log(ER.dequeue())   // should return the HIGHEST priority   gunshot = 1
// console.log(ER.dequeue())   // broken arm
// console.log(ER.dequeue())   // high fever
// console.log(ER.dequeue())   // toenail
// console.log(ER.dequeue())   // common cold
// console.log(ER.dequeue())   // nothing left
