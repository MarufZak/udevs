"use client";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const { back } = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h3 className="font-semibold text-card-foreground">No such page</h3>
      <Button onClick={() => back()} variant="secondary" size="sm">
        Go back
      </Button>
    </div>
  );
};

export default NotFound;
