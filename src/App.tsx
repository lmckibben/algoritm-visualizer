import { useEffect, useRef } from 'react';
import { CanvasRenderer } from './visualization/CanvasRenderer';

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const renderer = new CanvasRenderer(canvasRef.current);

    // placeholder render
    renderer.render({
      bars: [
        { value: 5, color: '#4B5563' },
        { value: 2, color: '#4B5563' },
        { value: 8, color: '#4B5563' }
      ]
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Algorithm Visualizer</h1>
      <canvas ref={canvasRef} style={{ width: '100%', height: '400px' }} />
    </div>
  );
}
