// Binary tree
var tree;

function setup() {
  createCanvas(1300, 400);

  // New tree
  tree = new Tree();

  // Add ten random values
  // for (var i = 0; i < 10; i++) {
  //   tree.addValue(floor(random(0, 100)));
  // }
  //tree.addValue(5);
  tree.addValueId('+', '+');//null olmamalı mı
  tree.addValueId('+', '*');
  tree.addValueId('+', '-');
  tree.addValueId('*', 'a');
  tree.addValueId('*', 'b');
  tree.addValueId('-', '100');
  tree.addValueId('-', '13');
  //tree.addValueId('/', '20');
  //tree.addValueId('/', '2');
  //tree.addValueId(5, 13);

  var div = document.createElement('div');
  var textContent = document.createTextNode(tree.generatePythonCode());
  div.appendChild(textContent);
  document.body.appendChild(div);
  
  background(255);

  // Traverse the tree
  tree.traverse();

  // Search the tree for 10
  var result = tree.search(10);
  if (result == null) {
    console.log('not found');
  } else {
    console.log(result);
  }
}
