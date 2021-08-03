import React from "react";
import { clsx } from "../utils";

export function Button({ children, type, disabled }) {
  return (
    <button
      type={type}
      className={clsx(
        "bg-cyan rounded py-2 text-2xl text-cyan-darkest font-bold",
        "disabled:bg-cyan-disabled"
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
