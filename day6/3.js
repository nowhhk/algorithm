class Heap {
  constructor() {
    this.heap = [];
  }
  length() {
    return this.heap.length;
  }
  min() {
    return this.heap[0];
  }
  add(node) {
    this.heap.push(node);
    this.heapifyUp();
  }
  extractMin() {
    const min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return min;
  }
  heapifyUp() {
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor((currentIdx - 1) / 2);

    while (parentIdx >= 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
      [this.heap[parentIdx], this.heap[currentIdx]] = [
        this.heap[currentIdx],
        this.heap[parentIdx],
      ];
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
    return this.heap;
  }

  heapifyDown() {
    let parentIdx = 0;
    let childIdxes = this.getChildIdxes(parentIdx);

    while (
      (childIdxes.length > 0 &&
        this.heap[childIdxes[0]] < this.heap[parentIdx]) ||
      (childIdxes[1] && this.heap[childIdxes[1]] < this.heap[parentIdx])
    ) {
      if (
        childIdxes[1] &&
        this.heap[childIdxes[1]] < this.heap[childIdxes[0]]
      ) {
        [this.heap[parentIdx], this.heap[childIdxes[1]]] = [
          this.heap[childIdxes[1]],
          this.heap[parentIdx],
        ];
        parentIdx = childIdxes[1];
      } else {
        [this.heap[parentIdx], this.heap[childIdxes[0]]] = [
          this.heap[childIdxes[0]],
          this.heap[parentIdx],
        ];
        parentIdx = childIdxes[0];
      }
      childIdxes = this.getChildIdxes(parentIdx);
    }
    return this.heap;
  }

  getChildIdxes(parentIdx) {
    const childIdxes = [];
    if (parentIdx * 2 + 1 < this.heap.length) {
      childIdxes.push(parentIdx * 2 + 1);
    }
    if (parentIdx * 2 + 2 < this.heap.length) {
      childIdxes.push(parentIdx * 2 + 2);
    }
    return childIdxes;
  }
}

function cookies(k, A) {
  // Write your code here
  if (A.length === 1) return -1;
  const minHeap = new Heap();
  A.forEach((node) => minHeap.add(node));
  let count = 0;

  while (minHeap.min() < k) {
    if (minHeap.length() === 1) return -1;
    const firstMin = minHeap.extractMin();
    const secMin = minHeap.extractMin();
    const mixed = firstMin + secMin * 2;
    minHeap.add(mixed);
    count += 1;
  }
  console.log(count);
  return count;
}

cookies(7, [1, 2, 3, 9, 10, 12]);
