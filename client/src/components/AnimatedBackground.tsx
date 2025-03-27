import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Create bubbles
    interface Bubble {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
    }
    
    // Set primary color (orange)
    const primaryColor = '#ff6b00';
    
    // Bubble colors
    const colors = [
      primaryColor, 
      '#ff9500', 
      '#ffb700', 
      '#ff3c00',
      '#ff7b00',
      '#ff5500'
    ];
    
    const bubbles: Bubble[] = [];
    const bubbleCount = 80; // Many more small bubbles
    
    // Create bubbles
    for (let i = 0; i < bubbleCount; i++) {
      const size = Math.random() * 8 + 2; // Tiny bubbles
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.1, // Very slow, gentle movement
        speedY: (Math.random() - 0.5) * 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.002,
        opacity: Math.random() * 0.2 + 0.05 // Very subtle visibility
      });
    }
    
    // Animation function
    const animate = () => {
      // Create a more dramatic trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.025)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Get current time for animations
      const currentTime = Date.now() / 1000;
      
      // Draw and update bubbles
      bubbles.forEach(bubble => {
        // Calculate a sine wave motion for more organic movement
        const sineOffset = Math.sin(currentTime * 0.5 + bubble.x * 0.01) * 0.5;
        const cosOffset = Math.cos(currentTime * 0.3 + bubble.y * 0.01) * 0.5;
        
        // Update position with sine wave influence
        bubble.x += bubble.speedX + sineOffset * 0.3;
        bubble.y += bubble.speedY + cosOffset * 0.3;
        bubble.rotation += bubble.rotationSpeed;
        
        // Boundary check - wrap around screen
        if (bubble.x < -bubble.size) bubble.x = canvas.width + bubble.size;
        if (bubble.x > canvas.width + bubble.size) bubble.x = -bubble.size;
        if (bubble.y < -bubble.size) bubble.y = canvas.height + bubble.size;
        if (bubble.y > canvas.height + bubble.size) bubble.y = -bubble.size;
        
        // Draw bubble
        ctx.save();
        ctx.translate(bubble.x, bubble.y);
        ctx.rotate(bubble.rotation);
        
        // Enhanced neon glow effect with pulsing
        const pulseIntensity = (Math.sin(currentTime * 1.5 + bubble.x * 0.01 + bubble.y * 0.01) * 0.2 + 1.0);
        
        // Create outer glow
        const outerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, bubble.size * 1.2);
        outerGlow.addColorStop(0, `${bubble.color}${Math.floor((bubble.opacity * pulseIntensity) * 255).toString(16).padStart(2, '0')}`);
        outerGlow.addColorStop(0.6, `${bubble.color}20`);
        outerGlow.addColorStop(1, 'transparent');
        
        // Create inner glow
        const innerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, bubble.size * 0.8);
        innerGlow.addColorStop(0, `${bubble.color}${Math.floor((bubble.opacity * 1.5 * pulseIntensity) * 255).toString(16).padStart(2, '0')}`);
        innerGlow.addColorStop(0.7, `${bubble.color}40`);
        innerGlow.addColorStop(1, `${bubble.color}10`);
        
        // Draw outer glow
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(0, 0, bubble.size * 1.2, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw inner glow
        ctx.fillStyle = innerGlow;
        ctx.beginPath();
        ctx.arc(0, 0, bubble.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Just a simple dot in the center for the smallest bubbles
        const time = Date.now() / 1000;
        const pulseSize = (Math.sin(time * 2 + bubble.x + bubble.y) * 0.2 + 0.8) * bubble.size * 0.3;
        
        ctx.beginPath();
        ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.globalAlpha = bubble.opacity * 1.5;
        ctx.fill();
        
        ctx.restore();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
    />
  );
};

export default AnimatedBackground;