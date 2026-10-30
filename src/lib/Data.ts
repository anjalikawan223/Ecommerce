export const dataCart: Cart[] = [
    {
        guestSessionId: "guest-session-123",
        items: [
            {
                product: {
                    id: "01",
                    name: "Classic White Sneakers",
                    price: 11.20,
                    basePrice: 28.00,
                    images: [
                        {
                            url: "https://i.ebayimg.com/images/g/1VQAAeSwwetqn5pQ/s-l1600.jpg",
                        },
                    ],
                    thumbnail:
                        "https://i.ebayimg.com/images/g/1VQAAeSwwetqn5pQ/s-l1600.jpg",
                    category: "shoes",
                    brand: "Nike",
                },
                quantity: 2,
            },
            {
                product: {
                    id: "02",
                    name: "Champion Mens Hoodie",
                    price: 24.56,
                    basePrice: 28.89,
                    images: [
                        {
                            url: "https://i.ebayimg.com/images/g/XpYAAeSw0ttqWiI1/s-l1600.jpg",
                        },
                    ],
                    thumbnail:
                        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800",
                    category: "Hoodies",
                    brand: "Champion",
                },
                quantity: 3,
            },
            {
                product: {
                    id: "03",
                    name: "New Balance 327 Women's Sneakers",
                    price: 61.19,
                    basePrice: 84.99,
                    images: [
                        {
                            url: "https://i.ebayimg.com/images/g/yjAAAeSwpLBqm4sj/s-l960.jpg",
                        },
                    ],
                    thumbnail:
                        "https://i.ebayimg.com/images/g/yjAAAeSwpLBqm4sj/s-l960.jpg",
                    category: "shoes",
                    brand: "New Balance",
                },
                quantity: 4,
            },
        ],
    },
];

export interface CartItem {
    product: {
        id: string;
        name: string;
        price: number;
        basePrice: number;
        images: { url: string }[];
        thumbnail: string;
        category: string;
        brand: string;
    };
    quantity: number;
}

export interface Cart {
    guestSessionId: string;
    items: CartItem[];
}


