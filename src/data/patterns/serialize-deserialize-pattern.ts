import { Pattern } from '../types';

export const serializeDeserializePattern: Pattern = {
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
};
