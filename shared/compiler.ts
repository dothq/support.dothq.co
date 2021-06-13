import { readdirSync, readFileSync } from "fs";
import { resolve } from "path";
import { Contract } from "./compiler-src/types/Contract";

const DATA_DIR = resolve(process.cwd(), "data");

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
        `)
    }
}

main();