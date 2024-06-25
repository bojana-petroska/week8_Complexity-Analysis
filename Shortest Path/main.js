const graphweighted = {
    'New Orleans': { 'Mobile': 3, 'Memphis': 3 },
    'Mobile': { 'New Orleans': 3, 'Memphis': 7, 'Atlanta': 2, 'Savannah': 6 },
    'Memphis': { 'New Orleans': 3, 'Mobile': 7, 'Atlanta': 10, 'Nashville': 15 },
    'Nashville': { 'Atlanta': 2, 'Memphis': 15 },
    'Atlanta': { 'Nashville': 2, 'Memphis': 10, 'Mobile': 2, 'Savannah':1  },
    'Savannah': { 'Atlanta': 1, 'Mobile': 6 }
};

// const graphweighted = {
//     A: { B: 2, D: 8 },
//     B: { A: 2, D: 5, E: 6 },
//     D: { B: 5, A: 8 },
//     E: { B: 6, D: 3, F: 1, C: 9 },
//     F: { D: 2, E: 1, C: 3 },
//     C: { E: 9, F: 3 }
// };


const dijkstra = (graph, startNode, outputElement) => {
    const visited = {}; //bfs
    const distances = {};
    const queue = []; //bfs

    // Initialize distances
    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    queue.push({ node: startNode, distance: 0 }); //bfs

    while (queue.length > 0) { //bfs
        // Get the node with the smallest distance
        queue.sort((a, b) => a.distance - b.distance);
        const currentNodeData = queue.shift(); //bfs
        const currentNode = currentNodeData.node;

        if (visited[currentNode]) continue; //bfs

        visited[currentNode] = true; //bfs
        outputElement.textContent += currentNode + " "; //bfs
        console.log(currentNode);

        for (const neighbor in graph[currentNode]) { //bfs
            if (!visited[neighbor]) { //bfs
                const newDist = distances[currentNode] + graph[currentNode][neighbor];
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    queue.push({ node: neighbor, distance: newDist });
                }
            }
        }
    }

    // Output the distances
    console.log("Shortest distances:", distances);
    outputElement.textContent += JSON.stringify(distances);
};

const startShortestPathSearch = () => {
    const outputElementDijkstra = document.getElementById("output-dijkstra");
    dijkstra(graphweighted, 'Nashville', outputElementDijkstra);
};
