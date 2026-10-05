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
    thumbnail: String;
}

export interface productsearch{
    success: boolean;
    message: string;
    data: {
        products:ProductView[];
        page: number;
        pages: number;
        total: number;
        sizeCounts: {}
     }
}



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


}

export interface ProductImage{
    url: string;
    altText: string;
    _id: string;
    averageRating: number;
    numberOfReviews: number;

}

export interface Product{
    content: ProductContentDetail[];
    imagedetail: ProductImage[];
}

export interface ProductRespone{
    success: boolean;
    messag: string;
    data: {
        data: Product[];

        variants:{
            sku: string;
            attributes: {
                Size: string;
                Color: string;
            },
            price: number;
            stock: number;
            images: string;
            _id: string;
        }[];

        specifications: {
            Condition: string;
            Location: string;
        };
    };
}

export const ProductDetails= async (slug: string): Promise<ProductRespone> => {
    const resp = await api.get(`/product/${slug}`);
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



