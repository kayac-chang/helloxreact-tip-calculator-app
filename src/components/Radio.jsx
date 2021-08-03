import React, { Children, cloneElement, useRef } from "react";
import { clsx } from "../utils";

export function RadioGroup({ id, label, children }) {
  return (
    <fieldset className="flex flex-col gap-2 px-2">
      <span>
        <legend className="font-bold text-cyan-text-light">{label}</legend>
      </span>

      <div className="grid grid-cols-2 gap-4">
        {Children.map(children, (child) => cloneElement(child, { name: id }))}
      </div>
    </fieldset>
  );
}

export function Radio({ value, name, label, custom, checked }) {
  const ref = useRef(null);

  function focus(event) {
    event.target.checked && ref.current?.focus();
  }

  return (
    <div className="relative flex items-center text-2xl">
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        className="sr-only peer"
        defaultChecked={checked}
        onChange={custom && focus}
      />

      <label
        htmlFor={value}
        className={clsx(
          "w-full p-2 text-center font-bold rounded",
          custom || "bg-cyan-darkest peer-checked:bg-cyan-active",
          custom || "text-white peer-checked:text-cyan-darkest",
          custom && "bg-cyan-lightest peer-checked:hidden"
        )}
      >
        {label}
      </label>

      {custom && (
        <span className="h-full hidden peer-checked:inline">
          <label htmlFor="custom-value" className="sr-only">
            {label}
          </label>

          <input
            ref={ref}
            type="number"
            min="0"
            id="custom-value"
            name="custom-value"
            className="text-right font-bold px-4"
          />
        </span>
      )}
    </div>
  );
}
