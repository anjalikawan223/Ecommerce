import { Banner } from "../component/layouts/Banner";
import { Footer } from "../component/layouts/Footer";
import { Header } from "../component/layouts/Header";

export function HomePage(){

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
                        <div className="border border-gray-100 rounded-2xl p-4">
                            <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover"/>
                                <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-sm font-semibold px-3 py-2 rounded-full">38% OFF</span>
                                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full">🛍</button>
                            </div>
                            <div className="pt-4">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Coats, Jackets &amp; Vests</span>
                                    <span className="font-semibold text-gray-900"><span className="text-yellow-500">★</span> 5.0</span>
                                </div>
                                <h3 className="text-lg font-semibold my-2 leading-snug">Dickies Men's TJ15 Insulated Lined Quilted Eisenhower Zip Up Work Jacket</h3>
                                <p className="text-2xl font-bold">$30.97 <del className="text-sm font-normal text-gray-400 ml-1">$49.95</del></p>
                            </div>
                        </div>

                        <div className="border border-gray-100 rounded-2xl p-4">
                            <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover"/>
                                <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-sm font-semibold px-3 py-2 rounded-full">38% OFF</span>
                                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full">🛍</button>
                            </div>
                            <div className="pt-4">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Coats, Jackets &amp; Vests</span>
                                    <span className="font-semibold text-gray-900"><span className="text-yellow-500">★</span> 5.0</span>
                                </div>
                                <h3 className="text-lg font-semibold my-2 leading-snug">Dickies Men's TJ15 Insulated Lined Quilted Eisenhower Zip Up Work Jacket</h3>
                                <p className="text-2xl font-bold">$30.97 <del className="text-sm font-normal text-gray-400 ml-1">$49.95</del></p>
                            </div>
                        </div>

                        <div className="border border-gray-100 rounded-2xl p-4">
                            <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover"/>
                                <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-sm font-semibold px-3 py-2 rounded-full">38% OFF</span>
                                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full">🛍</button>
                            </div>
                            <div className="pt-4">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Coats, Jackets &amp; Vests</span>
                                    <span className="font-semibold text-gray-900"><span className="text-yellow-500">★</span> 5.0</span>
                                </div>
                                <h3 className="text-lg font-semibold my-2 leading-snug">Dickies Men's TJ15 Insulated Lined Quilted Eisenhower Zip Up Work Jacket</h3>
                                <p className="text-2xl font-bold">$30.97 <del className="text-sm font-normal text-gray-400 ml-1">$49.95</del></p>
                            </div>
                        </div>

                        <div className="border border-gray-100 rounded-2xl p-4">
                            <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover"/>
                                <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-sm font-semibold px-3 py-2 rounded-full">38% OFF</span>
                                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full">🛍</button>
                            </div>
                            <div className="pt-4">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Coats, Jackets &amp; Vests</span>
                                    <span className="font-semibold text-gray-900"><span className="text-yellow-500">★</span> 5.0</span>
                                </div>
                                <h3 className="text-lg font-semibold my-2 leading-snug">Dickies Men's TJ15 Insulated Lined Quilted Eisenhower Zip Up Work Jacket</h3>
                                <p className="text-2xl font-bold">$30.97 <del className="text-sm font-normal text-gray-400 ml-1">$49.95</del></p>
                            </div>
                        </div>
                        
                </div>   
            </section>  

            <Footer/>
   
   
            

           
        </>
    )
}