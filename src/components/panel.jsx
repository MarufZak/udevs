import React from "react";
import { SearchInput } from "./input";

// remove in case of not being reusable
const Panel = ({ action }) => {
  return (
    <div className="mb-7 flex justify-between">
      <SearchInput placeholder="Search" />
      {action}
    </div>
  );
};

export default Panel;
