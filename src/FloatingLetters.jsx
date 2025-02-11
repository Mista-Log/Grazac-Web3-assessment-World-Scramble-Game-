import React, { useEffect } from "react";

const FloatingLetters = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const container = document.querySelector(".floating-letters");

    // Create 50 floating letters
    for (let i = 0; i < 50; i++) {
      const span = document.createElement("span");
      span.textContent = letters[Math.floor(Math.random() * letters.length)];
      span.style.left = `${Math.random() * 100}%`; // Random horizontal position
      span.style.animationDelay = `${Math.random() * 10}s`; // Random animation delay
      container.appendChild(span);
    }
  }, []);

  return <div className="floating-letters"></div>;
};

export default FloatingLetters;