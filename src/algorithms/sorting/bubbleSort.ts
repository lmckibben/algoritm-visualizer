import type { Algorithm, AlgorithmEvent } from '../types';

export interface BubbleSortState {
  arr: number[];
  i: number;
  j: number;
  swappedInPass: boolean;
}

export const bubbleSort: Algorithm<number[], BubbleSortState> = {
  init(input) {
    return {
      arr: [...input],
      i: 0,
      j: 0,
      swappedInPass: false
    };
  },

  next(state) {
    const { arr, i, j } = state;
    const events: AlgorithmEvent[] = [];

    // Finished all passes
    if (i >= arr.length - 1) {
      return {
        done: true,
        events: arr.map((_, idx) => ({
          type: 'mark',
          index: idx,
          role: 'sorted'
        }))
      };
    }

    // Compare adjacent elements
    events.push({
      type: 'compare',
      indices: [j, j + 1]
    });

    let swappedInPass = state.swappedInPass;

    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      swappedInPass = true;

      events.push({
        type: 'swap',
        indices: [j, j + 1]
      });
    }

    // Move to next comparison
    let nextI = i;
    let nextJ = j + 1;

    // End of pass
    if (nextJ >= arr.length - i - 1) {
      events.push({
        type: 'mark',
        index: arr.length - i - 1,
        role: 'sorted'
      });

      nextI = i + 1;
      nextJ = 0;
      swappedInPass = false;
    }

    return {
      done: false,
      state: {
        arr,
        i: nextI,
        j: nextJ,
        swappedInPass
      },
      events
    };
  }
};
