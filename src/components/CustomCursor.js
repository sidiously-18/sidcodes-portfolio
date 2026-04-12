import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });
  const followerRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const updateCursor = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    const checkHover = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.testid?.includes('link') ||
        target.dataset.testid?.includes('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    const animate = () => {
      // Smooth interpolation for cursor position
      setPosition(prev => ({
        x: prev.x + (cursorRef.current.x - prev.x) * 0.2,
        y: prev.y + (cursorRef.current.y - prev.y) * 0.2
      }));

      // Smooth interpolation for follower
      followerRef.current = {
        x: followerRef.current.x + (cursorRef.current.x - followerRef.current.x) * 0.1,
        y: followerRef.current.y + (cursorRef.current.y - followerRef.current.y) * 0.1
      };

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousemove', checkHover);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousemove', checkHover);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className={isHovering ? 'cursor-hover' : ''}>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="custom-cursor-follower"
        style={{
          left: `${followerRef.current.x}px`,
          top: `${followerRef.current.y}px`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
