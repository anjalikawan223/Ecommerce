import { useEffect, useState } from "react";
import { Footer } from "../component/layouts/Footer";
import { Header } from "../component/layouts/Header";
import { getProducts, type ProductView } from "../api/productService";
import { Link, useNavigate } from "react-router-dom";
import { SearchSkeleton } from "../component/uiState/SearchSkeleton";

export function SearchPage(){

    const [loading, setLoading] = useState<Boolean>(true);
    const [products, setProducts] = useState<ProductView[]>([]);
    const[search, setSearch] = useState("");

    const[minPrice, setMinPrice] = useState(0);
    const[maxPrice, setMaxPrice] = useState(1000);

    const[selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const navigate = useNavigate();
    


    useEffect(() => {
        const fetchProducts = async () => {
                const params = {
                    keyword: search,
                    limit: 8,
                    minPrice: minPrice,
                    maxPrice: maxPrice,
                    sizes: selectedSizes.length > 0
                        ? selectedSizes.join(",")
                        : undefined
                };
            try {
                setLoading(true);
                const result = await getProducts(params);

                setProducts(result.data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }finally{
                setLoading(false);
            }
        };

        fetchProducts();
    }, [search, selectedSizes, minPrice, maxPrice]);

    // if(loading){
    //     setLoading(<SearchSkeleton/>);
    // }

     // Size checkbox
     const handleSizeChange = (size: string) => {

        setSelectedSizes((previous) => {

            if (previous.includes(size)) {

                return previous.filter((item) => item !== size);

            }

            return [...previous, size];

        });

    };


    // Search form
    const handleSearch = (e: React.FormEvent) => {

        e.preventDefault();

        // Search is already controlled by `search`
        console.log("Searching:", search);

    };

    // if(loading){
    //     return(
    //         <SearchSkeleton/>
    //     )
    // }

    return( 
        <>
        <Header/>
        {loading ? <SearchSkeleton /> : 
        <main className="max-w-7xl mx-auto px-4 py-8 flex gap-10 ">

            {/* <!-- Filters --> */}
            <aside className="w-60 shrink-0">
            <h2 className="text-xl font-bold">Filters</h2>

            {/* <!-- Size --> */}
            <div className="mt-4">
                <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Size</span>
                <span className="text-gray-500 text-xs">⌃</span>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                    {["XS", "S", "M", "L","XL"].map((size) => (
                    <label key={size} className="flex items-center justify-between cursor-pointer">
                        <span className="flex items-center gap-3">
                            <input 
                            checked={selectedSizes.includes(size)}onChange={() => handleSizeChange(size)}
                            type="checkbox" className="h-4 w-4 accent-black" /> {size}</span>
                        <span className="text-gray-400">(0)</span>
                    </label>    
                     ))}
                </div>
                </div>

                {/* <!-- Price range --> */}
                <div className="mt-10">
                    <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Price Range</span>
                    <span className="text-black text-xs">⌃</span>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                    <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
                        <input value={minPrice}onChange={(e) =>
                                setMinPrice(Number(e.target.value))} type="number"  className="w-full rounded-lg border border-gray-200 py-3 pl-7 pr-2 text-sm focus:outline-none focus:ring-2 focus:ring-black" />
                    </div>
                    <span className="text-gray-300">–</span>
                    <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
                        <input type="number"   value={maxPrice}onChange={(e) =>
                                    setMaxPrice(Number(e.target.value))} className="w-full rounded-lg border border-gray-200 py-3 pl-7 pr-2 text-sm focus:outline-none focus:ring-2 focus:ring-black" />
                    </div>
                    </div>
                </div>
                </aside>

                {/* <!-- Right side --> */}
                <div className="flex-1 min-w-0">

                    {/* <!-- Search bar --> */}
                    <form className="flex gap-3 py-8" onSubmit={handleSearch}>
                        <div className="relative flex-1">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
                        <input type="search" value={search}onChange={(e) => setSearch(e.target.value)} placeholder="Search for products..."
                                className="w-full rounded-full bg-gray-100 py-4 pl-14 pr-5 text-sm focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>
                        <button type="submit" className="flex items-center gap-2 rounded-full bg-black px-8 font-semibold text-white hover:bg-gray-800">
                        Search <span>→</span>
                        </button>
                    </form>

                    <div className="flex items-center justify-between mb-6">
                        <span className="text-[16px]">Showing 8 recommended products</span>
                        <select className="rounded-md border border-stone-300 bg-white px-3 py-1.5 text-sm">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to high</option>
                            <option>Price: High to low</option>
                        </select>
                    </div>
  
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

                        {products.map((product) => (
                            <article key={product._id} className="group rounded-lg bg-white border border-stone-200 overflow-hidden ">
                                <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
                                    <Link to= {`/product/${product.slug}`}>
                                    <img src={product.thumbnail} alt={product.name} className= "w-full h-full object-cover"/> </Link>
                                    {product.discountPercentage > 0 && (
                                    <span className="absolute top-2 left-2 rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700"> 
                                    {product.discountPercentage}% off</span> )}
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between text-sm text-gray-500 pb-2">
                                        <h3 className="font-medium text-stone-500k">{product.brand}</h3>
                                        <span className="font-semibold text-gray-900"><span className="text-yellow-500">★</span>{product.averageRating}</span>
                                    </div> 
                                        
                                    <div onClick={() => navigate(`/product/${product.slug}`)}>
                                        <p className="text-sm text-black font-bold pb-2">{product.name}</p>
                                    </div>      
                                    <div className="mt-2 flex items-baseline gap-2">
                                        <span className="font-bold">  ${product.basePrice}</span>
                                        <span className="text-gray-400 line-through">$99.00</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>    
            </main>}
        <Footer />
        </>
        
    )
}