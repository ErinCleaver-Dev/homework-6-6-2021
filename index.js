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
 removeLast() {
    if(!this.tail) {
        return "No values in list"
    } else {
        let current = this.tail;

        

    } 




 }
 reverse(){

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
console.log(JSON.stringify(linkedList));
