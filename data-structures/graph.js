// Edge List - each item is a connection between two items;
  const edgeList = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List - the index of the array item is the value of the node itself
// and the items inside de array are the possible connections;
  const adjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix - represented by zeros and ones (boolean like), that indicates
// which index is connected to value (represented by the index from inside array)
  const adjacentMatrix = [
    [0, 0, 1, 0], // for the index 0 (outside array), there is a connection with the value 2 (inside array index).
    [0, 0, 1, 1], // for the index 1 (outside array), there are connections with values 2 and 3 (inside array indexes)
    [1, 1, 0, 1],
    [0, 1, 1, 0],
  ];

  // it could also be represented by an object
  const adjacentMatrixObj = {
    0: [0, 0, 1, 0], // for the index 0 (outside array), there is a connection with the value 2 (inside array index).
    1: [0, 0, 1, 1], // for the index 1 (outside array), there are connections with values 2 and 3 (inside array indexes)
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0],
  }

// GRAPH IMPLEMENTATION
// 0 --> 1 2
// 1 --> 3 2 0
// 2 --> 4 1 0
// 3 --> 1 4
// 4 --> 3 2 5
// 5 --> 4 6
// 6 --> 5
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node){
    this.adjacentList[node] = []; 
    this.numberOfNodes++;
  }

  addEdge(node1, node2){
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnections() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    }
  }
}

const graph = new Graph();

graph.addVertex('0');
graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');
graph.addEdge('3', '1'); 
graph.addEdge('3', '4'); 
graph.addEdge('4', '2'); 
graph.addEdge('4', '5'); 
graph.addEdge('1', '2'); 
graph.addEdge('1', '0'); 
graph.addEdge('0', '2'); 
graph.addEdge('6', '5');

graph.showConnections();