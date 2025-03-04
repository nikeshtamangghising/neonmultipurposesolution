"use client";
import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import { cn } from "@/lib/utils";
import "./butterfly.css";

interface ButterflyProps {
  className?: string;
  containerRef?: React.RefObject<HTMLDivElement>;
}

// Memoize the entire Butterfly component
export const Butterfly = memo(function Butterfly({ className, containerRef }: ButterflyProps) {
  const butterflyRef = useRef<HTMLDivElement>(null);
  const [isNearRobot, setIsNearRobot] = useState(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!butterflyRef.current || !containerRef?.current) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const butterfly = butterflyRef.current;
      const container = containerRef.current;
      if (!butterfly || !container) return;

      const containerRect = container.getBoundingClientRect();
      const butterflyRect = butterfly.getBoundingClientRect();
      
      // Get mouse position relative to container
      let x = e.clientX - containerRect.left;
      let y = e.clientY - containerRect.top;
      
      // Constrain to container bounds
      x = Math.max(0, Math.min(x, containerRect.width - butterflyRect.width));
      y = Math.max(0, Math.min(y, containerRect.height - butterflyRect.height));

      // Calculate distance from center of container (where robot head is)
      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      
      // Set near robot state if within 200px radius
      setIsNearRobot(distance < 200);

      // Use transform3d for better performance
      butterfly.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      lastPosition.current = { x, y };
    });
  }, [containerRef]);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [containerRef, handleMouseMove]);

  return (
    <div 
      ref={butterflyRef} 
      className={cn(
        "butterfly-container", 
        isNearRobot && "near-robot",
        className
      )}
      style={{ willChange: 'transform' }}
    >
      <div className="butterfly">
        <div className="wing">
          <div className="bit"></div>
          <div className="bit"></div>
        </div>
        <div className="wing">
          <div className="bit"></div>
          <div className="bit"></div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
});

Butterfly.displayName = 'Butterfly';
