import { Link } from "react-router-dom";

export function Banner(){

    return(

        // Banner slider
        <section className="relative overflow-hidden bg-emerald-800 text-white">
            
            <img data-slide src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1600"
                alt="" className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 opacity-100" />
            <img data-slide src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1600"
                alt="" className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 opacity-0" />

            {/* <!-- Dark overlay for text readability --> */}
            <div className="absolute inset-0 bg-black/40"></div>

            
            <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-32">
                <h1 id="slide-title" className="max-w-xl text-3xl font-bold md:text-5xl">Autumn Collection '26</h1>
                <p id="slide-text" className="mt-4 max-w-md text-emerald-100">
                Elevate your everyday wardrobe with timeless pieces, made for the season.
                </p>
                <Link to="/" className="mt-8 inline-block rounded-md bg-white px-6 py-3 font-semibold text-emerald-800 hover:bg-emerald-50">
                Shop now
                </Link>

               
                <div className="mt-10 flex items-center gap-4">
                <button id="prev" aria-label="Previous slide"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40">‹</button>
                <span id="counter" className="text-sm">1 / 2</span>
                <button id="next" aria-label="Next slide"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40">›</button>
                </div>
            </div>
            </section>

    )
}