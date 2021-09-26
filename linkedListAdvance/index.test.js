/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * https://medium.com/@taylorshephard1/instantiation-patterns-in-javascript-7f9463b95839
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// const list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const lastNode = this.head;
      while (lastNode.next)
        lastNode = lastNode.next;
      lastNode.next = newNode;
      this.tail = newNode;
    }
  }

  removeHead() {
    if (!this.head) {
      return null
    } else {
      const headNode = this.head
      this.head = headNode.next
      return headNode.value
    }
  }

  contains(value) {
    if (this.head) {
      let searchNode = this.head
      if (searchNode.value === value) return true
      while (searchNode.next) {
        searchNode = searchNode.next
        if (searchNode.value === value) return true
      }
    }
    return false;
  }
}



describe("Tests", () => {
	it("test LinkedList", () => {
    const list = new LinkedList();
    expect(list.tail).toBeNull()
    list.addToTail(4)
    list.addToTail(5)
    expect(list.tail.value).toEqual(5)
    expect(list.head.value).toEqual(4)
    expect(list.contains(5)).toBeTruthy()
    expect(list.contains(6)).toBeFalsy()
    expect(list.removeHead()).toEqual(4)
    expect(list.head.value).toEqual(5)
    expect(list.tail.value).toEqual(5)
	})
})
