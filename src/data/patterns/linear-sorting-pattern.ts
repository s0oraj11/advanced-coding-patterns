import { Pattern } from '../types';

export const linearSortingPattern: Pattern = {
  id: 4,
  title: "Linear Sorting Pattern",
  description: "Master linear-time sorting techniques and their applications in solving complex problems.",
  questions: [
    {
      id: 1,
      title: "Height Checker",
      difficulty: "easy",
      link: "https://leetcode.com/problems/height-checker/",
      description: "Base Pattern: Fixed-range counting. Key Operation: count[height] += 1"
    },
    {
      id: 2,
      title: "Sort Colors",
      difficulty: "medium",
      link: "https://leetcode.com/problems/sort-colors/",
      description: "Builds on #1: Three-pointer technique. Key Difference: One-pass partitioning"
    },
    {
      id: 3,
      title: "Bucket Sort",
      difficulty: "medium",
      link: "https://leetcode.com/problems/bucket-sort/",
      description: "Builds on #2: Distributes elements into buckets"
    },
    {
      id: 4,
      title: "Pigeonhole Sort",
      difficulty: "medium",
      link: "https://en.wikipedia.org/wiki/Pigeonhole_sort",
      description: "Builds on #3: Uses pigeonhole principle"
    },
    {
      id: 5,
      title: "Flashsort",
      difficulty: "hard",
      link: "https://en.wikipedia.org/wiki/Flashsort",
      description: "Builds on #4: Uses distribution for sorting"
    },
    {
      id: 6,
      title: "Cycle Sort",
      difficulty: "medium",
      link: "https://en.wikipedia.org/wiki/Cycle_sort",
      description: "Builds on #5: In-place, non-comparison sorting"
    },
    {
      id: 7,
      title: "Gnome Sort",
      difficulty: "easy",
      link: "https://en.wikipedia.org/wiki/Gnome_sort",
      description: "Builds on #6: Simple, recursive sorting"
    },
    {
      id: 8,
      title: "Comb Sort",
      difficulty: "medium",
      link: "https://en.wikipedia.org/wiki/Comb_sort",
      description: "Builds on #7: Improves on bubble sort"
    },
    {
      id: 9,
      title: "Bead Sort",
      difficulty: "hard",
      link: "https://en.wikipedia.org/wiki/Bead_sort",
      description: "Builds on #8: Uses gravity for sorting"
    },
    {
      id: 10,
      title: "Pancake Sort",
      difficulty: "medium",
      link: "https://en.wikipedia.org/wiki/Pancake_sorting",
      description: "Builds on #9: Flipping elements to sort"
    },
    {
      id: 11,
      title: "Sleep Sort",
      difficulty: "easy",
      link: "https://en.wikipedia.org/wiki/Sleep_sort",
      description: "Builds on #10: Uses timing for sorting"
    },
    {
      id: 12,
      title: "Stooge Sort",
      difficulty: "hard",
      link: "https://en.wikipedia.org/wiki/Stooge_sort",
      description: "Builds on #11: Recursive sorting algorithm"
    },
    {
      id: 13,
      title: "Bitonic Sort",
      difficulty: "hard",
      link: "https://en.wikipedia.org/wiki/Bitonic_sorter",
      description: "Builds on #12: Parallel sorting algorithm"
    },
    {
      id: 14,
      title: "Odd-Even Sort",
      difficulty: "medium",
      link: "https://en.wikipedia.org/wiki/Odd%E2%80%93even_sort",
      description: "Builds on #13: Parallel sorting algorithm"
    },
    {
      id: 15,
      title: "Bogo Sort",
      difficulty: "hard",
      link: "https://en.wikipedia.org/wiki/Bogo_sort",
      description: "Builds on #14: Randomized sorting algorithm"
    },
    {
      id: 16,
      title: "Strand Sort",
      difficulty: "medium",
      link: "https://en.wikipedia.org/wiki/Strand_sort",
      description: "Builds on #15: Merges sorted sublists"
    },
    {
      id: 17,
      title: "Tree Sort",
      difficulty: "medium",
      link: "https://en.wikipedia.org/wiki/Tree_sort",
      description: "Builds on #16: Uses binary search tree"
    },
    {
      id: 18,
      title: "Shell Sort",
      difficulty: "medium",
      link: "https://en.wikipedia.org/wiki/Shellsort",
      description: "Builds on #17: Generalization of insertion sort"
    },
    {
      id: 19,
      title: "Tim Sort",
      difficulty: "medium",
      link: "https://en.wikipedia.org/wiki/Timsort",
      description: "Builds on #18: Hybrid sorting algorithm"
    },
    {
      id: 20,
      title: "Smooth Sort",
      difficulty: "hard",
      link: "https://en.wikipedia.org/wiki/Smoothsort",
      description: "Builds on #19: In-place sorting algorithm"
    },
  ]
};
