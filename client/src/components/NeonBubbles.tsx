import { useEffect, useRef } from 'react';

interface NeonBubblesProps {
  bubbleCount?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  speed?: number;
  className?: string;
}

const NeonBubbles = ({
  bubbleCount = 20,
  colors = ['#ff6b00', '#ff9500', '#ffb700', '#ff5100', '#ff3c00'],
  minSize = 10,
  maxSize = 80,
  speed = 1,
  className = ''
}: NeonBubblesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create bubbles
    interface Bubble {
      x: number;
      y: number;
      size: number;
      color: string;
      alpha: number;
      speed: number;
      pulse: number;
      pulseSpeed: number;
      rotate: number;
      rotateSpeed: number;
      directionX: number;
      directionY: number;
    }
    
    const bubbles: Bubble[] = [];
    
    // Initialize bubbles with random properties
    const initBubbles = () => {
      bubbles.length = 0;
      
      for (let i = 0; i < bubbleCount; i++) {
        const size = Math.random() * (maxSize - minSize) + minSize;
        
        bubbles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.2,
          speed: (Math.random() * 0.5 + 0.2) * speed,
          pulse: 0,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          rotate: Math.random() * Math.PI * 2,
          rotateSpeed: (Math.random() * 0.02 + 0.01) * (Math.random() > 0.5 ? 1 : -1),
          directionX: Math.random() > 0.5 ? 1 : -1,
          directionY: Math.random() > 0.5 ? 1 : -1
        });
      }
    };
    
    // Draw a single bubble
    const drawBubble = (bubble: Bubble) => {
      ctx.save();
      
      // Apply pulse effect to size
      const pulseEffect = 1 + Math.sin(bubble.pulse) * 0.2;
      const currentSize = bubble.size * pulseEffect;
      
      // Create radial gradient for glow effect
      const gradient = ctx.createRadialGradient(
        bubble.x, bubble.y, 0,
        bubble.x, bubble.y, currentSize
      );
      
      // Center color (more opaque)
      gradient.addColorStop(0, `${bubble.color}${Math.floor(bubble.alpha * 255).toString(16).padStart(2, '0')}`);
      // Edge color (more transparent)
      gradient.addColorStop(0.6, `${bubble.color}20`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, currentSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw neon ring
      ctx.strokeStyle = bubble.color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = bubble.alpha * 0.7;
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, currentSize * 0.85, 0, Math.PI * 2);
      ctx.stroke();
      
      // Optional: Draw geometric shape inside (pentagon)
      ctx.globalAlpha = bubble.alpha * 0.9;
      ctx.beginPath();
      const innerSize = currentSize * 0.4;
      
      // Rotate the shape
      ctx.translate(bubble.x, bubble.y);
      ctx.rotate(bubble.rotate);
      ctx.translate(-bubble.x, -bubble.y);
      
      // Draw a 5-point star or another shape
      for (let i = 0; i < 5; i++) {
        const angle = (i * Math.PI * 2) / 5;
        const x = bubble.x + innerSize * Math.cos(angle);
        const y = bubble.y + innerSize * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.closePath();
      ctx.stroke();
      
      ctx.restore();
    };
    
    // Update bubble position and properties
    const updateBubble = (bubble: Bubble) => {
      // Update pulse
      bubble.pulse += bubble.pulseSpeed;
      
      // Update rotation
      bubble.rotate += bubble.rotateSpeed;
      
      // Update position
      bubble.x += bubble.speed * bubble.directionX;
      bubble.y += bubble.speed * bubble.directionY;
      
      // Bounce off edges
      if (bubble.x - bubble.size < 0) {
        bubble.directionX = 1;
      } else if (bubble.x + bubble.size > canvas.width) {
        bubble.directionX = -1;
      }
      
      if (bubble.y - bubble.size < 0) {
        bubble.directionY = 1;
      } else if (bubble.y + bubble.size > canvas.height) {
        bubble.directionY = -1;
      }
    };
    
    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each bubble
      bubbles.forEach(bubble => {
        updateBubble(bubble);
        drawBubble(bubble);
      });
      
      // Request next frame
      requestAnimationFrame(animate);
    };
    
    // Set up canvas and start animation
    window.addEventListener('resize', resize);
    resize();
    initBubbles();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [bubbleCount, colors, minSize, maxSize, speed]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full -z-20 pointer-events-none ${className}`}
    />
  );
};

export default NeonBubbles;