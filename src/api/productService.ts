import { api } from "./api";

export interface ProductContentDetail{
    _id: string;
    name: string;
    slug: string;
    description: string;
    shortDescription: string;
    basePrice: number;
    discountPercentage: number;
    category: string;
    brand: string,
    totalStock: number;
    images: string;
    variants: string;
    specifications: string;
    tags: string;

}

export interface ProductView{
    _id: string;
    name: string;
    slug: string;
    basePrice: number;
    discountPercentage: number;
    brand: string;
    averageRating: number;
    thumbnail: String;
}

interface ProductRespone{
    success: boolean;
    messag: string;
    data: {
        data: ProductContentDetail[];
    };
}

export const productDetails= async (): Promise<ProductRespone> => {
    const resp = await api.get("/product/slug");
    return resp.data;
}



