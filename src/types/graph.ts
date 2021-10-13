/**
 * Graph nodes for the map.
 */
export type GraphNode = {
    name: string;
    shortestPath: GraphNode;
    distance: number;
    adjacentNodes: GraphNode[];
};