import React, { useRef } from "react";

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

function App() {
  function onChange(event) {
    console.log(
      Object.fromEntries(new FormData(event.currentTarget).entries())
    );
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <Header className="md:absolute md:top-20" />

      <Card className="bg-white flex-1 sm:flex-none rounded-t-3xl sm:rounded-3xl container max-w-4xl">
        <form
          className="grid md:grid-flow-col auto-cols-fr gap-8 w-full"
          onChangeCapture={onChange}
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
