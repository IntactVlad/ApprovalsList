import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Requests from "./Requests";

const ticket = {
  uid: "1002",
  type: "Task"
};
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const handleActiveCallback = (e) => {
  console.log("callback: ", e);
};

root.render(
  <StrictMode>
    <Requests activeItemCallback={handleActiveCallback} ticket={ticket} />
  </StrictMode>
);
