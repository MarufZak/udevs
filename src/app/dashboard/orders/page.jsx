import { SearchInput } from "@/components/input";
import Page from "@/components/page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { range } from "@/utils";
import { ClipboardList, Loader } from "lucide-react";
import React from "react";
import OrdersList from "./orders-list";
import Timer from "@/components/timer";

// don't split into layout (dynamic titles).
const OrdersPage = () => {
  return (
    <Page title="Сегодняшние заказы">
      <header className="mb-7 flex justify-between">
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
                    Item {index}
                  </SelectItem>
                );
              })}
            </SelectContent>
            <Timer seconds={1000} />
          </Select>
        </div>
      </header>
      <React.Suspense
        fallback={
          <div className="w-full flex justify-center mt-8">
            <Loader className="text-card-foreground animate-spin" size={24} />
          </div>
        }
      >
        <OrdersList />
      </React.Suspense>
    </Page>
  );
};

export default OrdersPage;
