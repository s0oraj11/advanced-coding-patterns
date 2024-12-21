import { Pattern } from '../types';

export const meetInMiddlePattern: Pattern = {
  id: 5,
  title: "Meet in Middle Pattern",
  description: "Learn to solve complex problems by dividing the search space and meeting in the middle.",
  questions: [
    {
      id: 1,
      title: "Partition Equal Subset Sum",
      difficulty: "medium",
      link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      description: "Base Pattern: Single split meet-in-middle. Key Operation: subsets1[sum1] = True"
    },
    {
      id: 2,
      title: "Partition Array Into Two Arrays",
      difficulty: "hard",
      link: "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/",
      description: "Builds on #1: Size-constrained splits. Key Difference: Equal size requirement"
    },
    {
      id: 3,
      title: "Count of Subarrays with Given XOR",
      difficulty: "medium",
      link: "https://leetcode.com/problems/count-of-subarrays-with-given-xor/",
      description: "Base Pattern: Meet in the middle for XOR. Key Operation: Use prefix XORs"
    },
    {
      id: 4,
      title: "Two Sum II - Input Array Is Sorted",
      difficulty: "easy",
      link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      description: "Builds on #3: Two-pointer technique. Key Difference: Sorted array usage"
    },
    {
      id: 5,
      title: "Find the Duplicate Number",
      difficulty: "medium",
      link: "https://leetcode.com/problems/find-the-duplicate-number/",
      description: "Base Pattern: Cycle detection. Key Operation: Tortoise and hare algorithm"
    },
    {
      id: 6,
      title: "Maximum Product Subarray",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-product-subarray/",
      description: "Builds on #5: Dynamic programming. Key Difference: Track max and min products"
    },
    {
      id: 7,
      title: "Subarray Sum Equals K",
      difficulty: "medium",
      link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      description: "Base Pattern: Hash map for prefix sums. Key Operation: Count occurrences"
    },
    {
      id: 8,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "medium",
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      description: "Builds on #7: Sliding window technique. Key Difference: Track last seen indices"
    },
    {
      id: 9,
      title: "Minimum Window Substring",
      difficulty: "hard",
      link: "https://leetcode.com/problems/minimum-window-substring/",
      description: "Base Pattern: Sliding window with conditions. Key Operation: Expand and contract"
    },
    {
      id: 10,
      title: "Kth Largest Element in an Array",
      difficulty: "medium",
      link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      description: "Builds on #9: Quickselect algorithm. Key Difference: Partitioning logic"
    },
    {
      id: 11,
      title: "Top K Frequent Elements",
      difficulty: "medium",
      link: "https://leetcode.com/problems/top-k-frequent-elements/",
      description: "Base Pattern: Bucket sort. Key Operation: Group by frequency"
    },
    {
      id: 12,
      title: "Group Anagrams",
      difficulty: "medium",
      link: "https://leetcode.com/problems/group-anagrams/",
      description: "Builds on #11: Hash map for grouping. Key Difference: Sort or count characters"
    },
    {
      id: 13,
      title: "Valid Anagram",
      difficulty: "easy",
      link: "https://leetcode.com/problems/valid-anagram/",
      description: "Base Pattern: Character count comparison. Key Operation: Use hash map"
    },
    {
      id: 14,
      title: "Longest Palindromic Substring",
      difficulty: "medium",
      link: "https://leetcode.com/problems/longest-palindromic-substring/",
      description: "Builds on #13: Expand around center. Key Difference: Two-pointer technique"
    },
    {
      id: 15,
      title: "Palindrome Partitioning",
      difficulty: "medium",
      link: "https://leetcode.com/problems/palindrome-partitioning/",
      description: "Base Pattern: Backtracking. Key Operation: Check for palindromes"
    },
    {
      id: 16,
      title: "Combination Sum",
      difficulty: "medium",
      link: "https://leetcode.com/problems/combination-sum/",
      description: "Builds on #15: Backtracking with combinations. Key Difference: Track sums"
    },
    {
      id: 17,
      title: "Letter Combinations of a Phone Number",
      difficulty: "medium",
      link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      description: "Base Pattern: Backtracking with mapping. Key Operation: Generate combinations"
    },
    {
      id: 18,
      title: "Permutations",
      difficulty: "medium",
      link: "https://leetcode.com/problems/permutations/",
      description: "Builds on #17: Backtracking for permutations. Key Difference: Track used elements"
    },
    {
      id: 19,
      title: "Subsets",
      difficulty: "medium",
      link: "https://leetcode.com/problems/subsets/",
      description: "Base Pattern: Backtracking for subsets. Key Operation: Include or exclude"
    },
    {
      id: 20,
      title: "Combination Sum II",
      difficulty: "medium",
      link: "https://leetcode.com/problems/combination-sum-ii/",
      description: "Builds on #19: Handle duplicates. Key Difference: Track used indices"
    }
  ]
};
