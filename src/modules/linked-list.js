import Node from './node.js';
const LinkedList = function() {
    this._linkedList = {};
    
    
};

LinkedList.prototype.append = function(value) {
    const node = new Node(value);
    if (!Object.values(this._linkedList).length) {
        this._linkedList = node;
        return;
    }

    const formerTail = this.getTail();
    formerTail.nextNode = node;


}

LinkedList.prototype.prepend = function(value) {
    const node = new Node(value);
    node.nextNode = this._linkedList;
    this._linkedList = node;
}

LinkedList.prototype.getTail = function(node = this._linkedList) {
    if (node.nextNode === null) {
        return node;
    }

    return this.getTail(node.nextNode);
}

LinkedList.prototype.getHead = function() { return this._linkedList };

LinkedList.prototype.size = function() {
    let currentIndex = 0;
    let currentNode = this._linkedList;
    while(currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        currentIndex++;
    }

    return currentIndex + 1;
}

LinkedList.prototype.at = function(index) {
    let currentIndex = 0;
    let currentNode = this._linkedList;
    while(currentIndex !== index) {
        currentNode = currentNode.nextNode;
        currentIndex++;
    }

    return currentNode;
}

LinkedList.prototype.pop = function() {
    let currentNode = this._linkedList;
    while (currentNode) {
        if (currentNode.nextNode.nextNode == null) {
            currentNode.nextNode = null;
        }
        
        currentNode = currentNode.nextNode;
    }
}

LinkedList.prototype.contains = function(value) {
    let currentNode = this._linkedList;
    while(currentNode) {
        if (currentNode.value == value) {
            return true;
        }

        currentNode = currentNode.nextNode;
    }

    return false;
}

LinkedList.prototype.find = function(value) {
    let currentNode = this._linkedList;
    let currentIndex = 0;
    while(currentNode) {
        if (currentNode.value == value) {
            return currentIndex;
        }

        currentNode = currentNode.nextNode;
        currentIndex++;
    }
    
    return null;
}

LinkedList.prototype.toString = function() {
    let currentNode = this._linkedList;
    let string = "";
    
    while(currentNode) {
        string += `( ${currentNode.value} ) -> `;
        if (currentNode.nextNode == null) {
            string += null;
        }
        
        currentNode = currentNode.nextNode;
    }

    return string;
}

LinkedList.prototype.insertAt = function(value, index) {
    const node = new Node(value);
    let currentNode = this._linkedList;
    let currentIndex = 0;

    while(currentNode) {
        if (currentIndex == index - 1) {
            node.nextNode = currentNode.nextNode;
            currentNode.nextNode = node;
            return;
        }
        
        currentNode = currentNode.nextNode;
        currentIndex++;
    }
}

LinkedList.prototype.removeAt = function(index) {
    let currentNode = this._linkedList;
    let currentIndex = 0;

    while(currentNode) {
        if (currentIndex = index - 1) {
            currentNode.nextNode = currentNode.nextNode.nextNode;
            return;
        }

        currentNode = currentNode.nextNode;
        currentIndex++;
    }
}

export default LinkedList;