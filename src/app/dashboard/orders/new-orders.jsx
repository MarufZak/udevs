import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { formatPrice } from "@/utils";
import { AlertCircle, Car, Check, Clock4, User, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const NewOrdersList = ({ orders = [] }) => {
  return (
    <div className="rounded-md overflow-hidden">
      <header className="py-3 px-3 bg-primary">
        <h3 className="text-sm font-bold text-background uppercase">
          Новый ({orders.length})
        </h3>
      </header>
      <section className="p-2 bg-border flex flex-col gap-2">
        {orders.map((order) => {
          const TypeIcon = order.type === "car" ? Car : User;
          return (
            <Card key={order.id}>
              <CardHeader className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-1.5">
                  ID: {order.id}
                  <Tooltip>
                    <TooltipTrigger asChild={true}>
                      <Button variant="icon" size="xs">
                        <AlertCircle
                          size={16}
                          className="rotate-180 text-card-foreground"
                        />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>ID of the order. Attached with package.</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
                <div className="flex gap-2">
                  <span className="font-medium text-xs">
                    {formatPrice(order.price)} сум
                  </span>
                  <TypeIcon size={16} className="text-inherit" />
                  <Image
                    className="object-contain"
                    src={`/assets/${order.paymentMethod}.png`}
                    width={14}
                    height={14}
                    alt={`Payment method: ${order.paymentMethod}`}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3">
                  {order.items.map((item) => {
                    return (
                      <li className="text-foreground text-sm" key={item.id}>
                        {item.count} x {item.title}
                        <ul className="pl-[22px] flex flex-col gap-0.5">
                          {item.ingredients?.map((ingredient) => {
                            return (
                              <li
                                className="text-xs text-foreground/60"
                                key={ingredient}
                              >
                                {ingredient}
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
                <time className="text-xs flex gap-1 items-center justify-end mt-3">
                  <Clock4
                    size={14}
                    className="text-background fill-card-foreground"
                  />
                  {order.timestamp}
                </time>
              </CardContent>
              <CardFooter className="grid grid-cols-2 gap-1.5">
                <Button variant="destructive" size="sm">
                  <X size={18} className="mr-1" />
                  Отменить
                </Button>
                <Button size="sm">
                  <Check size={18} className="mr-1" />
                  Принять
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </div>
  );
};

export default NewOrdersList;
