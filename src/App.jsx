import React, { Children, cloneElement, useRef } from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Dollar } from "../images/icon-dollar.svg";
import { ReactComponent as Person } from "../images/icon-person.svg";

function Header({ className }) {
  return (
    <div className={clsx("py-10", className)}>
      <h1 className="w-24 mx-auto">
        <span className="sr-only">SPLITTER</span>
        <Logo />
      </h1>
    </div>
  );
}

function clsx(...str) {
  return str.filter(Boolean).join(" ");
}

function Card({ className, children }) {
  return <div className={clsx("shadow p-6 sm:p-8", className)}>{children}</div>;
}

function RadioGroup({ id, label, children }) {
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

function InputField({ id, type, label, value, min, icon }) {
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

function Radio({ value, name, label, custom, checked }) {
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
            className="text-right font-bold px-4"
          />
        </span>
      )}
    </div>
  );
}

function Data({ label, note, value }) {
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

function Button({ children, type }) {
  return (
    <button
      type={type}
      className="bg-cyan rounded py-2 text-2xl text-cyan-darkest font-bold"
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <Header className="md:absolute md:top-20" />

      <Card className="bg-white flex-1 sm:flex-none rounded-t-3xl sm:rounded-3xl container max-w-4xl">
        <form className="grid md:grid-flow-col auto-cols-fr gap-8 w-full">
          <InputField
            id="bill"
            label="Bill"
            type="number"
            value="0"
            min="0"
            icon={<Dollar />}
          />

          <RadioGroup id="tips" label="Select Tip">
            <Radio label="5%" value="5%" checked />
            <Radio label="10%" value="10%" />
            <Radio label="15%" value="15%" />
            <Radio label="25%" value="25%" />
            <Radio label="50%" value="50%" />
            <Radio label="Custom" value="custom" custom />
          </RadioGroup>

          <InputField
            id="people"
            label="Number of People"
            type="number"
            value="0"
            min="0"
            icon={<Person />}
          />

          <Card className="bg-cyan-darkest rounded-2xl flex flex-col justify-between gap-8 pt-8 row-span-3">
            <div className="space-y-8">
              <Data label="Tip Amount" note="/ person" value="$4.27" />
              <Data label="Total" note="/ person" value="$32.79" />
            </div>

            <Button type="reset">RESET</Button>
          </Card>
        </form>
      </Card>
    </main>
  );
}

export default App;
