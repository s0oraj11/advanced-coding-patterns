import { Pattern } from '../types';

export const monotonicQueuePattern: Pattern = {
  id: 2,
  title: "Monotonic Queue Pattern",
  description: "Master the monotonic queue pattern for efficient sliding window operations and range queries.",
  questions: [
    {
      id: 1,
      title: "Sliding Window Maximum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/sliding-window-maximum/",
      description: "Base Pattern: Basic monotonic queue. Key Operation: while deque and nums[deque[-1]] < nums[i]: deque.pop()"
    },
    {
      id: 2,
      title: "Maximum Window Average",
      difficulty: "easy",
      link: "https://leetcode.com/problems/maximum-average-subarray-i/",
      description: "Builds on #1: Changes to average calculation. Key Difference: Running sum maintenance"
    },
    {
      id: 3,
      title: "Longest Subarray of 1's After Deleting One Element",
      difficulty: "medium",
      link: "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/",
      description: "Find the longest subarray of 1's after deleting one element"
    },
    {
      id: 4,
      title: "Maximum Number of K-Sum Pairs",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-number-of-k-sum-pairs/",
      description: "Count the number of pairs that sum up to k"
    },
    {
      id: 5,
      title: "Find All Anagrams in a String",
      difficulty: "medium",
      link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
      description: "Find all start indices of anagrams of p in s"
    },
    {
      id: 6,
      title: "Minimum Window Substring",
      difficulty: "hard",
      link: "https://leetcode.com/problems/minimum-window-substring/",
      description: "Find the minimum window in s which will contain all the characters of t"
    },
    {
      id: 7,
      title: "Subarrays with K Different Integers",
      difficulty: "hard",
      link: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
      description: "Count the number of subarrays with exactly K different integers"
    },
    {
      id: 8,
      title: "Longest Substring with At Most K Distinct Characters",
      difficulty: "medium",
      link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
      description: "Find the length of the longest substring with at most K distinct characters"
    },
    {
      id: 9,
      title: "Max Sliding Window",
      difficulty: "medium",
      link: "https://leetcode.com/problems/sliding-window-maximum/",
      description: "Return the maximum value in each sliding window"
    },
    {
      id: 10,
      title: "Kth Largest Element in a Stream",
      difficulty: "medium",
      link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
      description: "Design a class to find the kth largest element in a stream"
    },
    {
      id: 11,
      title: "Daily Temperatures",
      difficulty: "medium",
      link: "https://leetcode.com/problems/daily-temperatures/",
      description: "Return the number of days until a warmer temperature"
    },
    {
      id: 12,
      title: "Car Fleet",
      difficulty: "medium",
      link: "https://leetcode.com/problems/car-fleet/",
      description: "Calculate the number of car fleets that will arrive at the destination"
    },
    {
      id: 13,
      title: "Trapping Rain Water",
      difficulty: "hard",
      link: "https://leetcode.com/problems/trapping-rain-water/",
      description: "Calculate how much water can be trapped after raining"
    },
    {
      id: 14,
      title: "Sliding Window Median",
      difficulty: "hard",
      link: "https://leetcode.com/problems/sliding-window-median/",
      description: "Find the median of all elements in the sliding window"
    },
    {
      id: 15,
      title: "Longest Repeating Character Replacement",
      difficulty: "medium",
      link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
      description: "Find the length of the longest substring that can be obtained by replacing at most k characters"
    },
    {
      id: 16,
      title: "Count of Smaller Numbers After Self",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
      description: "Count the number of smaller elements to the right of each element"
    },
    {
      id: 17,
      title: "Number of Subarrays with Bounded Maximum",
      difficulty: "medium",
      link: "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/",
      description: "Count the number of subarrays with a maximum value within a given range"
    },
    {
      id: 18,
      title: "Maximum Number of Events That Can Be Attended",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/",
      description: "Find the maximum number of events that can be attended"
    },
    {
      id: 19,
      title: "Minimum Number of Arrows to Burst Balloons",
      difficulty: "medium",
      link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
      description: "Find the minimum number of arrows needed to burst all balloons"
    },
    {
      id: 20,
      title: "Find K Pairs with Smallest Sums",
      difficulty: "medium",
      link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
      description: "Find the k pairs with the smallest sums from two arrays"
    }
  ]
};
