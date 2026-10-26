import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeDetails, type Slider } from "../../api/content";
import { HomeSkeleton } from "../uiState/HomeSkeleton";

export function Banner() {
    const [sliders, setSliders] = useState<Slider[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [current, setCurrent] = useState<number>(0);

    useEffect(() => {

        const fetchContent = async () => {
            try {
                setLoading(true);
                const result = await HomeDetails();
                setSliders(result.data.heroSlides);   
            }catch(error){
                console.log("An unexpected error occurred")

            } finally {
                setLoading(false);
            }
        }
        fetchContent();
    }, [])

    const next = () => setCurrent((current + 1) % sliders.length);
    const prev = () => setCurrent((current - 1 + sliders.length) % sliders.length);

    if (loading) {
        return (
          <HomeSkeleton />
        )
    }
    if (sliders.length === 0) {
        return null;
    }

    const slider = sliders[current];

    return (
        // Banner slider
        <section className="relative isolate flex overflow-hidden bg-emerald-800 text-white w-full min-h-[100svh]">
            {sliders.map((item, index) => (
                <img
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`}
                />
            ))}

            {/* <!-- Dark overlay for text readability --> */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Hero content */}
            <div className="w-full relative z-10 min-h-[100svh] flex items-center">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-20">
                    <h1 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">{slider.title}</h1>
                    <p  className="mt-4 max-w-md text-sm leading-relaxed text-emerald-100 sm:text-base md:text-lg">
                    {slider.description}
                    </p>
                    <Link to="/" className="mt-6 inline-block rounded-md bg-white px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 sm:mt-8 sm:px-6 sm:text-base">
                    Shop now
                    </Link>

                
                    <div className="mt-8 flex items-center gap-3 sm:mt-10 sm:gap-4">
                        <button  onClick={prev} aria-label="Previous slide"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg transition hover:bg-white/40 sm:h-10 sm:w-10">‹</button>
                        <span  className="text-sm sm:text-sm">{current + 1} / {sliders.length}</span>
                        <button onClick={next} aria-label="Next slide"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg transition hover:bg-white/40 sm:h-10 sm:w-10">›</button>
                    </div>
                </div>    
            </div>
        </section>

    )
}