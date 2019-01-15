// Node in the tree
function Node(val, id, x, y) {
  this.value = val;
  this.id = id;
  this.left = null;
  this.right = null;

  this.distance = 2;

  this.x = x;
  this.y = y;
}

// Search the tree for a value
Node.prototype.search = function(val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
}

Node.prototype.visit = function(parent) {
  // Recursively go left
  if (this.left != null) {
    this.left.visit(this);
  }
  // Print out the value
  console.log(this.value);

  // Draw a line from the parent
  stroke(100);
  line(parent.x, parent.y, this.x, this.y);
  // Draw a circle
  stroke(0);
  fill(200);
  ellipse(this.x, this.y, 24, 24);
  noStroke();
  // Display the value
  fill(0);
  textAlign(RIGHT);
  textSize(12);
  text('value: ' + this.value + "\nid: " + this.id, this.x, this.y + 4);

  // Go right
  if (this.right != null) {
    this.right.visit(this);
  }
}

// Add a new Node
Node.prototype.addNode = function(n) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
      this.left.x = this.x - (width / pow(2, n.distance));
      this.left.y = this.y + (height / 12);
    } else {
      n.distance++;
      this.left.addNode(n)
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;
      this.right.x = this.x + (width / pow(2, n.distance));
      this.right.y = this.y + (height / 12);
    } else {
      n.distance++;
      this.right.addNode(n);
    }
  }
}
// Add a new Node
Node.prototype.addNodeId = function(id, n) {
  if(this == null || n == null)
    return false;

  if (id == this.id) {

    if (this.left == null) {
      this.left = n;

      this.left.x = this.x - (width / pow(2, n.distance));
      this.left.y = this.y + (height / 12);
      return true;

    } else if(this.right == null) {
      this.right = n;
      this.right.x = this.x + (width / pow(2, n.distance));
      this.right.y = this.y + (height / 12);
      return true;
    }
   
  } else {
    n.distance++;
    var res = false;
    if(this.left != null) {
      res = this.left.addNodeId(id, n);
    }
    if(!res && this.right != null) { 
      return this.right.addNodeId(id, n);
    }
    return res;
  }
}


