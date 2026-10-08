import { Footer } from "../component/layouts/Footer";
import { Header } from "../component/layouts/Header";
import { type ProductRecommended, } from "../api/productService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductContent } from "../component/Products/ProductContent";

export function ProductDetails() {

    const [recommendProduct, setRecommendProduct] = useState<ProductRecommended[]>([]);
    const [isRecommendingProduct, setIsRecommendingProduct] = useState<boolean>(true)

    useEffect(() => {
        if (recommendProduct.length > 0) {
            setIsRecommendingProduct(false)
        } else {
            setIsRecommendingProduct(true)
        }
    }, [recommendProduct])

    return (
        <>
            <Header />
            <ProductContent setRecommendProduct={setRecommendProduct} />
            {/* <!-- You May Also Like --> */}

            {isRecommendingProduct ? <p>is loading data .....</p>
                :
                <section className="max-w-6xl mx-auto px-4 pb-20">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold">You May Also Like</h2>
                        <a href="#" className="text-sm font-semibold flex items-center gap-1">View All →</a>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

                        {recommendProduct.map((product) => (
                            <article key={product._id} className="group rounded-lg bg-white border border-stone-200 overflow-hidden">
                                <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
                                    <Link to={`/product/${product.slug}`}>
                                        <img src={product.thumbnail} alt={product.name} className="w-full h-full object-cover" />
                                    </Link>
                                    <span className="absolute top-2 left-2 rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">20% off</span>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between text-sm text-gray-500 pb-2">
                                        <h3 className="font-medium text-stone-500k">{product.brand}</h3>
                                        <span className="font-semibold text-gray-900"><span className="text-yellow-500">★</span> {(product.averageRating).toFixed(1)}</span>
                                    </div>
                                    <Link to={`/product/${product.slug}`}>
                                        <p className="text-sm text-black font-bold pb-2">{product.name}</p>
                                    </Link>
                                    <div className="mt-2 flex items-baseline gap-2">
                                        <span className="font-bold">{product.basePrice}</span>
                                        <span className="text-gray-400 line-through">$99.00</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>}




            <Footer />



        </>


    )


}