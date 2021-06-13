import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components/App";

const lang = window.location.pathname.split("/")[0];

hydrate(
    <BrowserRouter basename={`/${lang}`}>
        <App lang={lang} />
    </BrowserRouter>,
    document.getElementById("mount")
);