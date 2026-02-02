export type AlgorithmEvent =
  | CompareEvent
  | SwapEvent
  | OverwriteEvent
  | MarkEvent
  | UnmarkEvent;

export interface CompareEvent {
  type: 'compare';
  indices: [number, number];
}

export interface SwapEvent {
  type: 'swap';
  indices: [number, number];
}

export interface OverwriteEvent {
  type: 'overwrite';
  index: number;
  value: number;
}

export interface MarkEvent {
  type: 'mark';
  index: number;
  role: 'active' | 'pivot' | 'sorted';
}

export interface UnmarkEvent {
  type: 'unmark';
  index: number;
}
