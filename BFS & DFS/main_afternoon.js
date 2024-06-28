const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B'],
  E: ['C'],
};

const bfs = (graph, startNode) => {
  const visited = {};
  const queue = [];
  const visitedValues = [];

  queue.push(startNode);
  console.log(queue);
  visited[startNode] = true;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    visitedValues.push(currentNode);

    for (const neighbor of graph[currentNode]) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }

  return visitedValues;
};

const dfs = (graph, startNode) => {
  const visited = {};
  const stack = [];
  const visitedValues = [];

  stack.push(startNode);
  visited[startNode] = true;

  while (stack.length > 0) {
    const currentNode = stack.pop();
    visitedValues.push(currentNode);

    // console.log(graph[currentNode].length - 1)

    for (let i = graph[currentNode].length - 1; i >= 0; i--) {
      const neighbor = graph[currentNode][i];
      if (!visited[neighbor]) {
        stack.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }

  return visitedValues;
};

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(`Testing BFS:`);
let bfsResult = bfs(graph, 'A');
let expectedBfsResult = ['A', 'B', 'C', 'D', 'E'];
console.log('Result:', bfsResult);
console.log('Expected:', expectedBfsResult);
console.log('BFS Test Passed?', arraysEqual(bfsResult, expectedBfsResult));

console.log('\nTesting DFS:');
let dfsResult = dfs(graph, 'A');
let expectedDfsResult = ['A', 'B', 'D', 'C', 'E'];
console.log('Result:', dfsResult);
console.log('Expected:', expectedDfsResult);
console.log('DFS Test Passed?', arraysEqual(dfsResult, expectedDfsResult));
