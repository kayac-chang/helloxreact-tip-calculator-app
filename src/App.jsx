import React, { useState } from "react";

import { ReactComponent as Dollar } from "../images/icon-dollar.svg";
import { ReactComponent as Person } from "../images/icon-person.svg";
import {
  Button,
  Header,
  Card,
  RadioGroup,
  Radio,
  InputField,
  Data,
} from "./components";
import { currency } from "./utils";

const initial = {
  bill: 0,
  tips: 5,
  custom: 0,
  people: 0,
};

function App() {
  const [{ bill, tips, custom, people }, setData] = useState(initial);

  function onChange(target) {
    requestAnimationFrame(() => {
      setData(
        Object.fromEntries(
          Array.from(new FormData(target).entries()).map(([key, value]) => [
            key,
            isNaN(value) ? value : Number(value),
          ])
        )
      );
    });
  }

  // === computed ===
  // tip
  const tip = tips === "custom" ? custom : tips;
  const totalTip = bill * (tip / 100);
  const tipPerPerson = people ? totalTip / people : 0;

  // total
  const totalPerPerson = people ? (bill + totalTip) / people : 0;

  // reset
  const canReset = ![
    bill !== initial.bill,
    tips !== initial.tips,
    custom !== initial.custom,
    people !== initial.people,
  ].some(Boolean);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <Header className="md:absolute md:top-20" />

      <Card className="bg-white flex-1 sm:flex-none rounded-t-3xl sm:rounded-3xl container max-w-4xl">
        <form
          className="grid md:grid-flow-col auto-cols-fr gap-8 w-full"
          onChangeCapture={(event) => onChange(event.currentTarget)}
          onReset={(event) => onChange(event.currentTarget)}
        >
          <InputField
            id="bill"
            label="Bill"
            type="number"
            value="0"
            min="0"
            icon={<Dollar />}
          />

          <RadioGroup id="tips" label="Select Tip">
            <Radio label="5%" value="5" checked />
            <Radio label="10%" value="10" />
            <Radio label="15%" value="15" />
            <Radio label="25%" value="25" />
            <Radio label="50%" value="50" />
            <Radio label="Custom" value="custom" custom />
          </RadioGroup>

          <InputField
            id="people"
            label="Number of People"
            type="number"
            value="0"
            min="0"
            icon={<Person />}
            error={bill > 0 && people <= 0}
          />

          <Card className="bg-cyan-darkest rounded-2xl flex flex-col justify-between gap-8 pt-8 row-span-3">
            <div className="space-y-8">
              <Data
                label="Tip Amount"
                note="/ person"
                value={currency(tipPerPerson)}
              />
              <Data
                label="Total"
                note="/ person"
                value={currency(totalPerPerson)}
              />
            </div>

            <Button type="reset" disabled={canReset}>
              RESET
            </Button>
          </Card>
        </form>
      </Card>
    </main>
  );
}

export default App;
