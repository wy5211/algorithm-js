import Dictionary from "../Dictionary";
import Queue from '../Queue';

const WHITE = 'WHITE';
const GRAY = 'GRAY';
const BLACK = 'BLACK';


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

  // WHITE 初始状态; GRAY 处理中; BLACK 已处理
  initializeColor() {
    let colors = [];
    for (let item of this.vertexes) {
      colors[item] = WHITE;
    }
    return colors;
  }

  // 广度优先遍历 BFS
  bfs(initV, handler) {
    // 1.初始化颜色
    let colors = this.initializeColor();
    
    // 2.初始化队列
    let queue = new Queue();

    // 3.将初始化的顶点加入队列中
    queue.enqueue(initV);

    // 4.循环从队列中取出顶点，并把顶点的相邻顶点加入队列
    while (!queue.isEmpty()) {
      // 4.1从队列中取出一个顶点
      let currentV = queue.dequeue();
      // 4.2获取和当前顶点相连的另外的顶点
      let currentEdges = this.edges.get(currentV);
      // 4.3将当前顶点的颜色置为灰色
      colors[currentV] = GRAY;
      // 4.4遍历所有的顶点，加入到队列中
      for (let item of currentEdges) {
        if (colors[item] === WHITE) {
          colors[item] = GRAY;
          queue.enqueue(item);
        }
      }

      // 5.访问顶点
      handler(currentV);
      // 6.置为黑色
      colors[currentV] = BLACK;

    }
  }

  // 深度优先搜索
  dfs(initV, handler) {
    // 1.初始化顶点颜色为白色
    let colors = this.initializeColor();

    // 2递归调用
    this.dfsVisite(initV, colors, handler);
  }

  dfsVisite(v, colors, handler) {
    // 1.将颜色设置为灰色
    colors[v] = GRAY;

    // 2.处理顶点
    handler(v);

    // 3.依次处理当前顶点的边
    let currentEdges = this.edges.get(v);
    for (let item of currentEdges) {
      if (colors[item] === WHITE) {
        this.dfsVisite(colors[item], colors, handler);
      }
    }

    // 4.将顶点变成黑色
    colors[v] = BLACK;

  } 
}

export default Graph;
