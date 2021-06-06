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
    if(!this.head) {
        this.head = node;
        this.size += 1
    } else {
        var current = this.head;
        while(current.next) {
            current = current.next
        }
       current.next = node;
       this.tail = node;
       this.size ++;
    }

    return this;

 }

 find(findValue) {

    var current = this.head
    while (current != null) {
        if(current.data == findValue) {
            return `Found ${findValue}`;
        }
        current = current.next;
    }
    return false;
 }
 remove() {

 }
 reverse(){

 }

}

linkedList = new LinkList();

linkedList.prepend(45);
linkedList.prepend(12);
linkedList.append(15);
linkedList.append(45);
console.log(linkedList);
console.log(linkedList.find(12));
console.log(linkedList.find(78));