import Page from "@/components/page";
import React from "react";
import OrdersList from "./orders-list";
import { getOrders } from "./utils";

export const dynamic = "force-dynamic";

// don't split into layout (dynamic titles).
const OrdersPage = async () => {
  const orders = await getOrders();

  return (
    <Page title="Сегодняшние заказы">
      <OrdersList orders={orders} />
    </Page>
  );
};

export default OrdersPage;
