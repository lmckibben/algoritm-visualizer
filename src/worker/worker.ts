import { bubbleSort, type BubbleSortState} from '../algorithms/sorting/bubbleSort';

const algorithm = bubbleSort;
let state: BubbleSortState | null = null

self.onmessage = (e: MessageEvent) => {
  const msg = e.data;

  if (msg.type === 'INIT') {
    state = algorithm.init(msg.input);
  }

  if (msg.type === 'STEP') {
    if (state === null) return;

    const result = algorithm.next(state);

    self.postMessage({ type: 'EVENTS', events: result.events });

    if (!result.done) {
      state = result.state;
    } else {
      self.postMessage({ type: 'DONE' });
    }
  }
};
