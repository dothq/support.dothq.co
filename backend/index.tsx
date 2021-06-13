import express from "express";
import React from "react";

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { App } from "../frontend/components/App";

import { resolve } from "path";
import { ServerStyleSheet } from "styled-components";
import { Html } from "../shared/components/Html";
import { l10n } from "../shared/l10n";

const app = express();

app.use("/assets", express.static(resolve(process.cwd(), "assets")))

app.use((req: any, res, next) => {
    const lang = req.acceptsLanguages()[0];
    req.lang = l10n.AVAILABLE_LANGUAGES.find(l => l.startsWith(lang));

    next();
});

app.get("/", (req: express.Request, res: express.Response) => {
    const lang = req.acceptsLanguages()[0];
    if(!lang) return res.redirect("/en-GB");

    const availLang = l10n.AVAILABLE_LANGUAGES.find(l => l.startsWith(lang))
    if(!availLang) return res.redirect("/en-GB");

    return res.redirect(`/${availLang}`);
});

app.use("/:lang", (req: any, res, next) => {
    const sheet = new ServerStyleSheet();

    const markup = renderToString(sheet.collectStyles(
        <StaticRouter location={req.url}>
            <App lang={req.lang} />
        </StaticRouter>
    ));

    const styles = sheet.getStyleTags();

    res.send(
        Html(
            l10n.hydrate("PAGE_TITLE", { lang: req.lang }),
            markup,
            styles,
            req.lang
        )
    );
})

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`server started at http://127.0.0.1:${port}`);
})