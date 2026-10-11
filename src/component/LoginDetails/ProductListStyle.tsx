import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";

export function ProductListStyle(){
    return(
        <>
        <Header />
        <section className="min-h-screen bg-[#f5f3ed] flex items-center justify-center p-4">
            <div className="w-full max-w-[1050px] min-h-[680px] bg-[#faf9f5] rounded-xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">
                <div className="px-6 sm:px-10 lg:px-12 py-7">
                    <div className="flex items-center max-w-[570px] mb-8">
                        <div className="flex items-center flex-1">
                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded-full border border-gray-600 text-black text-[10px] flex items-center justify-center">1</div>
                                <span className="text-[12px] text-black mt-2 whitespace-nowrap">Your details</span>
                            </div>
                            <div className="h-px bg-gray-400 flex-1 mx-3 mb-5"></div>
                        </div>
                        <div className="flex items-center flex-1">
                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded-full border border-gray-600 text-black text-[10px] flex items-center justify-center">2</div>
                                <span className="text-[12px] mt-2 text-black whitespace-nowrap">Verify email</span>
                            </div>

                            <div className="h-px bg-gray-400 flex-1 mx-3 mb-5"></div>
                        </div>
                        <div className="flex items-center flex-1">
                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded-full bg-black text-white text-[10px] flex items-center justify-center">3</div>
                                <span className="text-[12px] font-semibold text-black mt-2 whitespace-nowrap">
                                Your style</span>
                            </div>

                            <div className="h-px bg-gray-400 flex-1 mx-3 mb-5"></div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full border border-gray-600 text-black text-[10px] flex items-center justify-center">4</div>
                                <span className=" mt-2 text-[12px] text-black whitespace-nowrap">All set</span>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                            <p className="text-[10px] font-semibold tracking-[0.15em] text-black">
                                JOIN THE VOGUE COMMUNITY</p>
                            <div className="w-8 h-px bg-gray-600"></div>
                        </div>
                        <h2 className="text-5xl sm:text-4xl font-bold tracking-tight text-black">Find your style</h2>
                        <p className="text-base text-black mt-2 max-w-[500px] leading-relaxed">Tell us what inspires you. This helps us<br className="hidden sm:block" />
                            show you the right pieces, just for you.
                        </p>

                    </div>

                    {/* STYLE PREFERENCES  */}
                    <div className="mb-6">
                        <p className="text-xs font-medium text-black mb-3">Style preferences</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[590px]">
                            {/* List of Products  */}
                            <label className="relative flex items-center gap-3 h-[70px] px-2 rounded-lg border border-gray-300 bg-white/40 cursor-pointer hover:border-gray-400">
                                <input type="radio"name="style"className="peer sr-only"checked/>
                                <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=120&q=80"className="w-12 h-12 rounded-md object-cover"alt="Minimal and Classic"/>
                                <span className="text-[11px] font-medium text-black">Minimal & Classic</span>
                                <span className="ml-auto mr-1 w-3.5 h-3.5 rounded-full border border-gray-600 peer-checked:bg-black peer-checked:border-black flex items-center justify-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white hidden peer-checked:block"></span>
                                </span>
                            </label>
                            <label className="relative flex items-center gap-3 h-[70px] px-2 rounded-lg border border-gray-300 bg-white/40 cursor-pointer hover:border-gray-400">
                                <input type="radio" name="style" className="peer sr-only"/>
                                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=120&q=80"className="w-12 h-12 rounded-md object-cover"alt="Trendy and Bold"/>
                                <span className="text-[11px] font-medium text-black">Trendy & Bold</span>
                                <span className="ml-auto mr-1 w-3.5 h-3.5 rounded-full border border-gray-600 peer-checked:bg-black"></span>
                            </label>
                            <label className="flex items-center gap-3 h-[70px] px-2 rounded-lg border border-gray-300 bg-white/40 cursor-pointer hover:border-gray-400">
                                <input type="radio" name="style" className="peer sr-only"/>
                                <img src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=120&q=80" className="w-12 h-12 rounded-md object-cover" alt="Casual and Relaxed" />
                                <span className="text-[11px] font-medium text-black">Casual & Relaxed</span>
                                <span className="ml-auto mr-1 w-3.5 h-3.5 rounded-full border border-gray-600 peer-checked:bg-black"></span>
                            </label>
                            <label className="flex items-center gap-3 h-[70px] px-2 rounded-lg border border-gray-300 bg-white/40 cursor-pointer hover:border-gray-400">
                                <input type="radio" name="style" className="peer sr-only"/>
                                <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=120&q=80" className="w-12 h-12 rounded-md object-cover" alt="Elegant and Chic"/>
                                <span className="text-[11px] font-medium text-black">Elegant & Chic</span>
                                <span className="ml-auto mr-1 w-3.5 h-3.5 rounded-full border border-gray-600 peer-checked:bg-black"></span>
                            </label>
                            <label className="flex items-center gap-3 h-[70px] px-2 rounded-lg border border-gray-300 bg-white/40 cursor-pointer hover:border-gray-400">
                                <input type="radio" name="style" className="peer sr-only"/>
                                <img src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=120&q=80" className="w-12 h-12 rounded-md object-cover" alt="Casual and Relaxed" />
                                <span className="text-[11px] font-medium text-gray-700">Sporty & Active</span>
                                <span className="ml-auto mr-1 w-3.5 h-3.5 rounded-full border border-gray-600 peer-checked:bg-black"></span>
                            </label>
                            <label className="flex items-center gap-3 h-[70px] px-2 rounded-lg border border-gray-200 bg-white/40 cursor-pointer hover:border-gray-400">
                                <input type="radio" name="style" className="peer sr-only"/>
                                <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=120&q=80" className="w-12 h-12 rounded-md object-cover" alt="Elegant and Chic"/>
                                <span className="text-[11px] font-medium text-blcak">Boho & Artsy</span>
                                <span className="ml-auto mr-1 w-3.5 h-3.5 rounded-full border border-gray-600 peer-checked:bg-black"></span>
                            </label>

                        </div>
                    </div>
                    {/* SHOPPING FOR */}
                    <div className="mb-7">
                        <p className="text-xs font-medium text-black mb-4">What are you shopping for?
                            <span className="text-gray-500">(optional)</span>
                        </p>
                        <div className="flex flex-wrap gap-2"> 
                            <label>
                                <input type="radio" name="shopping" className="peer sr-only" checked />
                                <span className="inline-flex px-4 py-2 rounded-full bg-black text-white text-[12px] cursor-pointer">
                                Women</span>
                            </label>
                            <label>
                                <input type="radio" name="shopping" className="peer sr-only" />
                                <span className="inline-flex px-4 py-2 rounded-full bg-[#dbdad4] text-black text-[12px] cursor-pointer">Men</span>
                            </label>

                            <label>
                                <input type="radio" name="shopping" className="peer sr-only" />
                                <span className="inline-flex px-4 py-2 rounded-full bg-[#dbdad4] text-black text-[12px] cursor-pointer">Accessories</span>
                            </label>
                            <label>
                                <input type="radio" name="shopping" className="peer sr-only" />
                                <span className="inline-flex px-4 py-2 rounded-full bg-[#dbdad4] text-black text-[12px] cursor-pointer">Shoes</span>
                            </label>
                            <label>
                                <input type="radio" name="shopping" className="peer sr-only" />
                                <span className="inline-flex px-4 py-2 rounded-full bg-[#dbdad4] text-black text-[12px] cursor-pointer">Bags</span>
                            </label>

                        </div>
                    </div>
                    {/* BUTTONS */}
                    <div className="flex items-center gap-4">
                        <button className="w-[170px] h-11 rounded-full bg-black text-white text-xs font-medium flex items-center justify-center gap-4 hover:bg-gray-800 transition">
                            Continue<span className="text-base">→</span></button>
                        <button className="flex items-center gap-2 text-[12px] text-black hover:text-black">
                        <span>←</span>Back</button>

                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative hidden lg:block min-h-[680px]">
                    <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=90" alt="Fashion" className="absolute inset-0 w-full h-full object-cover"/>
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    {/* Quote */}
                    <div className="absolute bottom-10 right-9 text-white font-serif italic text-2xl leading-tight">
                        Your vibe,<br />Our edit.
                    </div>
                </div>
                
            </div>
        </section>
        <Footer/>
        </>
    )
}