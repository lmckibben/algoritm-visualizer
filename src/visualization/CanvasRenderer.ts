import type { RenderState } from './types';

export class CanvasRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: number = 0;
  private height: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
  }

  resize() {
    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  render(state: RenderState) {
    this.ctx.clearRect(0, 0, this.width, this.height);

    const barWidth = this.width / state.bars.length;
    const max = Math.max(...state.bars.map(b => b.value));

    state.bars.forEach((bar, i) => {
      const h = (bar.value / max) * this.height;
      this.ctx.fillStyle = bar.color;
      this.ctx.fillRect(i * barWidth, this.height - h, barWidth - 1, h);
    });
  }
}
