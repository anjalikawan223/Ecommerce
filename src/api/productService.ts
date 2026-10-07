import { api } from "./api";

//search for product(view)
export interface ProductView{
    _id: string;
    name: string;
    slug: string;
    basePrice: number;
    discountPercentage: number;
    category: string;
    brand: string;
    averageRating: number;
    numberofReviews: number;
    thumbnail: string;
}

export interface productsearch{
    success: boolean;
    message: string;
    data: {
        products:ProductView[];
        page: number;
        pages: number;
        total: number;
        sizeCounts: {
            XS?: number;
            S?: number;
            M?: number;
            L?: number;
            XL?: number;
        }
     }
}
export interface ProductSearchParams {
    keyword?: string;
    limit?: number;
    page?: number;
    sort?: string;
    minPrice?: number;
    maxPrice?: number;
    sizes?: string;
}
export const getProducts = async (params: ProductSearchParams): Promise<productsearch> => {
    const response = await api.get("/products", {params});
        return response.data;
    };


//product Details
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
    averageRating: number;
    numberOfReviews:number
}

export interface ProductImage{
    url: string;
    altText: string;
    _id: string;
}

export interface ProductVariant{
        sku: string;
        attributes: {
            Size: string;
            Color: string;
        },
        price: number;
        stock: number;
        images: string[];
        _id: string;
}

export interface  ProductSpecifications{
        Condition: string;
        Location: string;
}

export interface Product extends ProductContentDetail {
    images: ProductImage[];
    variants:  ProductVariant[];
    specifications: ProductSpecifications;
}

export interface ProductRespone{
    success: boolean;
    messag: string;
    data: Product;   
}

export const ProductDetails= async (slug: string): Promise<ProductRespone> => {
    const resp = await api.get(`/products/${slug}`);
    return resp.data;
}


//showing recommended
export interface ProductRecommended{
    _id: string;
    name: string;
    slug: string;
    basePrice: number;
    discountPercentage: number;
    brand: string;
    averageRating: number
    thumbnail: string;
}

export interface DataRecommended{
        success: boolean
        message: string;
        data:{
            data: ProductRecommended[];
        }
      
}

export const Recommendation = async (slug: string): Promise<DataRecommended> =>{
    const detail = await api.get(`/products/recommendrd/${slug}`);
    return detail.data;

}



