import React from "react";
import { clsx } from "../utils";
import { ReactComponent as Logo } from "../../images/logo.svg";

export function Header({ className }) {
  return (
    <div className={clsx("py-10", className)}>
      <h1 className="w-24 mx-auto">
        <span className="sr-only">SPLITTER</span>
        <Logo />
      </h1>
    </div>
  );
}
