export function ProductContentSkeleton(){
    return(
        <>
            <main className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-10">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-3 ">
                        <button className="w-20 h-24 rounded-lg overflow-hidden border-2">
                            <img className="w-full h-full object-cover" />
                        </button>
                    </div>
                    <div className="flex-1">
                        <img className="w-full h-[550px] object-contain rounded-2xl"/>
                    </div>      
                </div>
                <div className="ps-12">
                    <p className="inline-block bg-gray-100 text-xs font-semibold px-3 py-1.5 rounded"></p>
                    <h1 className="text-4xl font-bold leading-tight mt-4"></h1>
                    <div className="flex items-center gap-2 mt-4 text-sm">
                    <span className="text-black tracking-widest"></span>
                    <span className="text-gray-600"></span>
                </div>
                <div className="flex items-center gap-3 mt-5">
                    <span className="text-4xl font-bold"></span>
                    <span className="text-gray-400 line-through"></span>
                    <span className="text-gray-400 line-through"></span>
                    <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded"></span>   
                </div>
                <p className="text-gray-600 mt-5 leading-relaxed text-sm max-w-md"></p>
                <p className="text-gray-600 mt-5 leading-relaxed text-sm max-w-md"></p>
                <div className="flex justify-between items-center mt-8 text-sm">
                    <p><span className="font-semibold">Size:</span></p>
                    <a href="#" className="text-gray-500 underline"></a>
                </div>
                <div className="flex gap-3 mt-3">
                    <button className="w-14 h-12 border rounded-lg text-sm font-medium"></button>
                </div>
                <div className="flex gap-3 mt-8">
                    <button className="flex-1 bg-black text-white h-14 rounded-xl font-semibold hover:bg-gray-800 transition"></button>
                    <button className="w-14 h-14 border rounded-xl text-xl hover:bg-gray-50">♡</button>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t text-xs">
                    <div>
                        <p className="font-semibold text-sm"></p>
                        <p className="text-gray-500 mt-1"></p>
                    </div>
                    <div>
                        <p className="font-semibold text-sm"></p>
                        <p className="text-gray-500 mt-1"></p>
                    </div>
                    <div>
                        <p className="font-semibold text-sm"></p>
                        <p className="text-gray-500 mt-1"></p>
                    </div>
                    </div>
            </div>
            </main>

            <section className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-10">
                <div>
                    <div className="flex gap-8 border-b text-sm font-medium text-gray-400" id="tabs">
                        <button className="tab pb-3 -mb-px border-b-2 border-black text-black" data-tab="details"></button>
                        <button className="tab pb-3 -mb-px border-b-2 border-transparent hover:text-black" data-tab="materials"></button>
                        <button className="tab pb-3 -mb-px border-b-2 border-transparent hover:text-black" data-tab="size"></button>
                        <button className="tab pb-3 -mb-px border-b-2 border-transparent hover:text-black" data-tab="shipping"></button>
                    </div>
                    <div className="panel mt-8">
                        <p className="text-black leading-relaxed"></p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                <span className="font-semibold"></span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                <span className="font-semibold"></span>
                            </li>
                        </ul>
                    </div>
                    <div className="panel hidden mt-8 text-black"></div>
                    <div className="panel hidden mt-8 text-black"></div>
                    <div className="panel hidden mt-8 text-black"></div>
                </div>               
            </section>
        </>
    )
}