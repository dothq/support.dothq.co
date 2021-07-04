export interface Metadata {
    $_LOCKED_: boolean,
    id: string,
    title: string,

    aliases: string[],

    valid_for: {
        operating_systems: [ "windows" | "macos" | "linux" | "multi-platform"]
    }
}