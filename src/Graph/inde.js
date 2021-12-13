import Dictionary from "../Dictionary";

// 封装图
class Graph {
  constructor(params) {
    // 存储顶点（数组/链表）
    this.vertexes = [];
    // 存储边（字典）
    this.edges = new Dictionary();
  }

  // 添加顶点
  addVertex(v) {
    this.vertexes.push(v);
    this.edges.set(v, []);
  }

  // 添加边，边：从一个顶点指向另一个顶点
  addEdge(v1, v2) {
    this.edges.get(v1).push(v2);
    this.edges.get(v2).push(v1);
  }

  toString() {
    let str = "";
    for (var i = 0; i < this.vertexes.length; i++) {
      str += '\n' + this.vertexes[i] + "->";
      var vEdges = this.edges.get(this.vertexes[i]);
      for (var j = 0; j < vEdges.length; j++) {
        str += vEdges[j] + " ";
      }
    }
    return str;
  }
}

export default Graph;
