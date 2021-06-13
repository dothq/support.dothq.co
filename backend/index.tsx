import express from "express";
import React from "react";

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { App } from "../frontend/components/App";

import { resolve } from "path";
import { ServerStyleSheet } from "styled-components";
import { Html } from "../shared/components/Html";

const app = express();

app.use("/assets", express.static(resolve(process.cwd(), "assets")))

app.use((req, res, next) => {
    const sheet = new ServerStyleSheet();

    const markup = renderToString(sheet.collectStyles(
        <StaticRouter context={{ }} location={req.url}>
            <App />
        </StaticRouter>
    ));

    const styles = sheet.getStyleTags();

    res.send(
        Html(
            "Testing",
            markup,
            styles
        )
    );
})

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`server started at http://127.0.0.1:${port}`);
})