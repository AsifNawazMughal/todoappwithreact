import React, { useEffect, useRef } from "react";
import { FaRocket } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = ({
  name = "ASIF NAWAZ",
  subtitle = "Enter the digital realm of infinite possibilities",
  buttonText = "Launch Now",
}) => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement("div");
      particle.classList.add("particle");

      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      const hue = Math.random() * 360;
      particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

      const duration = Math.random() * 3 + 2;
      particle.style.animation = `float-up ${duration}s linear`;

      particlesRef.current.appendChild(particle);

      setTimeout(() => {
        if (particle && particle.parentNode) {
          particle.remove();
        }
      }, duration * 1000);
    };

    const intervalId = setInterval(createParticle, 50);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      if (particlesRef.current) {
        particlesRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="bg-animated min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      ></div>
      <div className="text-center z-10 relative">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 text-white neon-text glitch hover-3d"
          data-text={name}
        >
          {name}
        </h1>
        <p className="text-lg md:text-xl text-cyan-300 mb-8 px-4">{subtitle}</p>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 inline-flex items-center gap-2">
          <FaRocket />
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
