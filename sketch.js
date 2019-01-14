// Binary tree
//import {PythonShell} from 'python-shell';
//const codeBlockWriter = Require("code-block-writer");
//var http = require('code-block-writer');
var tree, inputID, inputVal, button;

function setup() {
  var div = document.createElement('div');
  div.setAttribute('id', 'CGTitle');
  var p = document.createElement('p');
  var textContent = document.createTextNode("Computational Graph");
  p.appendChild(textContent);
  div.appendChild(p); 
  document.body.appendChild(div);
 
 /* var addNodeBtn = document.createElement('BUTTON');
  var btnText = document.createTextNode('Add Node');
  addNodeBtn.appendChild(btnText);
  document.body.appendChild(addNodeBtn);*/

  createCanvas(1300, 400);
 // create canvas
  //createCanvas(1300, 100);

  inputID = createInput();
  inputID.position(20, 65);

  inputVal = createInput();
  inputVal.position(20, 85);

  button = createButton('add node');
  button.position(inputID.x + inputID.width, 65);
  button.mousePressed(addNodeFunc);
//
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
  var p = document.createElement('p');
  var textContent = document.createTextNode(tree.generatePythonCode());
  p.appendChild(textContent);
  div.appendChild(p); 
  div.setAttribute('id', 'generatePython');
  document.body.appendChild(div);

  /*PythonShell.runString('x=1+1;print(x)', null, function (err) {
    if (err) throw err;
    console.log('finished');
  });*/

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

function addNodeFunc() {
  tree.addValueId(inputID.value(), inputVal.value());
  //location.reload();
  tree.traverse();
  document.getElementById('generatePython').innerHTML = tree.generatePythonCode();
}