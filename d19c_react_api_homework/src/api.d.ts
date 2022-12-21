export interface api {
    results: [
        {
            gender: string;
            name: {
                title: string;
                first: string;
                last: string;
            }
            location: {
                street: {
                    number: number;
                    name: string;
                }
                city: string;
                state: string;
                country: string;
                postcode: number;
            }
            email: string;
            login: {
                uuid: string;
                username: string;
                password: string;
                salt: string;
            }
            picture: {
                medium: string;
            }
            nat: string;
        }
    ],
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    }
}