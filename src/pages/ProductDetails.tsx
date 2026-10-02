import { ProductContent } from "../component/Products/ProductContent";
import { Footer } from "../component/layouts/Footer";
import { Header } from "../component/layouts/Header";


export function ProductDetails(){


    return (
        <>

        <ProductContent />
        {/* <!-- You May Also Like --> */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">You May Also Like</h2>
                <a href="#" className="text-sm font-semibold flex items-center gap-1">View All →</a>
            </div>
        

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                <article className="group rounded-lg bg-white border border-stone-200 overflow-hidden">
                    <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
                        <img src="https://i.ebayimg.com/images/g/yjAAAeSwpLBqm4sj/s-l960.jpg" alt="" className= "w-full h-full object-cover"/> 
                        <span className="absolute top-2 left-2 rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">20% off</span>
                    </div>
                    <div className="p-4">        
                        <div className="flex justify-between text-sm text-gray-500 pb-2">
                            <h3 className="font-medium text-stone-500k">Ceramic Mug Set</h3>
                            <span className="font-semibold text-gray-900"><span className="text-yellow-500">★</span> 5.0</span>
                        </div> 
                        <p className="text-sm text-black font-bold pb-2">Jordan Air Jordan 11 Retro "GAMMA" Blue High-Top Retro Men's Basketball Shoes</p>       
                            <div className="mt-2 flex items-baseline gap-2">
                                <span className="font-bold">$24.00</span>
                                <span className="text-gray-400 line-through">$99.00</span>
                            </div>
                    </div>
                </article>
            </div>
        </section>
        


     <Footer />

    

    </> 


    )

   
}