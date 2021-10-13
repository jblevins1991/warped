import { GraphNode } from "../types/graph";

export const calculateShortestPathFromSource = (
    source: GraphNode
): GraphNode => {
    source.distance = 0;

    const settledNodes: GraphNode[] = [];
    const unsettledNodes: GraphNode = source;

    if (unsettledNodes.adjacentNodes.length > 0) {
        unsettledNodes.adjacentNodes.forEach((node: GraphNode) => {
            const currentNode = getLowestDistanceNode(unsettledNodes);

            if (
                !!currentNode &&
                !doesSettledNodesContainNode(
                    settledNodes,
                    currentNode
                )
            ) {
                calculateMinimumDistance(node, currentNode);
                settledNodes.push(node);
            }
        });
    }

    return unsettledNodes;
};

const doesSettledNodesContainNode = (
    settledNodes: GraphNode[],
    node: GraphNode
): boolean => {
    if (!settledNodes) {
        return false;
    }

    const containsNode = settledNodes
        .some((adjancentNode: GraphNode) => {
            return adjancentNode == node;
        });

    if (!containsNode) {
        return settledNodes.some((adjacentNode: GraphNode) => {
            return doesSettledNodesContainNode(adjacentNode.adjacentNodes, node);
        });
    }

    return true;
}

export const getLowestDistanceNode = (
    unsettledNodes: GraphNode
): GraphNode | null => {
    let lowestDistance: number = Number.MAX_VALUE;
    let lowestDistanceNode: GraphNode | null = null;

    if (unsettledNodes.adjacentNodes.length > 0) {
        unsettledNodes.adjacentNodes.forEach((node: GraphNode) => {
            const nodeDistance = node.distance;

            if (nodeDistance < lowestDistance) {
                lowestDistance = nodeDistance;
                lowestDistanceNode = node;
            }
        });
    }

    return lowestDistanceNode;
};

export const calculateMinimumDistance = (
    evaluationNode: GraphNode,
    source: GraphNode
) => {
    const sourceDistance = source.distance;

    if (sourceDistance + 1 < evaluationNode.distance) {
        evaluationNode.distance = sourceDistance + 1;
        evaluationNode.shortestPath = getShortestPath(source, evaluationNode);
    }
};

export const getShortestPath = (
    source: GraphNode,
    evaluationNode: GraphNode
): GraphNode => {
    const shortestPathNode: GraphNode = source;

    // shortest path algorithm

    return shortestPathNode;
}