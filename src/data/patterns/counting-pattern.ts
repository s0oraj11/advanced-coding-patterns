import { Pattern } from '../types';

export const countingPattern: Pattern = {
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
};
