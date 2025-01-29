import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useRef } from "react";

const uttonCardScroll = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-50 bg-transparent p-2 rounded-full backdrop-blur-md text-gray-600 hover:text-black"
        style={{
          display: containerRef.current?.scrollLeft === 0 ? "none" : "block",
        }}
      >
        <ChevronLeftIcon size={24} />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50 bg-transparent p-2 rounded-full backdrop-blur-md text-gray-600 hover:text-black"
        style={{
          display:
            containerRef.current?.scrollLeft +
              containerRef.current?.offsetWidth >=
            containerRef.current?.scrollWidth
              ? "none"
              : "block",
        }}
      >
        <ChevronRightIcon size={24} />
      </button>
    </>
  );
};

export default ButtonCardScroll;
