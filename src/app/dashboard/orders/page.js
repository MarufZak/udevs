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
import { ClipboardList } from "lucide-react";
import React from "react";

const OrdersPage = () => {
  return (
    <Page title="Сегодняшние заказы">
      <header className="mb-7 flex justify-between">
        <SearchInput placeholder="Search" />
        <Select>
          <SelectTrigger prevIcon={<ClipboardList />}>
            <SelectValue placeholder="Total: 115" />
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
        </Select>
      </header>
    </Page>
  );
};

export default OrdersPage;
