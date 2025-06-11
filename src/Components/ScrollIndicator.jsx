import React, { useEffect, useRef, useState } from 'react';
import '../styles/ScrollIndicator.css';

function ScrollIndicator() {
  const [offset, setOffset] = useState(0);
  const requestRef = useRef();

  useEffect(() => {
    const animate = () => {
      setOffset(prev => prev + 0.02);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="scroll-container">
      <div className="dot-group">
        {[...Array(7)].map((_, i) => {
          const y = Math.sin(i * 0.9 + offset) * 7;         // 부드러운 위아래 곡선
          const opacity = 0.4 + Math.sin(i * 0.9 + offset) * 0.6; // 깜빡이듯 밝기 변화
          return (
            <span
              key={i}
              className="dot"
              style={{
                transform: `translateY(${y}px)`,
                opacity: opacity.toFixed(2), // 0 ~ 1 사이의 부드러운 깜빡임
              }}
            />
          );
        })}
      </div>
      <div className="scroll-arrow">↓</div>
    </div>
  );
}

export default ScrollIndicator;
