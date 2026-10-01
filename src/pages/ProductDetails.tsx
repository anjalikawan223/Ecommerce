import { Footer } from "../component/layouts/Footer";
import { Header } from "../component/layouts/Header";


export function ProductDetails(){


    return (
        <>
        <Header />

        {/* <!-- Product --> */}
        <main className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-10">
      
          {/* <!-- Gallery --> */}
          <div className="flex gap-4">
            {/* <!-- Thumbnails --> */}
            <div className="flex flex-col gap-3">
              <img src="http://i.ebayimg.com/images/g/nkoAAeSw61RqhtCg/s-l1600.jpg" className="w-20 h-24 object-cover rounded-lg border" alt="" />
              <img src="http://i.ebayimg.com/images/g/nkoAAeSw61RqhtCg/s-l1600.jpg" className="w-20 h-24 object-cover rounded-lg border-2 border-black" alt="" />
              <img src="http://i.ebayimg.com/images/g/nkoAAeSw61RqhtCg/s-l1600.jpg" className="w-20 h-24 object-cover rounded-lg border" alt="" />
              <img src="http://i.ebayimg.com/images/g/nkoAAeSw61RqhtCg/s-l1600.jpg" className="w-20 h-24 object-cover rounded-lg border" alt="" />
              <button className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center">⌄</button>
            </div>
      
            {/* <!-- Main image --> */}
            <img src="http://i.ebayimg.com/images/g/nkoAAeSw61RqhtCg/s-l1600.jpg"
                 className="flex-1 w-full h-162.5 object-cover rounded-2xl" alt="Jordan 11" />
          </div>
      
          {/* <!-- Details --> */}
          <div className="ps-12">
            <span className="inline-block bg-gray-100 text-xs font-semibold px-3 py-1.5 rounded">FONCOLL-0</span>
      
            <h1 className="text-4xl font-bold leading-tight mt-4">
              Jordan Air Jordan 11 Retro "GAMMA" Blue High-Top Retro Men's Basketball Shoes
            </h1>
      
            {/* <!-- Rating --> */}
            <div className="flex items-center gap-2 mt-4 text-sm">
              <span className="text-black tracking-widest">★★★★★</span>
              <span className="text-gray-600">5.0 (824 reviews)</span>
            </div>
      
            {/* <!-- Price --> */}
            <div className="flex items-center gap-3 mt-5">
              <span className="text-4xl font-bold">$91.08</span>
              <span className="text-gray-400 line-through">$99.00</span>
              <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">8% OFF</span>
            </div>
      
            <p className="text-gray-600 mt-5 leading-relaxed text-sm max-w-md">
              Experience the comfort and style of Jordan Air Jordan 11 Retro "GAMMA" Blue High-Top
              Retro Men's Basketball Shoes. Available now. Condition: New without box
            </p>
      
            {/* <!-- Size --> */}
            <div className="flex justify-between items-center mt-8 text-sm">
              <p><span className="font-semibold">Size:</span> M</p>
              <a href="#" className="text-gray-500 underline">Size Guide</a>
            </div>
      
            <div className="flex gap-3 mt-3">
              <button className="w-14 h-12 border rounded-lg text-sm font-medium hover:border-black">S</button>
              <button className="w-14 h-12 border rounded-lg text-sm font-medium bg-black text-white">M</button>
              <button className="w-14 h-12 border rounded-lg text-sm font-medium hover:border-black">L</button>
              <button className="w-14 h-12 border rounded-lg text-sm font-medium hover:border-black">XL</button>
              <button className="w-14 h-12 border rounded-lg text-sm font-medium hover:border-black">XXL</button>
            </div>
      
            {/* <!-- Buttons --> */}
            <div className="flex gap-3 mt-8">
              <button className="flex-1 bg-black text-white h-14 rounded-xl font-semibold hover:bg-gray-800 transition">
                🛍 Add to Cart
              </button>
              <button className="w-14 h-14 border rounded-xl text-xl hover:bg-gray-50">♡</button>
            </div>
      
            {/* <!-- Features --> */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t text-xs">
              <div>
                <p className="font-semibold text-sm">🚚 Free Shipping</p>
                <p className="text-gray-500 mt-1">On orders over $99</p>
              </div>
              <div>
                <p className="font-semibold text-sm">🔄 Easy Returns</p>
                <p className="text-gray-500 mt-1">30-day return policy</p>
              </div>
              <div>
                <p className="font-semibold text-sm">🛡 Secure Payment</p>
                <p className="text-gray-500 mt-1">100% secure checkout</p>
              </div>
            </div>
          </div>
        </main>

        {/* <!-- Details tabs + image --> */}
        <section className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-10">
            <div>
            {/* <!-- Tabs --> */}
            <div className="flex gap-8 border-b text-sm font-medium text-gray-400" id="tabs">
                <button className="tab pb-3 -mb-px border-b-2 border-black text-black" data-tab="details">Details</button>
                <button className="tab pb-3 -mb-px border-b-2 border-transparent hover:text-black" data-tab="materials">Materials</button>
                <button className="tab pb-3 -mb-px border-b-2 border-transparent hover:text-black" data-tab="size">Size &amp; Fit</button>
                <button className="tab pb-3 -mb-px border-b-2 border-transparent hover:text-black" data-tab="shipping">Shipping &amp; Returns</button>
            </div>

            {/* <!-- Tab content --> */}
            <div className="panel mt-8">
                <p className="text-black leading-relaxed">
                Experience the comfort and style of Jordan Air Jordan 11 Retro "GAMMA" Blue High-Top
                Retro Men's Basketball Shoes. Available now. Condition: New without box
                </p>
                <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                    <span className="font-semibold">Condition:</span> New without box
                </li>
                <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                    <span className="font-semibold">Location:</span> US
                </li>
                </ul>
            </div>
            <div className="panel hidden mt-8 text-black">Patent leather and mesh upper with a translucent rubber outsole.</div>
            <div className="panel hidden mt-8 text-black">True to size. Order half a size up if you prefer a looser fit.</div>
            <div className="panel hidden mt-8 text-black">Free shipping on orders over $99. 30-day return policy.</div>
            </div>

            <img src="http://i.ebayimg.com/images/g/nkoAAeSw61RqhtCg/s-l1600.jpg"
                className="w-full h-[400px] object-cover rounded-2xl" alt="Jordan 11" />
        </section>

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