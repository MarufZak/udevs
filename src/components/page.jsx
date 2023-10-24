import React from "react";

const Page = ({ title, children }) => {
  return (
    <>
      <header className="row-start-1 row-end-2 col-start-2 col-end-3 px-4 flex items-center border-b border-border text-foreground">
        <h2 className="text-[20px] font-semibold">{title}</h2>
      </header>
      <main className="px-4 py-2.5 overflow-y-auto">{children}</main>
    </>
  );
};

export default Page;
