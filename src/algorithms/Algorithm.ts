import type { AlgorithmEvent } from './AlgorithmEvent';

export type AlgorithmStepResult<State> =
  | {
      done: false;
      state: State;
      events: AlgorithmEvent[];
    }
  | {
      done: true;
      events: AlgorithmEvent[];
    };

export interface Algorithm<Input, State> {
  /**
   * Initializes algorithm state from raw input.
   * Called exactly once before stepping begins.
   */
  init(input: Input): State;

  /**
   * Executes a single logical step of the algorithm.
   * Returns emitted events for visualization.
   */
  next(state: State): AlgorithmStepResult<State>;
}
