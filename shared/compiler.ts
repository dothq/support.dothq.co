import { existsSync, readdirSync, readFileSync, rmdirSync, writeFileSync } from "fs";
import { ensureDirSync } from "fs-extra";
import { resolve } from "path";
import rimraf from "rimraf";
import { Contract } from "./compiler-src/types/Contract";
import { Metadata } from "./compiler-src/types/Metadata";
import remark from "remark";
import strip from "strip-markdown";

const { sync: compileMdx } = require("@mdx-js/mdx");

const DATA_DIR = resolve(process.cwd(), "data");
const DATA_DIST_DIR = resolve(process.cwd(), "data-dist");

const ARTICLES_DIR = resolve(DATA_DIR, "articles");
const CONTRACTS_DIR = resolve(DATA_DIR, "contracts");
const LIBRARY_DIR = resolve(DATA_DIR, "library");

const main = async () => {
    const contracts = readdirSync(CONTRACTS_DIR);

    for await(const c of contracts) {
        let contract: Contract | null = null;

        try {
            contract = JSON.parse(readFileSync(resolve(CONTRACTS_DIR, c), "utf-8"));
        } catch(e) {
            throw new Error(`Failed to parse ${c} contract.`);
        }

        if(!contract) return;

        if(!existsSync(resolve(ARTICLES_DIR, contract.id))) {
            ensureDirSync(resolve(ARTICLES_DIR, contract.id));
        }

        let contractData = [];

        const langs = readdirSync(resolve(ARTICLES_DIR, contract.id));

        for await(const lang of langs) {
            const langedPath = resolve(ARTICLES_DIR, contract.id, lang);
            const articles = readdirSync(langedPath);

            for await(const article of articles) {
                const metadataPath = resolve(langedPath, article, "$metadata.json");

                if(!existsSync(metadataPath)) {
                    throw new Error(`No $metadata.json file found at ${resolve(langedPath, article)}.`)
                }

                let $: Metadata | null;

                try {
                    $ = JSON.parse(readFileSync(metadataPath, "utf-8"));
                } catch(e) {
                    throw new Error(`$metadata.json file found at ${resolve(langedPath, article)} is corrupt.`)
                }

                if($?.valid_for.operating_systems) {
                    for await(const os of $?.valid_for.operating_systems) {
                        if(!existsSync(resolve(langedPath, article, `${os}.mdx`))) {
                            throw new Error(`Expected ${os}.mdx to exist in ${resolve(langedPath, article)} as it is defined in the $manifest.json file.`)
                        }

                        console.log(resolve(langedPath, article, `${os}.mdx`))

                        contractData.push({
                            path: ["articles", contract.id, lang, `${article}.${os}.mdx`],
                            contents: readFileSync(
                                resolve(langedPath, article, `${os}.mdx`),
                                "utf-8"
                            ),
                            ...$,
                            lang,
                            os
                        });
                    }
                }
            }
        }

        rimraf.sync(DATA_DIST_DIR);
        ensureDirSync(resolve(DATA_DIST_DIR, "articles"));

        writeFileSync(
            resolve(DATA_DIST_DIR, "articles", "dump.json"),
            JSON.stringify(contractData, null, 2)
        );

        const dumpedArticles = [];
        const bookshelf = [];

        for await(const { path, contents, title, id, lang, os } of contractData) {
            try {
                ensureDirSync(
                    resolve(DATA_DIST_DIR, ...path.filter(_ => !_.includes(".mdx")))
                );

                writeFileSync(
                    resolve(DATA_DIST_DIR, ...path),
                    contents
                );

                if(existsSync(resolve(DATA_DIST_DIR, ...path))) {
                    dumpedArticles.push({ path, contents });

                    const excerpt = await remark()
                        .use(strip)
                        .process(contents).then(_ => String(_));

                    bookshelf.push({
                        id,
                        title,
                        route: `/${lang}/${contract.id}/${os}/%VERSION%/${id}`,
                        routeLatest: `/${lang}/${contract.id}/${os}/latest/${id}`,
                        excerpt: excerpt.length > 150 ? excerpt.substr(0, 150) + "…" : excerpt
                    })
                }
            } catch(e) {
                throw new Error(`Failed to dump article to ${resolve(DATA_DIST_DIR, ...path)}\n\n${e}`)
            }
        };

        writeFileSync(
            resolve(DATA_DIST_DIR, "$bookshelf.json"),
            JSON.stringify(bookshelf, null, 2)
        )

        console.log(`
    Contract Name: ${contract.name}
    Contract ID: ${contract.id}

    • Allowed markets
        • ${contract.markets.operating_systems.join("\n        • ")}

    • Permissions
        • ${contract.permissions.join("\n        • ")}

    • Metadata
        • ${Object.entries(contract.metadata)
            .map(_ => _[0])
            .join("\n        • ")}

    • Articles
        • ${dumpedArticles.map(_ => `${_.path[1]}/${_.path[_.path.length-1]} (${_.path[2]})`).join("\n        • ")}
        `);
    }
}

main();