"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NumberInput({
  btnName = "Add",
  onSubmit,
  valRange = [0, 100],
  lenRange = [5, 10],
}) {
  const [input, setInput] = useState("");
  function generateRandomArray() {
    const length =
      Math.floor(Math.random() * (lenRange[1] - lenRange[0])) + lenRange[0]; // Random length between 7 and 10
    const array = [];

    for (let i = 0; i < length; i++) {
      const randomNum =
        Math.floor(Math.random() * (valRange[1] - valRange[0])) + valRange[0]; // Random number between 0 and 100
      array.push(randomNum);
    }

    setInput(array.join(", "));
  }

  const handleConvert = () => {
    const arr = input
      .split(",")
      .map((val) => val.trim())
      .filter((val) => val !== "")
      .map((val) => Number(val))
      .filter((num) => !isNaN(num));

    onSubmit(
      arr
        .slice(0, lenRange[1])
        .filter((a) => a >= valRange[0] && a <= valRange[1])
    );
  };

  return (
    <div className=" flex gap-4 mb-5">
      <Button className="dobtn" onClick={generateRandomArray}>
        RandomArray
      </Button>

      <Input
        placeholder="Enter numbers separated by commas"
        value={input}
        className="w-70 inpbox"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleConvert} className="dobtn">
        {btnName}
      </Button>
    </div>
  );
}
