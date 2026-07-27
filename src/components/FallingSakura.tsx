import React, { useEffect, useRef } from 'react';

interface FallingSakuraProps {
  petalCount?: number;
  className?: string;
}

const FallingSakura: React.FC<FallingSakuraProps> = ({ petalCount = 30, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    updateSize();

    let width = canvas.width;
    let height = canvas.height;

    // Helper for random range
    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    // Define leaf colors (Sakura-like soft pinks and soft whites)
    const petalColors = ['rgba(255, 230, 235, 0.85)', 'rgba(255, 210, 225, 0.8)', 'rgba(245, 195, 210, 0.75)', 'rgba(255, 240, 245, 0.9)'];

    const petals = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: random(8, 16),
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      speedX: random(-0.4, 0.4),
      speedY: random(0.6, 1.4),
      rotation: random(0, Math.PI * 2),
      wobble: random(0, Math.PI * 2),
      wobbleSpeed: random(0.02, 0.05),
    }));

    // Function to draw a single petal
    const drawPetal = (petal: typeof petals[0]) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);

      ctx.beginPath();
      // Complex organic petal shape using bezier curves
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-petal.size / 2, -petal.size / 3, -petal.size / 3, -petal.size, 0, -petal.size / 1.5);
      ctx.bezierCurveTo(petal.size / 3, -petal.size, petal.size / 2, -petal.size / 3, 0, 0);
      ctx.fillStyle = petal.color;
      ctx.fill();

      ctx.restore();
    };

    // Function to update a single petal's position and wobble
    const updatePetal = (petal: typeof petals[0]) => {
      petal.x += petal.speedX + Math.sin(petal.wobble) * 0.3;
      petal.y += petal.speedY;
      petal.rotation += 0.01;
      petal.wobble += petal.wobbleSpeed;

      // Wrap back inside section bounds
      if (petal.x < -petal.size) petal.x = width + petal.size;
      if (petal.x > width + petal.size) petal.x = -petal.size;
      if (petal.y > height + petal.size) {
        petal.y = -petal.size;
        petal.x = Math.random() * width;
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      petals.forEach((petal) => {
        drawPetal(petal);
        updatePetal(petal);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      updateSize();
      width = canvas.width;
      height = canvas.height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [petalCount]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    />
  );
};

export default FallingSakura;
