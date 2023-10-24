import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/collapsible";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { cn, formatPrice } from "@/utils";
import {
  AlertCircle,
  Car,
  Check,
  ChevronDown,
  Clock4,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const PendingOrdersList = ({ orders = [] }) => {
  return (
    <div className="rounded-md overflow-hidden">
      <header className="py-3 px-3 bg-pending text-pending-foreground">
        <h3 className="text-sm font-bold text-background uppercase">
          Заготовка ({orders.length})
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
                  <Image
                    className="object-contain"
                    src={`/assets/${order.paymentMethod}.png`}
                    width={14}
                    height={14}
                    alt={`Payment method: ${order.paymentMethod}`}
                  />
                  <TypeIcon size={16} className="text-inherit" />
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
              <CardFooter className="flex-col items-stretch">
                {order.comments.length > 0 && (
                  <Collapsible>
                    <CollapsibleTrigger className="flex justify-between items-center text-card-foreground pb-3 w-full">
                      <p className="text-sm font-medium">
                        Коментарии ({order.comments.length})
                      </p>
                      <ChevronDown
                        className="chevron-icon"
                        size={12}
                        strokeWidth={3}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul>
                        {order.comments.map((comment) => {
                          return (
                            <li className="text-xs" key={comment.id}>
                              - {comment.comment}
                            </li>
                          );
                        })}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                )}
                <Button
                  className={cn(`w-full`, order.comments.length > 0 && "mt-2")}
                  variant="outline"
                  size="sm"
                >
                  <Check size={18} className="mr-1" />
                  Готово
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </div>
  );
};

export default PendingOrdersList;
