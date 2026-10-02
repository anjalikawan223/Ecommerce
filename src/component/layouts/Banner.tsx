import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeDetails, type Slider } from "../../api/content";

export function Banner(){
    const[sliders, setSliders]=useState<Slider[]>([]);
    const[loading, setLoading]=useState<boolean>(true);
    const[current, setCurrent]= useState<number>(0);

    useEffect(() =>{

        const fetchContent= async () => {
            try{
                setLoading(true);
                const result = await HomeDetails();
                // console.log(result)
                setSliders(result.data.heroSlides);   
            }catch(error){
                console.log("An unexpected error occurred")
            
            }finally{
                setLoading(false);
            }
        }
        fetchContent();
    },[])

    const next = () => setCurrent((current + 1) % sliders.length);
    const prev = () => setCurrent((current - 1 + sliders.length) % sliders.length);
  
    if (loading) {
        return <p>Loading.....</p>;
    }

    console.log(sliders)

    if (sliders.length === 0) {
        return null;
    }
  
    const slider = sliders[current];

    return(
        // Banner slider
        <section className="relative overflow-hidden bg-emerald-800 text-white">
            
            {sliders.map((item, index) => (
                <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
                    index === current ? "opacity-100" : "opacity-0" }`}
                />
            ))}
                {/* <img  src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1600"
                alt="" className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 opacity-100" />
            <img  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1600"
                alt="" className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 opacity-0" /> */}

            {/* <!-- Dark overlay for text readability --> */}
            <div className="absolute inset-0 bg-black/40"></div>

            
            <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-32">
                <h1 className="max-w-xl text-3xl font-bold md:text-5xl">{slider.title}</h1>
                <p  className="mt-4 max-w-md text-emerald-100">
                {slider.description}
                </p>
                <Link to="/" className="mt-8 inline-block rounded-md bg-white px-6 py-3 font-semibold text-emerald-800 hover:bg-emerald-50">
                Shop now
                </Link>

               
                <div className="mt-10 flex items-center gap-4">
                <button  onClick={prev} aria-label="Previous slide"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40">‹</button>
                <span  className="text-sm">{current + 1} / {sliders.length}</span>
                <button onClick={next} aria-label="Next slide"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40">›</button>
                </div>
            </div>
            </section>

    )
}