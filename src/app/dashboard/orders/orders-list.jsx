import React from "react";
import NewOrdersList from "./new-orders";
import PendingOrdersList from "./pending-orders";
import ReadyOrdersList from "./ready-orders";
import DeliveringOrdersList from "./delivering-orders";
import { getOrders } from "./utils";

// separate loading ui from not loading ui.
const OrdersList = async () => {
  const orders = await getOrders();
  return (
    <div className="grid grid-cols-4 gap-4">
      <NewOrdersList orders={orders.newOrders} />
      <PendingOrdersList orders={orders.pendingOrders} />
      <ReadyOrdersList orders={orders.readyOrders} />
      <DeliveringOrdersList orders={orders.deliveryOrders} />
    </div>
  );
};

export default OrdersList;
