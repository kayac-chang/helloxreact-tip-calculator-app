import React, { cloneElement } from "react";

export function InputField({ id, type, label, value, min, icon }) {
  return (
    <div className="flex flex-col gap-2 px-2">
      <label htmlFor={id} className="font-bold text-cyan-text-light">
        {label}
      </label>

      <div className="relative flex items-center">
        <input
          id={id}
          name={id}
          type={type}
          className="text-2xl font-bold py-2 px-4 text-right"
          defaultValue={value}
          min={min}
        />

        {icon &&
          cloneElement(icon, {
            className: "absolute h-full p-4 text-cyan-text-lightest",
          })}
      </div>
    </div>
  );
}
