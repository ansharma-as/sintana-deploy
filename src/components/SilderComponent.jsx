import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const TrackpadSensitiveSlider = () => {
  const sliderRef = useRef(null);
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let accumulator = 0;
    const sensitivity = 2.7; // Adjust this value to increase/decrease sensitivity

    const handleWheel = (e) => {
      e.preventDefault();
      
      // Accumulate scroll deltas
      accumulator += e.deltaX || e.deltaY;
      
      // Apply sensitivity factor
      const movement = accumulator * sensitivity;
      
      // Calculate bounds
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const newX = Math.max(Math.min(x.get() - movement, 0), -maxScroll);
      
      // Animate to the new position
      api.start({ x: newX, immediate: false });
      
      // Reset accumulator
      accumulator = 0;
    };

    slider.addEventListener('wheel', handleWheel, { passive: false });
    return () => slider.removeEventListener('wheel', handleWheel);
  }, [api, x]);

  return (
    <div
      ref={sliderRef}
      className="relative overflow-hidden w-full"
      style={{ touchAction: 'pan-y' }}
    >
      <animated.div
        style={{
          display: 'flex',
          transform: x.to(x => `translate3d(${x}px, 0, 0)`),
          userSelect: 'none',
        }}
      >
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-64 bg-blue-500 mr-4 flex items-center justify-center text-white text-2xl font-bold rounded-lg"
          >
            Div {index + 1}
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default TrackpadSensitiveSlider;