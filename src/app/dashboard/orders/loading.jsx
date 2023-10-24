import Page from "@/components/page";
import { Loader } from "lucide-react";
import React from "react";

const OrdersLoading = () => {
  return (
    <Page title="Сегодняшние заказы">
      <div className="w-full flex justify-center mt-8">
        <Loader className="text-card-foreground animate-spin" size={24} />
      </div>
    </Page>
  );
};

export default OrdersLoading;
