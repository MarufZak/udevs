import React from "react";
import NewOrdersList from "./new-orders";
import PendingOrdersList from "./pending-orders";
import ReadyOrdersList from "./ready-orders";
import DeliveringOrdersList from "./delivering-orders";
import { SearchInput } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { ClipboardList } from "lucide-react";
import Timer from "@/components/timer";
import { range } from "@/utils";

// separate loading ui from not loading ui.
const OrdersList = ({ orders }) => {
  return (
    <>
      <div className="mb-7 flex justify-between">
        <SearchInput placeholder="Search" />
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger prevIcon={<ClipboardList />}>
              <SelectValue placeholder="Выберите" />
            </SelectTrigger>
            <SelectContent>
              {range(6).map((index) => {
                return (
                  <SelectItem value={index.toString()} key={index}>
                    Номер {index}
                  </SelectItem>
                );
              })}
            </SelectContent>
            <Timer seconds={1000} />
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <NewOrdersList orders={orders.newOrders} />
        <PendingOrdersList orders={orders.pendingOrders} />
        <ReadyOrdersList orders={orders.readyOrders} />
        <DeliveringOrdersList orders={orders.deliveryOrders} />
      </div>
    </>
  );
};

export default OrdersList;
