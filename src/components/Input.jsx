import React, { cloneElement } from "react";
import { clsx } from "../utils";

export function InputField({ id, type, label, value, min, icon, error }) {
  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-bold text-cyan-text-light">
          {label}
        </label>

        {error && <span className="text-red">Can’t be zero</span>}
      </div>

      <div className="relative flex items-center">
        <input
          id={id}
          name={id}
          type={type}
          className={clsx(
            "w-full h-full outline-none bg-cyan-lightest rounded",
            "text-2xl font-bold py-2 px-4 text-right",
            error ? "ring ring-red" : "focus:ring focus:ring-cyan",
            error ? "focus:caret-red" : "focus:caret-cyan"
          )}
          defaultValue={value}
          min={min}
          onChange={(event) =>
            (event.target.value = Number(event.target.value || value))
          }
        />

        {icon &&
          cloneElement(icon, {
            className: "absolute h-full p-4 text-cyan-text-lightest",
          })}
      </div>
    </div>
  );
}
