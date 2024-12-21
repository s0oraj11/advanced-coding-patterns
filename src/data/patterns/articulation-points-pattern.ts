import { Pattern } from '../types';

export const articulationPointsPattern: Pattern = {
  id: 9,
  title: "Articulation Points Pattern",
  description: "Learn to identify critical nodes and bridges in graphs whose removal would disconnect the graph, crucial for network reliability analysis.",
  questions: [
    {
      id: 1,
      title: "Critical Connections in a Network",
      difficulty: "hard",
      link: "https://leetcode.com/problems/critical-connections-in-a-network/",
      description: "Find all critical edges in a network that would disconnect it if removed"
    },
    {
      id: 2,
      title: "Find Cut Vertices",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-cut-vertices/",
      description: "Identify all articulation points in an undirected graph"
    },
    {
      id: 3,
      title: "Redundant Connection",
      difficulty: "medium",
      link: "https://leetcode.com/problems/redundant-connection/",
      description: "Find an edge that can be removed while keeping the graph connected"
    },
    {
      id: 4,
      title: "Network Delay Time",
      difficulty: "medium",
      link: "https://leetcode.com/problems/network-delay-time/",
      description: "Calculate the minimum time for all nodes to receive a signal"
    }
  ]
};