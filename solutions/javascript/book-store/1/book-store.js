//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const PRICE = 800;
const DISCOUNTS = [0, 0, 0.05, 0.10, 0.20, 0.25];

export function cost(books) {
  if (books.length === 0) return 0;

  // Count the frequency of each book (1-5)
  const freq = [0, 0, 0, 0, 0];
  for (const book of books) {
    freq[book - 1]++;
  }

  // Memoization cache to store already computed states
  const memo = new Map();

  // Recursive function to find the minimum cost
  function minCost(freq) {
    const key = freq.join(",");
    if (memo.has(key)) {
      return memo.get(key);
    }

    // Base case: no books left
    if (freq.every((count) => count === 0)) {
      return 0;
    }

    // Try all possible group sizes (2, 3, 4, 5)
    let minTotal = Infinity;
    for (let groupSize = 2; groupSize <= 5; groupSize++) {
      if (canFormGroup(freq, groupSize)) {
        // Generate all possible groups of `groupSize` unique books
        const groupCombinations = generateGroupCombinations(freq, groupSize);
        for (const newFreq of groupCombinations) {
          // Calculate the cost for this group
          const groupCost = groupSize * PRICE * (1 - DISCOUNTS[groupSize]);

          // Recurse and add to total
          const total = groupCost + minCost(newFreq);
          if (total < minTotal) {
            minTotal = total;
          }
        }
      }
    }

    // If no groups can be formed, buy individually
    if (minTotal === Infinity) {
      minTotal = freq.reduce((sum, count) => sum + count * PRICE, 0);
    }

    // Store the result in the memoization cache
    memo.set(key, minTotal);
    return minTotal;
  }

  return minCost(freq);
}

// Helper function to check if a group of `groupSize` can be formed
function canFormGroup(freq, groupSize) {
  let count = 0;
  for (let i = 0; i < 5; i++) {
    if (freq[i] > 0) {
      count++;
    }
  }
  return count >= groupSize;
}

// Helper function to generate all possible group combinations
function generateGroupCombinations(freq, groupSize) {
  const combinations = [];
  const currentFreq = [...freq];

  function backtrack(start, booksInGroup, currentFreq) {
    if (booksInGroup === groupSize) {
      combinations.push([...currentFreq]);
      return;
    }

    for (let i = start; i < 5; i++) {
      if (currentFreq[i] > 0) {
        currentFreq[i]--;
        backtrack(i + 1, booksInGroup + 1, currentFreq);
        currentFreq[i]++;
      }
    }
  }

  backtrack(0, 0, currentFreq);
  return combinations;
}


