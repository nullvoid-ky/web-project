import React, { useRef, useState, useEffect } from 'react';
import "./ScrollContent.css";
import ScrollItem from './ScollItem';

const ScrollContent: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollingLeft, setScrollingLeft] = useState(false);
  const [scrollingRight, setScrollingRight] = useState(false);

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;
    if (scrollingLeft) {
      scrollInterval = setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({ left: -420, behavior: 'smooth' });
        }
      }, 80); // Adjust the speed by changing the interval time
    }
    if (scrollingRight) {
      scrollInterval = setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
        }
      }, 80); // Adjust the speed by changing the interval time
    }
    return () => clearInterval(scrollInterval);
  }, [scrollingLeft, scrollingRight]);

  return (
    <div className="relative">
      <header>
        <h1 className="text-lg sm:text-4xl font-bold text-slate-700 sm:mb-2">Games</h1>
      </header>
      <div
        ref={scrollContainerRef}
        className="sm:no-scrollbar flex flex-row w-full h-40 sm:h-128 mb-4 sm:mb-0 py-2 pl-0 sm:pl-0 sm:p-12 overflow-x-scroll rounded-lg list box-border overflow-y-hidden"
      >
        {Array.from({ length: 13 }).map((_, index) => (
          <ScrollItem key={index} />
        ))}
      </div>
      <button
        onMouseDown={() => setScrollingLeft(true)}
        onMouseUp={() => setScrollingLeft(false)}
        onMouseLeave={() => setScrollingLeft(false)}
        className="scroll-button left-0"
      >
        {"<"}
      </button>
      <button
        onMouseDown={() => setScrollingRight(true)}
        onMouseUp={() => setScrollingRight(false)}
        onMouseLeave={() => setScrollingRight(false)}
        className="scroll-button right-0"
      >
        {">"}
      </button>
    </div>
  );
};

export default ScrollContent;
