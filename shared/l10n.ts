class L10nController {
    AVAILABLE_LANGUAGES = [
        "en-GB",
        "en-US",
        "es-ES"
    ]

    strings: any = {};

    get currentLanguage(): string {
        if(typeof(window) == "undefined") return '';

        return window.document.documentElement.lang || ''
    }
    
    hydrate(l10nString: string, attributes?: any): string {
        const strings: any = this.strings
        const lang: string = this.currentLanguage.toString()
    
        const langStrings = strings[attributes ? attributes.lang ? attributes.lang : lang : lang]
    
        if (langStrings && langStrings[l10nString]) return langStrings[l10nString]
        // Fallback to English translation if we can.
        if (!langStrings && strings.en && strings.en[l10nString])
          return strings.en[l10nString]
    
        // If that isn't available in English, we just return the l10n id.
        return l10nString
    }

    async loadLocales() {
        for await(const lang of this.AVAILABLE_LANGUAGES) {
            let imp: any;
    
            try {
                imp = await import(`../l10n/${lang}.js`); 
            } catch(e) {
                console.error(`Failed to load locale ${lang}\n`, e);
                this.AVAILABLE_LANGUAGES = this.AVAILABLE_LANGUAGES.filter(_ => _ !== lang);
            }

            const data = imp
                ? JSON.stringify(imp).replace(/{"default":/, "").slice(0, -1) // this is such a dirty hack i hate it
                : "{}"
    
            this.strings[lang] = JSON.parse(data);
        }
    }

    constructor() {
        this.loadLocales();
    }
}

export const l10n = new L10nController();