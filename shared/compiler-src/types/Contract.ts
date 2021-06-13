export interface Contract {
    id: string,
    name: string,
    description: string,

    icons: { 
        [key: string]: string 
    },

    markets: {
        operating_systems: ['windows' | 'macos' | 'linux']
    },

    permissions: string[]

    metadata: { 
        [key: string]: string 
    }
}