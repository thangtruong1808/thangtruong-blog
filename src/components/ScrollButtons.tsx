import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setIsAtTop(scrolled === 0);
  };

  const handleScroll = () => {
    if (isAtTop) {
      // Scroll to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {(isVisible || isAtTop) && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            type="button"
            onClick={handleScroll}
            className={`${
              isAtTop
                ? "bg-gray-700 hover:bg-gray-800"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
              isAtTop ? "focus:ring-gray-500" : "focus:ring-blue-500"
            }`}
            aria-label={isAtTop ? "Scroll to bottom" : "Scroll to top"}
          >
            {isAtTop ? (
              <FaArrowDown className="h-5 w-5" />
            ) : (
              <FaArrowUp className="h-5 w-5" />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollButtons;
