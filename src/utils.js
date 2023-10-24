import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function range(start = 1, end, step = 1) {
  const result = [];

  if (typeof end !== "number") {
    end = start;
    start = 1;
  }

  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
}
