import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { App } from "../frontend/components/App";

const app = express();

app.use((req, res, next) => {
    const markup = renderToString(
        <App />
    )

    res.send(markup);
})

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`server started at http://127.0.0.1:${port}`);
})