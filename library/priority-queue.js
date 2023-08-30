// 2023-08-29
//https://github.com/ndb796/priorityqueuejs/blob/master/index.js


// PriorityQueue를 모듈화한다.

module.exports = PriorityQueue;



/** INIT */
// comparator(a, b)가 주어지면 사용하고 없으면 DEFAULT_COMPARATOR 사용
// 힙은 complete binary tree이기 때문에 배열로 표현(메모리 손실이 없다)
// comparator : a가 크면 양수, b가 크면 음수를 return 해야 함

function PriorityQueue(comparator) {
  this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = []; 
}

/** DEFAULT COMPARATOR */

PriorityQueue.DEFAULT_COMPARATOR = function(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    a = a.toString();
    b = b.toString();

    if (a == b) return 0;

    return (a > b) ? 1 : -1;
  }
};

/** SIZE */
// 배열의 length를 return
PriorityQueue.prototype.size = function() {
  return this._elements.length;
};

/** IS EMPTY */
// 배열이 비어있는지 확인
PriorityQueue.prototype.isEmpty = function() {
  return this.size() === 0;
};


/** PEEK */
// 가장 큰 값을 return
// max heap - 루트 노드가 가장 크기 때문에 index 0을 return
// 비어있으면 error
PriorityQueue.prototype.peek = function() {
  if (this.isEmpty()) throw new Error('PriorityQueue is empty');

  return this._elements[0];
};


/** COMPARE */
// comparator 함수를 이용해 대소 비교
// a가 크면 양수, b가 크면 음수 return
PriorityQueue.prototype._compare = function(a, b) {
  return this._comparator(this._elements[a], this._elements[b]);
};


/** SWAP */
// a, b의 자리를 바꿈
PriorityQueue.prototype._swap = function(a, b) {
  var aux = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = aux;
};

/** DEQUEUE */
// 원소 삭제 - 가장 큰 값(루트 노드)을 삭제함
PriorityQueue.prototype.deq = function() {
  var first = this.peek(); // 배열의 첫 번째 원소(루트 노드)
  var last = this._elements.pop(); // 배열의 마지막 원소(pop으로 삭제 - length가 줄어야 하므로)
  var size = this.size();

  if (size === 0) return first;

  this._elements[0] = last; // 루트 노드를 삭제하고 마지막 last 원소를 루트 노드 자리로 이동
  var current = 0; // 현재 이동한 노드의 index는 0

  while (current < size) {
    var largest = current; 
    var left = (2 * current) + 1;
    var right = (2 * current) + 2;

    if (left < size && this._compare(left, largest) >= 0) {
      largest = left;
    }

    if (right < size && this._compare(right, largest) >= 0) {
      largest = right;
    }

    if (largest === current) break;

    this._swap(largest, current);
    current = largest;
  }

  return first;
};

/** ENQUEUE */
// 원소를 더함
PriorityQueue.prototype.enq = function(element) {
  var size = this._elements.push(element); // 마지막에 추가
  var current = size - 1; // 현재 추가된 노드의 index

  while (current > 0) {
    var parent = Math.floor((current - 1) / 2); // 부모 노드의 index

    if (this._compare(current, parent) <= 0) break;

    this._swap(parent, current);
    current = parent;
  }

  return size;
};


/** ITERATE */
// 반복
PriorityQueue.prototype.forEach = function(fn) {
  return this._elements.forEach(fn);
};

