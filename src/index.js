import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Body from "./body";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Body />
  </StrictMode>
);