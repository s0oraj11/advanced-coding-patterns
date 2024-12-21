import { Pattern } from '../types';

export const serializeDeserializePattern: Pattern = {
  id: 7,
  title: "Serialize/Deserialize Pattern",
  description: "Learn techniques for converting complex data structures to strings and back, essential for data persistence and transmission.",
  questions: [
    {
      id: 1,
      title: "Encode and Decode Strings",
      difficulty: "medium",
      link: "https://leetcode.com/problems/encode-and-decode-strings/",
      description: "Design an algorithm to encode a list of strings to a string and decode it"
    },
    {
      id: 2,
      title: "String Compression",
      difficulty: "medium",
      link: "https://leetcode.com/problems/string-compression/",
      description: "Implement run-length encoding for string compression"
    },
    {
      id: 3,
      title: "Serialize Binary Tree",
      difficulty: "hard",
      link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      description: "Design an algorithm to serialize and deserialize a binary tree"
    },
    {
      id: 4,
      title: "Clone Graph",
      difficulty: "medium",
      link: "https://leetcode.com/problems/clone-graph/",
      description: "Deep clone a connected undirected graph"
    }
  ]
};