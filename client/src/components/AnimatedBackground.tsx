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
    const bubbleCount = 20; // Number of bubbles
    
    // Create bubbles
    for (let i = 0; i < bubbleCount; i++) {
      const size = Math.random() * 120 + 50; // Larger bubbles
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.3, // Slower movement
        speedY: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        opacity: Math.random() * 0.4 + 0.15 // More visible
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
        
        // Draw geometric shape inside
        ctx.strokeStyle = `${bubble.color}`;
        ctx.lineWidth = 2;
        ctx.globalAlpha = bubble.opacity * 1.5;
        
        // Draw a hexagon inside
        ctx.beginPath();
        const innerSize = bubble.size * 0.5;
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI * 2) / 6;
          const x = innerSize * Math.cos(angle);
          const y = innerSize * Math.sin(angle);
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.stroke();
        
        // Add intersecting lines for more complexity
        ctx.beginPath();
        for (let i = 0; i < 3; i++) {
          const angle1 = (i * Math.PI * 2) / 3;
          const angle2 = (i * Math.PI * 2 + Math.PI) / 3;
          
          const x1 = innerSize * Math.cos(angle1);
          const y1 = innerSize * Math.sin(angle1);
          const x2 = innerSize * Math.cos(angle2);
          const y2 = innerSize * Math.sin(angle2);
          
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
        }
        ctx.stroke();
        
        // Draw pulsing center
        const time = Date.now() / 1000;
        const pulseSize = (Math.sin(time * 2 + bubble.x + bubble.y) * 0.2 + 0.8) * innerSize * 0.3;
        
        ctx.beginPath();
        ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.globalAlpha = bubble.opacity * 2;
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