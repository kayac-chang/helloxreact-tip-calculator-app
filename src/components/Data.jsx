import React from "react";

export function Data({ label, note, value }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <strong className="text-white">{label}</strong>
        <span className="text-cyan-text-gray text-sm">{note}</span>
      </div>

      <span className="text-cyan text-3xl sm:text-5xl font-bold">{value}</span>
    </div>
  );
}
