class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {

	}

	removeChild(node) {

	}

	remove() {
		if (this.parent === null) return;
		this.parent.removeChild(this);
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
