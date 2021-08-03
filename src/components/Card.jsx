import React from "react";
import { clsx } from "../utils";

export function Card({ className, children }) {
  return (
    <div className={clsx("shadow-xl p-6 sm:p-8", className)}>{children}</div>
  );
}
