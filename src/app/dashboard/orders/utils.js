import { wait } from "@/utils";
import {
  newOrders,
  pendingOrders,
  readyOrders,
  deliveryOrders,
} from "./constants";
import React from "react";

// in case of double calls
export const getOrders = React.cache(async () => {
  await wait(500, 2500);
  return {
    newOrders,
    pendingOrders,
    readyOrders,
    deliveryOrders,
  };
});
