import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components/App";

hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("mount")
);