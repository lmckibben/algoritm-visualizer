import { useEffect, useRef } from 'react';
import { CanvasRenderer } from './visualization/CanvasRenderer';

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const renderer = new CanvasRenderer(canvasRef.current);

    const onResize = () => renderer.resize();
    window.addEventListener('resize', onResize);

    renderer.render({
      bars: [
        { value: 10, color: '#4B5563' },
        { value: 20, color: '#4B5563' },
        { value: 30, color: '#4B5563' },
        { value: 40, color: '#4B5563' },
        { value: 50, color: '#4B5563' },
        { value: 60, color: '#4B5563' },
        { value: 70, color: '#4B5563' },
        { value: 80, color: '#4B5563' }
      ]
    });

	return () => window.removeEventListener('resize', onResize);
  }, []);


  return (
    <div style={{ padding: 20 }}>
      <h1>Algorithm Visualizer</h1>
      <div
        style={{
          width: '100%',
          height: '400px',
          border: '1px solid #E5E7EB'
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        />
      </div>
    </div>
  );
}
