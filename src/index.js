
import LinkedList from './modules/linked-list.js';

const myList = new LinkedList();
myList.append(42);
myList.append(242);
myList.prepend(24242424);
console.log(myList.getHead());
console.log(myList.size());
console.log(myList.at(1))
console.log(myList.getHead());
myList.pop();
console.log(myList.getHead());