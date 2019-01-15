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

  createCanvas(1300, 700);

  inputID = createInput();
  inputID.position(20, 65);

  inputVal = createInput();
  inputVal.position(20, 85);

  button = createButton('Add Node');
  button.position(20, 105);
  button.mousePressed(addNodeFunc);
//
  // New tree
  tree = new Tree();

  //tree.addValueId(1, '+');//null olmamalı mı
  /*tree.addValueId('+', '*');
  tree.addValueId('+', '-');
  tree.addValueId('*', 'a');
  tree.addValueId('*', 'b');
  tree.addValueId('-', '100');
  tree.addValueId('-', '13');*/
  //tree.addValueId('/', '20');
  //tree.addValueId('/', '2');
  //tree.addValueId(5, 13);

  var pythonCode = tree.generatePythonCode();
  if(pythonCode.length == 0) {
    pythonCode.push(' ');
    pythonCode.push(' ');
    pythonCode.push(' ');
  }
  var divPy = document.createElement('div');

  //function definition
  var pyDef = document.createElement('p');
  pyDef.appendChild(document.createTextNode(pythonCode[0]));
  pyDef.setAttribute('id', 'functionDef');
  divPy.appendChild(pyDef); 
  
  //function body
  var pyBody = document.createElement('p');
  pyBody.appendChild(document.createTextNode(pythonCode[1]));
  pyBody.setAttribute('id', 'functionBody');
  divPy.appendChild(pyBody); 

  //isValid
  var isValid = document.createElement('p');
  isValid.appendChild(document.createTextNode(pythonCode[2]));
  isValid.setAttribute('id', 'isValid');
  divPy.appendChild(isValid); 

  divPy.setAttribute('id', 'generatePython');
  document.body.appendChild(divPy);

  background(255);

  //footer
  /*var footer = document.createElement('footer');
  footer.appendChild(document.createTextNode('Kevser Yolcu'));
  document.body.appendChild(footer);*/

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
  //document.getElementById('generatePython').innerHTML = tree.generatePythonCode();
  
  var pythonCode = tree.generatePythonCode();
  document.getElementById('functionDef').innerHTML = pythonCode[0];
  document.getElementById('functionBody').innerHTML = pythonCode[1];
  document.getElementById('isValid').innerHTML = pythonCode[2];
}