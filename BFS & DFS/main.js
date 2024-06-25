console.log('bo');

const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
}

// console.log(graph['A']) = >>> [ 'B', 'C']
// console.log(graph['A'][0]) = >>> B
// console.log(graph[graph['A'][0]]) = >>> [ 'D', 'E' ]


const bfs = (graph, startingNode, outputElement) => {
    const visited = {}; //ex: {A: true}
    const queue = [];
    
    queue.push(startingNode);
    visited[startingNode] = true;

    while(queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode);
        outputElement.innerHTML += `Current Node is: ${currentNode}<br>`;

        for (const neighbor of graph[currentNode]) {
            if(!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
            }
        }
        console.log(visited);
    }
};

const dfs = (graph, startNode, outputElement) => {
    const visited = {};
    const stack = [];

    stack.push(startNode);
    visited[startNode] = true;

    while (stack.length > 0) {
        const currentNode = stack.pop();
        outputElement.textContent += currentNode + " ";
        console.log(currentNode);

        for (let i = graph[currentNode].length - 1; i >= 0; i--) {
            const neighbor = graph[currentNode][i];
            if (!visited[neighbor]) {
                stack.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
};

const startBFS = () => {
    const outputElementBFS = document.getElementById('output-bfs');
    const outputElementDFS = document.getElementById('output-dfs');
    bfs(graph, 'A', outputElementBFS);
    dfs(graph, 'A', outputElementDFS);
};


