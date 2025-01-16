// Definition of the types used in the application

interface DestinationProps {
    time: string;
    activity: string;
    duration: string;
    price: number;
    rating: number;
    category: string;
}

interface ItenaryProps {
    destination: DestinationProps[];
    total_expense: number;
}