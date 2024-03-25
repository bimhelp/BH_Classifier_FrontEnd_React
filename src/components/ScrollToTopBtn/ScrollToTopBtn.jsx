import React, { useState, useEffect } from "react";
import { ToTopBtn } from "./ScrollToTopBtn.styled";
import { BiSolidUpArrow } from "react-icons/bi";
const ScrollToTopBtn = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = document.getElementById("content");
      if (contentElement.scrollTop > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    };

    const contentElement = document.getElementById("content");
    contentElement.addEventListener("scroll", handleScroll);

    // Під час розмонтування компонента видаляємо обробник подій
    return () => {
      contentElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    const contentElement = document.getElementById("content");
    contentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {backToTopButton && (
        <ToTopBtn onClick={scrollUp}>
          <BiSolidUpArrow size={25} />
        </ToTopBtn>
      )}
    </div>
  );
};

export default ScrollToTopBtn;
