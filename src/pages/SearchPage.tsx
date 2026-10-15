import { useEffect, useState } from "react";
import { getProducts, type ProductView } from "../api/productService";
import { Link, useNavigate } from "react-router-dom";
import { SearchSkeleton } from "../component/uiState/SearchSkeleton";

export function SearchPage(){

    const [loading, setLoading] = useState<Boolean>(true);
    const [products, setProducts] = useState<ProductView[]>([]);
    const[search, setSearch] = useState("");
    const [searchQuery, setSearchQuery] = useState("")

    const[minPrice, setMinPrice] = useState(0);
    const[maxPrice, setMaxPrice] = useState(1000);

    const[selectedSizes, setSelectedSizes] = useState<string[]>([]);
    

    const navigate = useNavigate();
    


    useEffect(() => {
        const fetchProducts = async () => {
                const params = search ? {keyword:search, limit:24}:{
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

     const handleSizeChange = (size: string) => {

        setSelectedSizes((previous) => {

            if (previous.includes(size)) {

                return previous.filter((item) => item !== size);

            }

            return [...previous, size];

        });
        console.log(size.length)
    };
   


    // Search form
    const handleSearch = (e: React.FormEvent) => {

        e.preventDefault();

        // Search is already controlled by `search`
        // console.log("Searching:", search);
        setSearch(searchQuery);


    };


    return( 
        <>
        
        <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-5 lg:gap-10">

            {/* {products} */}
            {/* <!-- Filters --> */}
            <aside className="w-60 shrink-0 lg:sticky lg:top-24 lg:self-start lg:h-fit">
                <h2 className="text-xl font-bold">Filters</h2>

                {/* <!-- Size --> */}
                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">Size</span>
                        <span className="text-gray-500 text-xs">⌃</span>
                    </div>

                        <div className="mt-4 space-y-3 text-sm ">
                            {["XS", "S", "M", "L","XL"].map((size) => (
                            <label key={size} className="flex items-center justify-between cursor-pointer">
                                <span className="flex items-center gap-3">
                                    <input 
                                    checked={selectedSizes.includes(size)}onChange={() => handleSizeChange(size)}
                                    type="checkbox" className="h-4 w-4 accent-black" /> {size}</span>
                                <span className="text-gray-400">{size.length}</span>
                               
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
                            <input type="search" value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for products..."
                                    className="w-full rounded-full bg-gray-100 py-4 pl-14 pr-5 text-sm focus:outline-none focus:ring-2 focus:ring-black" />
                            {setSearchQuery && (
                                <button onClick={() => setSearchQuery("")}></button>
                            )}
                        </div>
                        <button type="submit" className="flex items-center gap-2 rounded-full bg-black px-8 font-semibold text-white hover:bg-gray-800">
                            Search <span>→</span>
                        </button>
                    </form>

                    <div className="flex items-center justify-between mb-6">
                        <span className="text-[16px]">{search ? <>Showing {products.length} results for {search}</>: <>Showing {products.length} recommended products</>} </span>
                        <select className="rounded-md border border-stone-300 bg-white px-3 py-1.5 text-sm">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to high</option>
                            <option>Price: High to low</option>
                        </select>
                    </div>
                    {loading ? <SearchSkeleton />  
                    :products.length > 0?
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {products.map((product) => (
                            <article key={product._id} className="rounded-3xl bg-white border border-stone-200 shadow-sm p-3 pb-5 ">
                                <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
                                    <Link to= {`/product/${product.slug}`}>
                                    <img src={product.thumbnail} alt={product.name} className= "w-full h-full object-cover"/> </Link>
                                    {product.discountPercentage > 0 && (
                                    <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full"> 
                                    {product.discountPercentage}% off</span> )}
                                </div>
                                <div className="px-1.5 pt-4">
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <h3 className="flex items-center gap-1 font-semibold text-gray-900">{product.brand}</h3>
                                        <span className="font-semibold fill-yellow-400 text-gray-900"><span className="text-yellow-500">★</span>{(product.averageRating).toFixed(1)}</span>
                                    </div> 
                                        
                                    <div onClick={() => navigate(`/product/${product.slug}`)}>
                                        <p className="mt-2 text-base font-bold leading-snug text-gray-900 line-clamp-3">{product.name}</p>
                                    </div>      
                                    <div className="mt-2 flex items-baseline gap-2">
                                        <span className="font-bold text-lg">  ${product.basePrice}</span>
                                        <span className="text-gray-400 line-through text-sm">$99.00</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>:
                     <>
                    <div className="text-center py-24 bg-[#d8d8d8] rounded-2xl border border-gray-800">
                        <h2 className="text-lg font-bold text-black mb-2">No results found</h2>
                        <p className="text-gray-700 text-sm">We couldn't find anything matching "{search}".</p>
                    </div>
                    </>
                    }
                </div>    
        </main>
        </>
        
    )
}