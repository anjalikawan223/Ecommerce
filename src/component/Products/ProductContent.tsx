import { useEffect, useState } from "react"
import { ProductDetails, type Product } from "../../api/productService";
import { useParams } from "react-router-dom";

export function ProductContent (){

   
    
    const [detail, setDetail] = useState<Product[]>([]);
    const {slug}= useParams<{slug: string}>();

    useEffect(() =>{
        
        const fetchProduct = async() => {

            if (!slug) return;
            try {  

                const result = await ProductDetails(slug);
                    console.log("1. product API:", result);
                    console.log("2. product data:", result.data.data);
                setDetail(result.data.data);
            } catch (error) {
                console.error("Failed to fetch product:", error);
            }
        };
         fetchProduct();
    },[slug]);


    const productItem = detail[0];
    const productDetail = productItem?.content?.[0];
    const images = productItem?.imagedetail ?? [];

    // console.log("detail:", detail);
    // console.log("productItem:", productItem);
    // console.log("productDetail:", productDetail);
    // console.log("images:", images);
    
    

    return (
        <>
        {/* <!-- Product --> */}
        <main className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-10">
      
          {/* <!-- Gallery --> */}
          <div className="flex gap-4">
                {/* <!-- Thumbnails --> */}
                <div className="flex flex-col gap-3">
                {images.map((image) => (
                    <img key={image._id} src={image.url} className="w-20 h-24 object-cover rounded-lg border-2 border-black" alt={image.altText} />
                ))}
                
                {/* <img src="http://i.ebayimg.com/images/g/nkoAAeSw61RqhtCg/s-l1600.jpg" className="w-20 h-24 object-cover rounded-lg border" alt="" />
                <img src="http://i.ebayimg.com/images/g/nkoAAeSw61RqhtCg/s-l1600.jpg" className="w-20 h-24 object-cover rounded-lg border" alt="" /> */}
                <button className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center">⌄</button>
                </div>

                {images.length > 0 && (
                    <img
                        src={images[0].url}
                        className="flex-1 w-full h-162.5 object-cover rounded-2xl"
                        alt={images[0].altText}
                    />
                )}
                
          </div>
      
          {/* <!-- Details --> */}
          <div className="ps-12">
                <p className="inline-block bg-gray-100 text-xs font-semibold px-3 py-1.5 rounded">{productDetail?.brand}</p>
        
                <h1 className="text-4xl font-bold leading-tight mt-4">
                {productDetail?.name}
                </h1>
        
                {/* <!-- Rating --> */}
                <div className="flex items-center gap-2 mt-4 text-sm">
                <span className="text-black tracking-widest">★★★★★</span>
                <span className="text-gray-600">
                    {images[0]?.averageRating ?? 0} (
                    {images[0]?.numberOfReviews ?? 0} reviews)
                </span>
                </div>
      
                {/* <!-- Price --> */}
                <div className="flex items-center gap-3 mt-5">
                    <span className="text-4xl font-bold">${productDetail?.basePrice}</span>
                    <span className="text-gray-400 line-through">$99.00</span>

                    {productDetail?.discountPercentage > 0 && (
                    <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                        {productDetail?.discountPercentage}% OFF
                    </span>
                    )}
                </div>
      
                <p className="text-gray-600 mt-5 leading-relaxed text-sm max-w-md">
                {productDetail?.shortDescription}
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
                {productDetail?.description}             
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
            
            {images.length > 0 && (
            <img src={images[0].url}
                className="w-full h-[400px] object-cover rounded-2xl" alt={images[0].altText} />
            )}
        </section>
        </>

    )

}