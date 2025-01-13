// Definition of the types used in the application

interface Destination {
    time: string;
    activity: string;
    duration: string;
    price: number;
    rating: number;
}

interface Itenary {
    destination: Destination[];
    total_expense: number;
    total_duration: string;
}