import { Pattern } from '../types';

export const articulationPointsPattern: Pattern = {
  id: 9,
  title: "Articulation Points and Bridges Pattern",
  description: "Identify critical components in graph connectivity",
  questions: [
      {
        id: 1,
        title: "Number of Connected Components",
        difficulty: "medium",
        link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
        description: "Base Pattern: DFS/Union-Find"
      },
      {
        id: 2,
        title: "Redundant Connection",
        difficulty: "medium",
        link: "https://leetcode.com/problems/redundant-connection/",
        description: "Builds on #1: Cycle detection"
      },
      {
        id: 3,
        title: "Find Cut Vertices",
        difficulty: "hard",
        link: "https://leetcode.com/problems/critical-connections-in-a-network/",
        description: "Builds on #2: Articulation points"
      },
      {
        id: 4,
        title: "Critical Connections",
        difficulty: "hard",
        link: "https://leetcode.com/problems/critical-connections-in-a-network/",
        description: "Builds on #3: Bridge finding"
      },
      {
        id: 5,
        title: "Number of Islands",
        difficulty: "medium",
        link: "https://leetcode.com/problems/number-of-islands/",
        description: "Base Pattern: Grid DFS/BFS"
      },
      {
        id: 6,
        title: "Number of Islands II",
        difficulty: "hard",
        link: "https://leetcode.com/problems/number-of-islands-ii/",
        description: "Builds on #5: Dynamic changes"
      },
      {
        id: 7,
        title: "Making A Large Island",
        difficulty: "hard",
        link: "https://leetcode.com/problems/making-a-large-island/",
        description: "Builds on #6: Size optimization"
      },
      {
        id: 8,
        title: "Minimum Days to Disconnect Island",
        difficulty: "hard",
        link: "https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/",
        description: "Builds on #7: Minimal cuts"
      },
      {
        id: 9,
        title: "Find Eventual Safe States",
        difficulty: "medium",
        link: "https://leetcode.com/problems/find-eventual-safe-states/",
        description: "Base Pattern: Cycle detection"
      },
      {
        id: 10,
        title: "Redundant Connection II",
        difficulty: "hard",
        link: "https://leetcode.com/problems/redundant-connection-ii/",
        description: "Builds on #9: In-degree handling"
      },
      {
        id: 11,
        title: "Critical Pseudo-Critical Edges",
        difficulty: "hard",
        link: "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/",
        description: "Builds on #10: Weight consideration"
      },
      {
        id: 12,
        title: "Minimize Malware Spread",
        difficulty: "hard",
        link: "https://leetcode.com/problems/minimize-malware-spread/",
        description: "Builds on #11: Component importance"
      },
      {
        id: 13,
        title: "Server Network Reliability",
        difficulty: "medium",
        link: "https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/",
        description: "Builds on #12: Component pairs"
      },
      {
        id: 14,
        title: "Network Stability Score",
        difficulty: "hard",
        link: "https://leetcode.com/problems/maximum-score-of-a-node-sequence/",
        description: "Builds on #13: Path scoring"
      },
      {
        id: 15,
        title: "Strongly Connected Components",
        difficulty: "hard",
        link: "https://leetcode.com/problems/critical-connections-in-a-network/",
        description: "Builds on #14: Directed components"
      },
      {
        id: 16,
        title: "Remove Max Number of Edges",
        difficulty: "hard",
        link: "https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/",
        description: "Base Pattern: Edge removal"
      },
      {
        id: 17,
        title: "Reachable Nodes After Removal",
        difficulty: "medium",
        link: "https://leetcode.com/problems/reachable-nodes-with-restrictions/",
        description: "Builds on #16: Node restrictions"
      },
      {
        id: 18,
        title: "Critical and Pseudo-Critical Edges",
        difficulty: "hard",
        link: "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/",
        description: "Builds on #17: Edge classification"
      },
      {
        id: 19,
        title: "Hierarchical Network Components",
        difficulty: "hard",
        link: "https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/",
        description: "Base Pattern: Tree components"
      },
      {
        id: 20,
        title: "Network Layer Optimization",
        difficulty: "hard",
        link: "https://leetcode.com/problems/count-pairs-of-nodes/",
        description: "Builds on #19: Layer constraints"
      },
  ]
};
