import { api } from "./api";

export interface Slider{
    image: string;
    title: string;
    description: string;
    handwritten: string,
    isActive: boolean;
    order: number;
    id: string;
    
}
export interface HomeContentRespone{
    success: boolean;
    message: string;
    data: {
        heroSlides: Slider[];
    } ;
}
export const HomeDetails = async (): Promise<HomeContentRespone> =>{
   const respone = await api.get("/content/home");
   return respone.data;

}



