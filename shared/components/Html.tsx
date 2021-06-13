import { l10n } from "../l10n";

export const Html = (title: string, markup: string, style: string, lang: string) => {
    const l10nMarkup = markup.replace(
        /@(([A-Z0-9]+(?:_[A-Z0-9]+)*))(: \[(([a-zA-Z0-9]|([a-zA-Z0-9],)*))+\])?(@)/gm, 
    (match: string) => {
        const id = match.replace(/@/g, "");
        let attrs = {};

        // if(id.charAt(id.length-1) == "]") {
        //     const openingAttrs = id.split("").findIndex(_ => _ == "[");

        //     const tempAttrs = id.substr(openingAttrs);

        //     if(!tempAttrs.includes(",") && tempAttrs.match(/\[[a-zA-Z0-9]\]/)) {

        //     }
        // }

        return l10n.hydrate(id, { lang });
    })

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>${title}</title>
            ${style}
        </head>
        <body>
            <div id="mount">${l10nMarkup}</div>
        </body>
        </html>
    `;
}