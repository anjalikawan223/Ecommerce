export function ProductContentSkeleton(){
    return(
        <>
            <main className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-10">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-3 ">
                        <div className="w-20 h-24 bg-gray-300 rounded-lg animate-pulse"></div>
                    </div>
                    <div className="flex-1">
                        <div className="w-full h-[550px] bg-gray-300 rounded-2xl animate-pulse"/>
                    </div>      
                </div>
                <div className="ps-12">
                    <div className=" bg-gray-300 rounded w-32 h-7 animate-pulse"></div>
                    <div className=" mt-4 h-16 w-3/4 rounded bg-gray-300 animate-pulse"></div>
                    <div className="flex items-center gap-2 mt-4 text-sm">
                        <span className="rounded bg-gray-300 w-24 h-4 animate-pulse"></span>
                        <span className="rounded bg-gray-300 h-4 w-20 animate-pulse"></span>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <span className="rounded bg-gray-300 h-7 w-24 animate-pulse"></span>
                        <span className="rounded bg-gray-300 h-5 w-16 animate-pulse"></span>
                        <span className="h-5 w-12 bg-gray-300 rounded animate-pulse"></span>   
                    </div>
                    <p className=" mt-5 rounded bg-gray-300 animate-pulse h-4 w-24"></p>
                    <p className="mt-5 rounded bg-gray-300 animate-pulse h-12 w-full"></p>
                    <div className="flex justify-between items-center mt-8 text-sm ">
                        <p className="rounded bg-gray-300 animate-pulse h-4 w-28"></p>
                        <a href="#" className="rounded bg-gray-300 underline animate-pulse h-4 w-18"></a>
                    </div>
                    <div className="flex gap-3 mt-3">
                        <button className="w-14 h-12 rounded-lg bg-gray-300 animate-pulse"></button>
                    </div>
                    <div className="flex gap-3 mt-8">
                        <button className=" animate-pulse bg-gray-300 h-14 rounded-xl w-full"></button>
                        <button className="w-14 h-14 bg-gray-300 rounded-xl text-xl animate-pulse"></button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t text-xs">
                        <div>
                            <p className="animate-pulse rounded bg-gray-300 h-4 w-16"></p>
                            <p className="rounded bg-gray-300 animate-pulse mt-1 h-2 w-18"></p>
                        </div>
                        <div>
                            <p className="animate-pulse rounded bg-gray-300 h-4 w-16"></p>
                            <p className="rounded bg-gray-300 animate-pulse mt-1 h-2 w-18"></p>
                        </div>
                        <div>
                            <p className="rounded bg-gray-300 animate-pulse h-4 w-16"></p>
                            <p className="rounded bg-gray-300 mt-1 animate-pulse h-2 w-18"></p>
                        </div>
                    </div>
                </div>
            </main>

            <section className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-10">
                <div>
                    <div className="flex gap-8 border-b text-sm font-medium py-4">
                        <button className="rounded bg-gray-300 animate-pulse h-6 w-16 " data-tab="details"></button>
                        <button className="rounded bg-gray-300 animate-pulse h-6 w-16" data-tab="materials"></button>
                        <button className="rounded bg-gray-300 animate-pulse h-6 w-16" data-tab="size"></button>
                        <button className="rounded bg-gray-300 animate-pulse h-6 w-24" data-tab="shipping"></button>
                    </div>
                    <div className="panel mt-8">
                        <p className="rounded h-16 w-3/4 bg-gray-300 animate-pulse"></p>
                    </div>
                    <div className="mt-8 rounded bg-gray-300 animate-pulse"></div>
                    <div className="mt-8 rounded bg-gray-300 animate-pulse"></div>
                    <div className="mt-8 rounded bg-gray-300 animate-pulse"></div>
                </div>      
                <div className="w-full h-[400px] rounded-2xl bg-gray-400 animate-pulse"></div>         
            </section>
        </>
    )
}