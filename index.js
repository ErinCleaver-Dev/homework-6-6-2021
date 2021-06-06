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
    while (current.next) {
        console.log(current)
        if(current.element == findValue) {
            return `Found ${findValue}`;
        }
        current = current.next;
    }
    return false;
 }

 // removing the last value
 remove() {
    if(!this.tail) {
        return "No values in list"
    } else {
        current == this.tail;
        

    } 




 }
 reverse(){

 }

}

linkedList = new LinkList();

linkedList.prepend(45);
linkedList.prepend(12);
linkedList.append(15);
linkedList.find(45);
linkedList.find(78);
console.log(linkedList);
