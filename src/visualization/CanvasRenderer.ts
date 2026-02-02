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
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();

    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;

    this.ctx.setTransform(1, 0, 0, 1, 0, 0); // 🔑 reset
    this.ctx.scale(dpr, dpr);

    this.width = rect.width;
    this.height = rect.height;
  }

  render(state: RenderState) {
    if (!state.bars.length || this.width === 0 || this.height === 0) {
      return;
    }
    this.ctx.clearRect(0, 0, this.width, this.height);

    const barWidth = this.width / state.bars.length;
    const max = Math.max(...state.bars.map(b => b.value));

    state.bars.forEach((bar, i) => {
      const h = (bar.value / max) * this.height;
      this.ctx.fillStyle = bar.color;
      this.ctx.fillRect(i * barWidth, this.height - h, barWidth - 1, h);
    });
  }

  // render() {
  //   this.ctx.clearRect(0, 0, this.width, this.height);

  //   this.ctx.fillStyle = 'red';
  //   this.ctx.fillRect(0, 0, this.width, this.height);
  // }


}
