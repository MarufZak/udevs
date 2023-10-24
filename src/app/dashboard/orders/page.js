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
import NewOrdersList from "./new-orders";
import PendingOrdersList from "./pending-orders";
import ReadyOrdersList from "./ready-orders";
import DeliveringOrdersList from "./delivering-orders";

const orders = [
  {
    id: 321545,
    price: 300560,
    timestamp: "12:00",
    type: "person",
    paymentMethod: "payme",
    items: [
      {
        id: 1,
        count: 3,
        title: "Пепси 0,5",
      },
      {
        id: 2,
        count: 1,
        title: "Гамбургер",
        ingredients: ["С сыром", "Без лука"],
      },
      {
        id: 3,
        count: 2,
        title: "Лаваш мясной Standart острый",
      },
    ],
  },
  {
    id: 321546,
    price: 300560,
    timestamp: "12:00",
    type: "car",
    paymentMethod: "click",
    items: [
      {
        id: 1,
        count: 3,
        title: "Пепси 0,5",
      },
      {
        id: 2,
        count: 1,
        title: "Гамбургер",
        ingredients: ["С сыром", "Без лука"],
      },
      {
        id: 3,
        count: 2,
        title: "Лаваш мясной Standart острый",
      },
    ],
  },
  {
    id: 321547,
    price: 300560,
    timestamp: "12:00",
    type: "car",
    paymentMethod: "apelsin",
    items: [
      {
        id: 1,
        count: 3,
        title: "Пепси 0,5",
      },
      {
        id: 2,
        count: 1,
        title: "Гамбургер",
        ingredients: ["С сыром", "Без лука"],
      },
      {
        id: 3,
        count: 2,
        title: "Лаваш мясной Standart острый",
      },
    ],
  },
];

const pendingOrders = [
  {
    id: 321545,
    price: 300560,
    timestamp: "13:00",
    type: "person",
    paymentMethod: "payme",
    items: [
      {
        id: 1,
        count: 3,
        title: "Пепси 0,5",
      },
    ],
    comments: [
      {
        id: 1,
        comment: "Пожайлуста сделайте быстрее",
      },
      {
        id: 2,
        comment: "Я спешу",
      },
    ],
  },
  {
    id: 321546,
    price: 300560,
    timestamp: "12:00",
    type: "car",
    paymentMethod: "payme",
    items: [
      {
        id: 1,
        count: 3,
        title: "Пепси 0,5",
      },
      {
        id: 2,
        count: 1,
        title: "Гамбургер",
        ingredients: ["С сыром", "Без лука"],
      },
      {
        id: 3,
        count: 2,
        title: "Лаваш мясной Standart острый",
      },
    ],
    comments: [],
  },
];

const readyOrdersList = [
  {
    id: 321545,
    price: 300560,
    timestamp: "13:00",
    type: "person",
    paymentMethod: "payme",
    items: [
      {
        id: 1,
        count: 3,
        title: "Пепси 0,5",
      },
    ],
    comments: [
      {
        id: 1,
        comment: "Пожайлуста сделайте быстрее",
      },
      {
        id: 2,
        comment: "Я спешу",
      },
    ],
  },
  {
    id: 321546,
    price: 300560,
    timestamp: "12:00",
    type: "car",
    paymentMethod: "payme",
    items: [
      {
        id: 1,
        count: 3,
        title: "Пепси 0,5",
      },
      {
        id: 2,
        count: 1,
        title: "Гамбургер",
        ingredients: ["С сыром", "Без лука"],
      },
      {
        id: 3,
        count: 2,
        title: "Лаваш мясной Standart острый",
      },
    ],
    comments: [],
  },
];

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
      <div className="grid grid-cols-4 gap-4">
        <NewOrdersList orders={orders} />
        <PendingOrdersList orders={pendingOrders} />
        <ReadyOrdersList orders={readyOrdersList} />
        <DeliveringOrdersList orders={pendingOrders} />
      </div>
    </Page>
  );
};

export default OrdersPage;
