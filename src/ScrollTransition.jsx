import React, { useState, useEffect } from "react";
import "./ScrollTransition.css";

export default function ScrollTransition() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeOutStart = 100;
      const fadeOutEnd = 400;
      const progress = Math.min(
        Math.max((scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart), 0),
        1
      );
      setOpacity(1 - progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-container">
      <div className="text-block" style={{ opacity }}>
        나는 이제 조각이 아니다.
      </div>
      <div className="image-block">
        <img src="/images/scene.jpg" alt="장면 이미지" />
      </div>
    </div>
  );
}
