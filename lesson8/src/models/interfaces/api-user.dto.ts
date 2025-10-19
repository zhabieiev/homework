export interface RandomUserDto {
    results: User[];
}

export interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        city: string;
        country: string;
    };
    email: string;
    phone: string;
}
