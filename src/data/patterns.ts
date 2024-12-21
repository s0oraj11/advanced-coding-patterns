export interface Pattern {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export interface Question {
  id: number;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  link: string;
  description: string;
}

export const patterns: Pattern[] = [
  {
    id: 1,
    title: "Counting Pattern",
    description: "Master frequency counting and statistical patterns",
    questions: [
      {
        id: 1,
        title: "Count Elements with Maximum Frequency",
        difficulty: "easy",
        link: "https://leetcode.com/problems/count-elements-with-maximum-frequency/",
        description: "Base Pattern: Basic frequency map"
      },
      {
        id: 2,
        title: "Most Frequent Even Element",
        difficulty: "easy",
        link: "https://leetcode.com/problems/most-frequent-even-element/",
        description: "Builds on #1: Adds filtering condition before counting"
      },
      {
        id: 3,
        title: "Maximum Equal Frequency",
        difficulty: "hard",
        link: "https://leetcode.com/problems/maximum-equal-frequency/",
        description: "Builds on #2: Tracks frequency of frequencies"
      },
      {
        id: 4,
        title: "Number of Zero-Filled Subarrays",
        difficulty: "medium",
        link: "https://leetcode.com/problems/number-of-zero-filled-subarrays/",
        description: "New Concept: Running window count"
      },
      {
        id: 5,
        title: "Find the K-Beauty of a Number",
        difficulty: "easy",
        link: "https://leetcode.com/problems/find-the-k-beauty-of-a-number/",
        description: "Builds on #4: Fixed-size window counting"
      },
      {
        id: 6,
        title: "Count Number of Pairs With Absolute Difference K",
        difficulty: "easy",
        link: "https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/",
        description: "Builds on #1: Uses frequency map for pair finding"
      },
      {
        id: 7,
        title: "Count Largest Group",
        difficulty: "easy",
        link: "https://leetcode.com/problems/count-largest-group/",
        description: "Builds on #6: Groups by computed property"
      },
      {
        id: 8,
        title: "Find Players With Zero or One Losses",
        difficulty: "medium",
        link: "https://leetcode.com/problems/find-players-with-zero-or-one-losses/",
        description: "Builds on #7: Multiple frequency maps"
      },
      {
        id: 9,
        title: "Maximum Number of Pairs in Array",
        difficulty: "easy",
        link: "https://leetcode.com/problems/maximum-number-of-pairs-in-array/",
        description: "Builds on #8: Frequency-based pairing"
      },
      {
        id: 10,
        title: "Count Good Triplets",
        difficulty: "easy",
        link: "https://leetcode.com/problems/count-good-triplets/",
        description: "Builds on #9: Triple condition checking"
      },
      {
        id: 11,
        title: "Next Greater Numerically Balanced Number",
        difficulty: "medium",
        link: "https://leetcode.com/problems/next-greater-numerically-balanced-number/",
        description: "Builds on #10: Complex frequency validation"
      },
      {
        id: 12,
        title: "Partition Array Such That Maximum Difference Is K",
        difficulty: "medium",
        link: "https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/",
        description: "Builds on #11: Range-based grouping"
      },
      {
        id: 13,
        title: "Maximize Number of Subsequences in a String",
        difficulty: "medium",
        link: "https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/",
        description: "Builds on #12: State-based counting"
      },
      {
        id: 14,
        title: "Minimum Number of Frogs Croaking",
        difficulty: "medium",
        link: "https://leetcode.com/problems/minimum-number-of-frogs-croaking/",
        description: "Builds on #13: Multiple state tracking"
      },
      {
        id: 15,
        title: "Find Longest Awesome Substring",
        difficulty: "hard",
        link: "https://leetcode.com/problems/find-longest-awesome-substring/",
        description: "Builds on #14: Balanced frequency checking"
      },
      {
        id: 16,
        title: "K Divisible Elements Subarrays",
        difficulty: "medium",
        link: "https://leetcode.com/problems/k-divisible-elements-subarrays/",
        description: "Builds on #15: Pattern matching with frequencies"
      },
      {
        id: 17,
        title: "Maximum Population Year",
        difficulty: "easy",
        link: "https://leetcode.com/problems/maximum-population-year/",
        description: "Builds on #16: Time-based frequency counting"
      },
      {
        id: 18,
        title: "Population Range Query",
        difficulty: "hard",
        link: "https://leetcode.com/problems/population-range-query/",
        description: "Builds on #17: Range-based population tracking"
      },
      {
        id: 19,
        title: "Number of Zero-Filled Subarrays",
        difficulty: "medium",
        link: "https://leetcode.com/problems/number-of-zero-filled-subarrays/",
        description: "Builds on #18: Statistical threshold counting"
      },
      {
        id: 20,
        title: "Number of Smooth Descent Periods",
        difficulty: "medium",
        link: "https://leetcode.com/problems/number-of-smooth-descent-periods/",
        description: "Builds on #19: Track growth patterns"
      },
    ]
  },
  {
    id: 2,
    title: "Monotonic Queue Pattern",
    description: "Optimize sliding window operations with monotonic queues",
    questions: []
  },
  {
    id: 3,
    title: "Simulation Pattern",
    description: "Handle complex state changes and transitions",
    questions: []
  },
  {
    id: 4,
    title: "Linear Sorting Pattern",
    description: "Efficient sorting techniques for specific constraints",
    questions: []
  },
  {
    id: 5,
    title: "Meet in the Middle Pattern",
    description: "Optimize exponential solutions with bidirectional search",
    questions: []
  },
  {
    id: 6,
    title: "MO's Algorithm Pattern",
    description: "Handle offline range queries efficiently",
    questions: []
  },
  {
    id: 7,
    title: "Serialize/Deserialize Pattern",
    description: "Master data structure serialization and deserialization techniques",
    questions: [
      {
        id: 1,
        title: "Encode and Decode Strings",
        difficulty: "medium",
        link: "https://leetcode.com/problems/encode-and-decode-strings/",
        description: "Base Pattern: Length prefix encoding"
      },
      {
        id: 2,
        title: "String Compression",
        difficulty: "medium",
        link: "https://leetcode.com/problems/string-compression/",
        description: "Builds on #1: Run-length encoding"
      },
      {
        id: 3,
        title: "Run Length Encoding",
        difficulty: "easy",
        link: "https://practice.geeksforgeeks.org/problems/run-length-encoding/1",
        description: "Builds on #2: General compression"
      },
      {
        id: 4,
        title: "Check if String is Valid",
        difficulty: "medium",
        link: "https://practice.geeksforgeeks.org/problems/check-if-string-is-valid/1",
        description: "Builds on #3: Validation rules"
      },
      {
        id: 5,
        title: "Serialize Binary Tree",
        difficulty: "hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        description: "Base Pattern: Preorder traversal"
      },
      {
        id: 6,
        title: "Binary Tree to String",
        difficulty: "medium",
        link: "https://practice.geeksforgeeks.org/problems/binary-tree-to-string/1",
        description: "Builds on #5: Parentheses notation"
      },
      {
        id: 7,
        title: "Recover Binary Search Tree",
        difficulty: "hard",
        link: "https://practice.geeksforgeeks.org/problems/recover-binary-search-tree/1",
        description: "Builds on #6: BST properties"
      },
      {
        id: 8,
        title: "Level Order Spiral Traversal",
        difficulty: "medium",
        link: "https://practice.geeksforgeeks.org/problems/level-order-traversal-in-spiral-form/1",
        description: "Builds on #7: Level tracking"
      },
      {
        id: 9,
        title: "Clone Graph",
        difficulty: "medium",
        link: "https://leetcode.com/problems/clone-graph/",
        description: "Base Pattern: Node mapping"
      },
      {
        id: 10,
        title: "Clone Directed Graph",
        difficulty: "hard",
        link: "https://practice.geeksforgeeks.org/problems/clone-graph/1",
        description: "Builds on #9: Direction handling"
      },
      {
        id: 11,
        title: "Clone Binary Tree with Random Pointer",
        difficulty: "hard",
        link: "https://practice.geeksforgeeks.org/problems/clone-binary-tree-with-random-pointer/1",
        description: "Builds on #10: Extra pointer"
      },
      {
        id: 12,
        title: "Clone Weighted Graph",
        difficulty: "hard",
        link: "https://practice.geeksforgeeks.org/problems/clone-a-binary-tree/1",
        description: "Builds on #11: Edge weights"
      },
      {
        id: 13,
        title: "Serialize and Deserialize N-ary Tree",
        difficulty: "hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/",
        description: "Base Pattern: Child count encoding"
      },
      {
        id: 14,
        title: "Encode N-ary Tree to Binary",
        difficulty: "hard",
        link: "https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/",
        description: "Builds on #13: Structure transformation"
      },
      {
        id: 15,
        title: "Convert Graph to Tree",
        difficulty: "hard",
        link: "https://practice.geeksforgeeks.org/problems/convert-graph-to-tree/1",
        description: "Builds on #14: Cycle elimination"
      },
      {
        id: 16,
        title: "Multiple Graphs Serialization",
        difficulty: "hard",
        link: "https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/practice-problems/",
        description: "Builds on #15: Multi-graph handling"
      },
      {
        id: 17,
        title: "Encode with Checksum",
        difficulty: "hard",
        link: "https://practice.geeksforgeeks.org/problems/check-sum-string/1",
        description: "Base Pattern: Data validation"
      },
      {
        id: 18,
        title: "Encode with Length Prefix",
        difficulty: "medium",
        link: "https://www.hackerrank.com/challenges/string-construction/",
        description: "Builds on #17: Size encoding"
      },
      {
        id: 19,
        title: "Encode with Metadata",
        difficulty: "medium",
        link: "https://practice.geeksforgeeks.org/problems/serialize-and-deserialize-a-string/1",
        description: "Builds on #18: Header information"
      },
      {
        id: 20,
        title: "Encode with Error Recovery",
        difficulty: "medium",
        link: "https://practice.geeksforgeeks.org/problems/check-if-string-is-valid/1",
        description: "Builds on #19: Error handling"
      },
    ]
  },
  {
    id: 8,
    title: "Clone Pattern",
    description: "Deep copy complex data structures with various pointer relationships",
    questions: [
      {
        id: 1,
        title: "Copy List with Random Pointer",
        difficulty: "medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
        description: "Base Pattern: HashMap-based node mapping"
      },
      {
        id: 2,
        title: "Clone Graph",
        difficulty: "medium",
        link: "https://leetcode.com/problems/clone-graph/",
        description: "Builds on #1: Graph traversal with mapping"
      },
      {
        id: 3,
        title: "Clone Binary Tree",
        difficulty: "medium",
        link: "https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/",
        description: "Builds on #2: Simpler structure"
      },
      {
        id: 4,
        title: "Clone Binary Tree With Random Pointer",
        difficulty: "medium",
        link: "https://leetcode.com/problems/clone-binary-tree-with-random-pointer/",
        description: "Builds on #3: Additional pointer handling"
      },
      {
        id: 5,
        title: "Clone N-ary Tree",
        difficulty: "medium",
        link: "https://leetcode.com/problems/clone-n-ary-tree/",
        description: "Base Pattern: Vector-based children"
      },
      {
        id: 6,
        title: "Clone Binary Search Tree",
        difficulty: "medium",
        link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
        description: "Builds on #5: BST properties"
      },
      {
        id: 7,
        title: "Clone Perfect Binary Tree",
        difficulty: "medium",
        link: "https://practice.geeksforgeeks.org/problems/perfect-binary-tree/1",
        description: "Builds on #6: Level completeness"
      },
      {
        id: 8,
        title: "Clone Complete Binary Tree",
        difficulty: "medium",
        link: "https://leetcode.com/problems/complete-binary-tree-inserter/",
        description: "Builds on #7: Relaxed constraints"
      },
      {
        id: 9,
        title: "Deep Clone Linked List with Arbitrary Nodes",
        difficulty: "medium",
        link: "https://leetcode.com/problems/longest-uploaded-prefix/",
        description: "Base Pattern: Multi-pointer structure"
      },
      {
        id: 10,
        title: "Clone Doubly Linked List",
        difficulty: "medium",
        link: "https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
        description: "Builds on #9: Backward links"
      },
      {
        id: 11,
        title: "Clone Skiplist",
        difficulty: "hard",
        link: "https://leetcode.com/problems/design-skiplist/",
        description: "Builds on #10: Level-based links"
      },
      {
        id: 12,
        title: "Clone Stack",
        difficulty: "easy",
        link: "https://leetcode.com/problems/implement-stack-using-queues/",
        description: "Base Pattern: LIFO structure"
      },
      {
        id: 13,
        title: "Clone Queue",
        difficulty: "easy",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/",
        description: "Builds on #12: FIFO structure"
      },
      {
        id: 14,
        title: "Clone Deque",
        difficulty: "medium",
        link: "https://leetcode.com/problems/design-circular-deque/",
        description: "Builds on #13: Dual-ended operations"
      },
      {
        id: 15,
        title: "Clone Priority Queue",
        difficulty: "medium",
        link: "https://leetcode.com/problems/seat-reservation-manager/",
        description: "Base Pattern: Heap structure"
      },
      {
        id: 16,
        title: "Clone HashMap",
        difficulty: "easy",
        link: "https://leetcode.com/problems/design-hashmap/",
        description: "Builds on #15: Key-value mapping"
      },
      {
        id: 17,
        title: "Clone LRU Cache",
        difficulty: "medium",
        link: "https://leetcode.com/problems/lru-cache/",
        description: "Builds on #16: Access ordering"
      },
      {
        id: 18,
        title: "Clone LFU Cache",
        difficulty: "hard",
        link: "https://leetcode.com/problems/lfu-cache/",
        description: "Builds on #17: Frequency counting"
      },
      {
        id: 19,
        title: "Clone Circular Linked List",
        difficulty: "medium",
        link: "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/",
        description: "Base Pattern: Cycle handling"
      },
      {
        id: 20,
        title: "Clone Thread-Safe Data Structure",
        difficulty: "medium",
        link: "https://leetcode.com/problems/print-in-order/",
        description: "Builds on all previous: Synchronization"
      },
    ]
  },
  {
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
  },
  {
    id: 10,
    title: "Segment Tree Pattern",
    description: "Efficient range query and update operations",
    questions: [
      {
        id: 1,
        title: "Range Minimum Query",
        difficulty: "hard",
        link: "https://leetcode.com/problems/online-majority-element-in-subarray/",
        description: "Basic segment tree implementation"
      },
      {
        id: 2,
        title: "Range Maximum Query",
        difficulty: "medium",
        link: "https://www.geeksforgeeks.org/segment-tree-set-1-range-minimum-query/",
        description: "Differs by changing min to max"
      },
      {
        id: 3,
        title: "Range Sum Query",
        difficulty: "medium",
        link: "https://leetcode.com/problems/range-sum-query-mutable/",
        description: "Differs by changing min to sum"
      },
      {
        id: 4,
        title: "Range Product Query",
        difficulty: "medium",
        link: "https://example.com/range-product-query",
        description: "Differs by changing sum to product"
      },
      {
        id: 5,
        title: "Range Update Operation",
        difficulty: "hard",
        link: "https://www.geeksforgeeks.org/lazy-propagation-in-segment-tree/",
        description: "Basic lazy propagation"
      },
      {
        id: 6,
        title: "Range Addition Query",
        difficulty: "medium",
        link: "https://leetcode.com/problems/range-addition/",
        description: "Differs by handling range additions"
      },
      {
        id: 7,
        title: "Range Multiplication Query",
        difficulty: "hard",
        link: "https://example.com/range-multiplication-query",
        description: "Extends range operations to multiplication"
      },
      {
        id: 8,
        title: "Range XOR Query",
        difficulty: "medium",
        link: "https://leetcode.com/problems/xor-queries-of-a-subarray/",
        description: "Differs by using XOR operation"
      },
      {
        id: 9,
        title: "Count of Range Sum",
        difficulty: "hard",
        link: "https://leetcode.com/problems/count-of-range-sum/",
        description: "Counting within range"
      },
      {
        id: 10,
        title: "Range Bitwise AND",
        difficulty: "medium",
        link: "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
        description: "Applying bitwise operations"
      },
      {
        id: 11,
        title: "Range Frequency Query",
        difficulty: "medium",
        link: "https://leetcode.com/problems/range-frequency-queries/",
        description: "Tracking element frequency"
      },
      {
        id: 12,
        title: "Range Mode Query",
        difficulty: "hard",
        link: "https://example.com/range-mode-query",
        description: "Finding most frequent element"
      },
      {
        id: 13,
        title: "2D Range Sum Query",
        difficulty: "medium",
        link: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
        description: "Extending to 2D space"
      },
      {
        id: 14,
        title: "2D Range Minimum Query",
        difficulty: "hard",
        link: "https://www.geeksforgeeks.org/two-dimensional-segment-tree-sub-matrix-sum/",
        description: "2D version of problem #1"
      },
      {
        id: 15,
        title: "Matrix Block Sum",
        difficulty: "medium",
        link: "https://leetcode.com/problems/matrix-block-sum/",
        description: "Block-based range operations"
      },
      {
        id: 16,
        title: "Rectangle Area Sum",
        difficulty: "hard",
        link: "https://example.com/rectangle-area-sum",
        description: "Optimized 2D range sums"
      },
      {
        id: 17,
        title: "Sliding Window Maximum",
        difficulty: "hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
        description: "Dynamic range maximum"
      },
      {
        id: 18,
        title: "Count of Smaller Numbers After Self",
        difficulty: "hard",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
        description: "Range counting with updates"
      },
      {
        id: 19,
        title: "Range Sum with Updates",
        difficulty: "medium",
        link: "https://leetcode.com/problems/range-sum-query-mutable/",
        description: "Handling dynamic updates"
      },
      {
        id: 20,
        title: "Range Query with Multiple Operations",
        difficulty: "hard",
        link: "https://example.com/multi-op-range-query",
        description: "Combining different operations"
      },
    ]
  },
  {
    id: 11,
    title: "Binary Indexed Tree Pattern",
    description: "Optimize cumulative operations with Fenwick Trees",
    questions: [
      {
        id: 1,
        title: "Range Sum Queries",
        difficulty: "medium",
        link: "https://leetcode.com/problems/range-sum-query-mutable/",
        description: "Basic BIT implementation"
      },
      {
        id: 2,
        title: "Number of Longest Increasing Subsequence",
        difficulty: "medium",
        link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
        description: "Application to LIS counting"
      },
      {
        id: 3,
        title: "Counting Inversions",
        difficulty: "hard",
        link: "https://www.geeksforgeeks.org/counting-inversions/",
        description: "Differs by counting inversions"
      },
      {
        id: 4,
        title: "Count Smaller Numbers After Self",
        difficulty: "hard",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
        description: "Extension of inversion counting"
      },
      {
        id: 5,
        title: "Create Sorted Array",
        difficulty: "hard",
        link: "https://leetcode.com/problems/create-sorted-array-through-instructions/",
        description: "Building sorted array using BIT"
      },
      {
        id: 6,
        title: "Maximum Profitable Triplets",
        difficulty: "hard",
        link: "https://example.com/max-profitable-triplets",
        description: "Price-based range queries"
      },
      {
        id: 7,
        title: "Count Good Triplets",
        difficulty: "easy",
        link: "https://leetcode.com/problems/count-good-triplets/",
        description: "Modified triplet counting"
      },
      {
        id: 8,
        title: "Range Frequency Queries",
        difficulty: "medium",
        link: "https://leetcode.com/problems/range-frequency-queries/",
        description: "Frequency tracking with BIT"
      },
      {
        id: 9,
        title: "2D Range Sum Query",
        difficulty: "hard",
        link: "https://leetcode.com/problems/range-sum-query-2d-mutable/",
        description: "Basic 2D BIT"
      },
      {
        id: 10,
        title: "Rectangle Area Sum",
        difficulty: "hard",
        link: "https://example.com/rectangle-area-sum",
        description: "Optimized 2D queries"
      },
      {
        id: 11,
        title: "Count Points in Rectangles",
        difficulty: "medium",
        link: "https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/",
        description: "Point counting in 2D"
      },
      {
        id: 12,
        title: "Maximum Points in Rectangle",
        difficulty: "hard",
        link: "https://example.com/max-points-rectangle",
        description: "Finding maximum in ranges"
      },
      {
        id: 13,
        title: "Range Update Point Query",
        difficulty: "hard",
        link: "https://www.geeksforgeeks.org/range-update-point-query-using-bit/",
        description: "Range updates with point queries"
      },
      {
        id: 14,
        title: "Point Update Range Query",
        difficulty: "medium",
        link: "https://leetcode.com/problems/range-sum-query-mutable/",
        description: "Point updates with range queries"
      },
      {
        id: 15,
        title: "Range Update Range Query",
        difficulty: "hard",
        link: "https://www.geeksforgeeks.org/range-update-range-query-using-bit/",
        description: "Both updates and queries on ranges"
      },
      {
        id: 16,
        title: "Dynamic Range Minimum Query",
        difficulty: "hard",
        link: "https://example.com/dynamic-range-min-query",
        description: "Finding minimum with updates"
      },
      {
        id: 17,
        title: "Sliding Window Median",
        difficulty: "hard",
        link: "https://leetcode.com/problems/sliding-window-median/",
        description: "Using BIT for median finding"
      },
      {
        id: 18,
        title: "Count of Range Sum",
        difficulty: "hard",
        link: "https://leetcode.com/problems/count-of-range-sum/",
        description: "Range sum counting"
      },
      {
        id: 19,
        title: "Maximum Sum Queries",
        difficulty: "hard",
        link: "https://leetcode.com/problems/maximum-sum-queries/",
        description: "Finding maximum sums"
      },
      {
        id: 20,
        title: "Optimal Range Modification",
        difficulty: "hard",
        link: "https://example.com/optimal-range-mod",
        description: "Optimizing range operations"
      },
    ]
  }
];
