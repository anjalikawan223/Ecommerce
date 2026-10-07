import { useEffect, useState } from "react";
import { Banner } from "../component/layouts/Banner";
import { Footer } from "../component/layouts/Footer";
import { Header } from "../component/layouts/Header";
import { getProducts, type ProductRecommended } from "../api/productService";
import { Link, useNavigate } from "react-router-dom";

export function HomePage(){
    
    const[productList, setProductList]=useState<ProductRecommended[]>([]);
    const[loading, setLoading] = useState<Boolean>(true);
    const navigate = useNavigate();

    useEffect(() =>{
        const details = async() => {
            try{
                setLoading(true);
                const response = await getProducts({limit:4});
                console.log(response)
                    setProductList(response.data.products);
                
            }catch(error){
                console.log("An unexpected error occurred");
    
            }finally{
                setLoading(false);
            }

        }
       details();
    },[])
    const handleViewProduct = (slug: string) => { 
        navigate(`/product/${slug}`);
    };

    if(!loading){
        console.log("loading...")
    }
  
    return(
        <>
            <Header/>

            <Banner />
 
             {/* Product */}
            <section className="max-w-7xl mx-auto px-5 py-10">

                 {/* Product Header Section*/}
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
                    <div>
                        <h2 className="text-4xl font-bold">Trending Now</h2>
                        <p className="text-gray-500 mt-2">Discover what our customers are loving right now.</p>
                    </div>
                    <a href="#" className="font-semibold">View All Products →</a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Product 1  */}
                        {productList.map((item) =>(
                            <div className="border box-content md:box-border border-gray-100 rounded-2xl p-4">
                                <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
                                    <Link to={`/product/${item.slug}`}>
                                    <img  key={item._id} src={item.thumbnail} alt={item.name} className="w-full h-full object-cover"/>
                                    </Link>
                                    <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-sm font-semibold px-3 py-2 rounded-full">{item.discountPercentage}% OFF</span>
                                    <button onClick={() => handleViewProduct(item.slug)} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full">🛍</button>
                                </div>
                                <div className="pt-4">
                                    <div className="flex justify-between text-sm text-gray-500">
                                        <span>{item.brand}</span>
                                        <span className="font-semibold text-gray-900"><span className="text-yellow-500">★</span> {(item.averageRating).toFixed(1)}</span>
                                    </div>
                                    <div onClick={() => navigate(`/product/${item.slug}`)}>
                                    <h3 className="text-lg font-semibold my-2 leading-snug">{item.name}</h3>
                                    </div>
                                    <p className="text-2xl font-bold">${item.basePrice} <del className="text-sm font-normal text-gray-400 ml-1">$49.95</del></p>
                                </div>
                            </div>
                        ))}

                        
                </div>   
            </section>  

            <Footer/>
   
   
            

           
        </>
    )
}