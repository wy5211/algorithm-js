import Graph from './index';

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('A', 'E')
graph.addEdge('A', 'F')
graph.addEdge('B', 'F')
graph.addEdge('E', 'B')
graph.addEdge('F', 'E')
graph.addEdge('C', 'B')

// console.log(graph.toString());

console.log(graph.bfs('A', (val) => {
  console.log(val)
}))
