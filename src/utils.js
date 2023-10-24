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

export function formatPrice(price) {
  return Intl.NumberFormat("uz-UZ").format(price);
}

export function wait(start, end) {
  const timeout = getRandomNumber(start, end);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function addZero(number) {
  if (number < 10) {
    return `0${number}`;
  }

  return number;
}
