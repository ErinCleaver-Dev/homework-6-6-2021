// Singale use node;


class Node{
    constructor (element = null, next = null) {
        this.element = element;   
        this.next = next;
    }
}

class LinkList {
 constructor () {
     this.size = 0;
     this.head = null;
     this.tail = null;
 }

 prepend(value) {
    const node = new Node(value, this.head);
    if(!this.head) {
        this.head = node;
        this.size ++;
    } else {
        this.size ++;
        
        node.next = this.head
        this.head = node;
       
        var current = this.head;
        while(current.next) {
            current = current.next;
        }
        this.tail = current
    }
    
    return this;
 }

 append(value) {
 
    const node = new Node(value, this.head);
    let count = 0;
    if(!this.head) {
        this.head = node;
        this.size ++;
    } else {
       
        
        var current = this.head;
        while(current.next) {
            current = current.next;
        }
        this.tail = current
        this.tail.next = this.node;
        this.tail.next = null
        this.size ++;
    }

    return this;

 }

 find(findValue) {

    var current = this.head
    while (current.next) {
        console.log(current)
        if(current.element == findValue) {
            return `The value of ${findValue} was found.`;
        }
        current = current.next;
    }
    return `The value of ${findValue} was not found.`;
 }

 // removing the last value
 removeFirst() {
    if (!this.head) {
        return;
    } else {
        this.head = this.head.next;
    }

 }
 reverse(){
    let current = this.head;
    let previous = null;
    let temp = null;

    while(current) {
        temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }

    return previous
 }

}

linkedList = new LinkList();

linkedList.prepend(45);
linkedList.prepend(12);
linkedList.prepend(15);
linkedList.append(45);
linkedList.append(12);

console.log(linkedList.find(78))
console.log(linkedList.find(12))
console.log(`Find: ${JSON.stringify(linkedList)}`);
linkedList.removeFirst()
console.log(`Remove First: ${JSON.stringify(linkedList)}`);

console.log(`\n Reverse: ${JSON.stringify(linkedList.reverse())}`);
