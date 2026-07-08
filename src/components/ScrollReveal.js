import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
