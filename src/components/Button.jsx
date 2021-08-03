import React from "react";

export function Button({ children, type }) {
  return (
    <button
      type={type}
      className="bg-cyan rounded py-2 text-2xl text-cyan-darkest font-bold"
    >
      {children}
    </button>
  );
}
