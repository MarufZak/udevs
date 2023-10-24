"use client";
import { addZero } from "@/utils";
import React from "react";

const Timer = ({ seconds }) => {
  const [currValue, setCurrValue] = React.useState(seconds);

  if (typeof seconds !== "number") {
    throw new Error("initialValue should be number!");
  }

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrValue((currVal) => {
        return currVal - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <time className="px-3 py-1.5 rounded-md border border-border flex items-center gap-2.5 text-sm font-medium">
      {addZero(Math.floor(currValue / 60))}:{addZero(currValue % 60)}
    </time>
  );
};

export default Timer;
