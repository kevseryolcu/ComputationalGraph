var counter = 1;
// Tree object
function Tree() {
  // Just store the root
  this.root = null;
}

// Start by visiting the root
Tree.prototype.traverse = function() {
  this.root.visit(this.root);
}

// Start by searching the root
Tree.prototype.search = function(val) {
  var found = this.root.search(val);
  return found;
}

// Add a new value to the tree
Tree.prototype.addValue = function(val) {
  var n = new Node(val, val);
  if (this.root == null) {
    this.root = n;
    // An initial position for the root node
    this.root.x = width / 2;
    this.root.y = 16;
  } else {
    this.root.addNode(n);
  }
}

Tree.prototype.addValueId = function(id, val) {
  var n = new Node(val, counter);
  if (this.root == null) {
    this.root = n;
    // An initial position for the root node
    this.root.x = width / 2;
    this.root.y = 16;
    counter++;
  } else {
    if(this.root.addNodeId(id, n))
      counter++;
  }
}


function isOperator(value) {
  switch(value) {
    case '+': return true;
    case '*': return true;
    case '/': return true;
    case '-': return true;
    default: return false;
  }
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

Tree.prototype.generatePythonCode = function(){
  var inputs = [];
  let resultStr = this.generateCodeStr(this.root, inputs);
  if(resultStr == null)
    return null;
  let res = 'def function( ';
  for(i in inputs) {
    res += inputs[i] + ',';
  }
  res = res.slice(0, -1);
  res += '):\n\t\nreturn ' + resultStr;

  //check code
  pythonCodeArr = resultStr.split(' ');

  var isValid = '';

  if(pythonCodeArr != null) {
    var check = isOperator(pythonCodeArr[0]);
    for (i = 1; i < pythonCodeArr.length; i++) {
      if(check == isOperator(pythonCodeArr[i])) {
        isValid = 'not valid'
      }
      check = isOperator(pythonCodeArr[i]);
    }
  }
  //end of check code
  res += ' ' + isValid;
  return res;
}

Tree.prototype.generateCodeStr = function(root, inputs) {
  if (root == null) {
    return null;
  }
  if (!(isNumber(root.value) || isOperator(root.value))) {
    inputs.push(root.value);
  }

  if(root.left == null && root.right == null) {
    return root.value;
  }

  let left_sum = this.generateCodeStr(root.left, inputs);
  let right_sum = this.generateCodeStr(root.right, inputs);

  return left_sum + ' ' + root.value + ' ' + right_sum;
}
