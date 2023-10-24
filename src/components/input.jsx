import * as React from "react";

import { cn } from "@/utils";
import { Search } from "lucide-react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

const SearchInput = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <div className="relative">
      <Search
        size={18}
        className="text-primary absolute left-[11px] top-[50%] translate-y-[-50%]"
      />
      <Input
        type={type}
        ref={ref}
        className={cn("pl-10", className)}
        {...props}
      />
    </div>
  );
});

SearchInput.displayName = "SearchInput";
Input.displayName = "Input";

export { Input, SearchInput };
