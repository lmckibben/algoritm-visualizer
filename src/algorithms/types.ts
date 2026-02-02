export type AlgorithmEvent =
  | { type: 'compare'; indices: [number, number] }
  | { type: 'swap'; indices: [number, number] }
  | { type: 'overwrite'; index: number; value: number }
  | { type: 'mark'; index: number; role: 'pivot' | 'sorted' };

export interface Algorithm<Input, State> {
  init(input: Input): State;
  next(state: State):
    | { done: false; state: State; events: AlgorithmEvent[] }
    | { done: true; events: AlgorithmEvent[] };
}
