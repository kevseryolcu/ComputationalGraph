# Computational Graph

> Graduation Project – Department of Computer Engineering, Gebze Technical University  
> **Author:** Kevser Yolcu  
> **Supervisor:** Asst. Prof. Zafeirakis Zafeirakopoulos  
> **Date:** January 2019  
> **Location:** Gebze, KOCAELİ

## 📌 Abstract

The aim of the project is to design algorithms using computational graphs via a user interface, and convert them into runnable Python code. The system supports basic arithmetic operations (+, -, *, /) and provides a dynamic web-based platform for users to visualize and generate algorithmic expressions.

## 📚 Table of Contents

- [Abstract](#-abstract)
- [Introduction](#-introduction)
- [Method](#-method)
- [Results](#-results)
- [References](#-references)

## 🔍 Introduction

Modern software development faces challenges like rapidly changing technologies and syntax complexities of various languages. This project aims to help users focus purely on algorithm design, leaving syntax handling and implementation to computational graph logic.

A **Computational Graph (CG)** is a directed graph where:
- Nodes represent operations or input variables
- Edges transfer data from inputs to operations or between operations

Example:

```text
q = x + y      →     Node "+" connects variables x and y producing q
f = (x + y) * z →     Nodes for "+" and "*" are combined
```

## 🧠 Method

### Technologies Used

- **JavaScript** for logic and interaction
- **p5.js** for graph visualization
- **HTML5 / CSS3** for structure and styling

### Key Components

- Graph data structure (nodes with id and value)
- Graph visualization with p5.js
- DFS traversal for infix expression generation
- Python code generation from expression
- UI for adding nodes dynamically

### Graph Traversal

Used **Depth First Search (DFS)** for graph traversal to build infix expressions. Validates:
- Operator placement
- Input/output completeness
- Syntactic correctness of expressions

### Python Code Output

Generated Python code from validated computational graph, and rendered it in the web interface with appropriate indentation using CSS.

### UI Features

- Visualize graph structure in-browser
- Add nodes dynamically via input boxes
- See generated Python code in real-time
- Validate graph structure for correctness

## 📈 Results

- Successfully implemented UI for creating and editing computational graphs
- Generated correct Python code from graph structure
- Handled visualization and indentation challenges
- Suggested future features:
  - Conditional statements and loops
  - Drag & drop for improved UX
  - Node grouping for complex algorithms

## 📚 References

1. Daniel Sabinasz, *Deep Learning From Scratch I: Computational Graphs*, 2017  
2. Tyler Elliot Bettilyon, *Deep Neural Networks As Computational Graphs*, 2018  
3. K. Dhandhania, I. A. Majid, *Computational Graphs and Backpropagation*, 2018  
4. Prateek Garg, *Depth First Search*  
5. GeeksForGeeks, *Tree Traversals*  
6. Christopher Olah, *Calculus on Computational Graphs: Backpropagation*, 2015
