export function HomeSkeleton(){

    return(
        <section className="relative bg-emerald-800 min-h-[100svh] w-full isolate flex">
            <div className="absolute inset-0 bg-emerald-700 animate-pulse"></div>
            <div className="relative z-10 w-full min-h-[100svh] flex items-center">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-20">
                    {/* Heading */}
                    <div className="h-10 w-3/4 max-w-xl rounded bg-emerald-600 animate-pulse md:h-14"></div>
            
                    {/* Description */}
                    <div className="mt-5 space-y-3">
                        <div className="h-4 w-96 max-w-full rounded bg-emerald-600 animate-pulse"></div>
                        <div className="h-4 w-72 max-w-full rounded bg-emerald-600 animate-pulse"></div>
                    </div>
            
                    {/* Button */}
                    <div className="mt-8 h-12 w-32 rounded-md bg-emerald-600 animate-pulse"></div>
            
                    {/* Controls */}
                    <div className="mt-10 flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-emerald-600 animate-pulse"></div>
            
                        <div className="h-4 w-20 rounded bg-emerald-600 animate-pulse"></div>
            
                        <div className="h-10 w-10 rounded-full bg-emerald-600 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export function ProductSkeleton(){

    return(

        <section className="max-w-7xl mx-auto px-5 py-10">
            {/* Header Skeleton */}
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <div className="h-8 w-75 rounded bg-gray-200 animate-pulse"></div>
                    <div className="mt-3 h-4 w-96 max-w-full rounded bg-gray-200 animate-pulse"></div>
                </div>

                <div className="h-5 w-20 rounded bg-gray-200 animate-pulse"></div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {/* Card 1 */}
                <div className="rounded-2xl border border-gray-200 p-4">
                    {/* Image */}
                    <div className="h-96 w-full rounded-2xl bg-gray-200 animate-pulse"></div>

                    {/* Content */}
                    <div className="pt-4">
                        <div className="h-4 w-24 rounded bg-gray-200 animate-pulse"></div>

                        <div className="my-3 h-5 w-3/4 rounded bg-gray-200 animate-pulse"></div>

                        <div className="h-6 w-28 rounded bg-gray-200 animate-pulse"></div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl border border-gray-200 p-4">
                    <div className="h-96 w-full rounded-2xl bg-gray-200 animate-pulse"></div>

                    <div className="pt-4">
                        <div className="h-4 w-24 rounded bg-gray-200 animate-pulse"></div>
                        <div className="my-3 h-5 w-3/4 rounded bg-gray-200 animate-pulse"></div>
                        <div className="h-6 w-28 rounded bg-gray-200 animate-pulse"></div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="rounded-2xl border border-gray-200 p-4">
                    <div className="h-96 w-full rounded-2xl bg-gray-200 animate-pulse"></div>

                    <div className="pt-4">
                        <div className="h-4 w-24 rounded bg-gray-200 animate-pulse"></div>
                        <div className="my-3 h-5 w-3/4 rounded bg-gray-200 animate-pulse"></div>
                        <div className="h-6 w-28 rounded bg-gray-200 animate-pulse"></div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="rounded-2xl border border-gray-200 p-4">
                    <div className="h-96 w-full rounded-2xl bg-gray-200 animate-pulse"></div>

                    <div className="pt-4">
                        <div className="h-4 w-24 rounded bg-gray-200 animate-pulse"></div>
                        <div className="my-3 h-5 w-3/4 rounded bg-gray-200 animate-pulse"></div>
                        <div className="h-6 w-28 rounded bg-gray-200 animate-pulse"></div>
                    </div>
                </div>

            </div>
        </section> 
    )
}