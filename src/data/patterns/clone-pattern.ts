import { Pattern } from '../types';

export const clonePattern: Pattern = {
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
};
