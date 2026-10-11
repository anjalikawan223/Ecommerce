import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";

export function AccountSet(){
    return(
        <>
        <Header />
        <section className="min-h-screen bg-[#f5f3ed] flex items-center justify-center p-2">
            <div className="w-full max-w-[1400px] h-[450px] bg-[#faf9f5] rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row gap-4 ">
                <div className="w-[64%] px-12 py-18">
                    <div className="flex items-start w-[360px] mb-7">
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
                                <span className="text-[12px] text-black mt-2 whitespace-nowrap">Verify email</span>
                            </div>

                            <div className="h-px bg-gray-400 flex-1 mx-3 mb-5"></div>
                        </div>
                        <div className="flex items-center flex-1">
                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded-full border border-gray-600 text-black text-[10px] flex items-center justify-center">3</div>
                                <span className="text-[12px] text-black mt-2 whitespace-nowrap">Your style</span>
                            </div>

                            <div className="h-px bg-gray-400 flex-1 mx-3 mb-5"></div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-black text-white text-[10px] flex items-center justify-center">4</div>
                            <span className="mt-2 text-[12px] font-semibold text-black whitespace-nowrap">All set</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <p className="text-[10px] font-semibold tracking-[0.15em] text-black">
                                JOIN THE VOGUE COMMUNITY</p>
                            <div className="w-8 h-px bg-gray-600"></div>
                        </div>
                        <h2 className="text-5xl sm:text-4xl font-bold tracking-tight text-black">You're All Set!</h2>
                        <p className="text-base text-black mt-2 max-w-[500px] leading-relaxed">Welcome to Vogue. Your account is ready and<br className="hidden sm:block" />
                            style just for you
                        </p>
                    </div>
                    <button className="mt-6 w-[180px] h-[35px] rounded-full bg-[#171b1f] text-white text-[10px] font-medium flex items-center justify-center gap-4 hover:bg-black transition">
                        Start Shopping
                        <span className="text-sm">→</span>
                    </button>
                    <a href="#" className="inline-block mt-4 text-[9px] text-gray-500 underline hover:text-black">Go to your account</a>
                </div>

                {/* CENTER WELCOME */}
                <div className="w-[22%] flex flex-col items-center justify-center relative">
                    {/* Shopping Bag Icon  */}
                    <div className="mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-[#20252a]" fill="none" viewBox="0 0 64 64" stroke="currentColor" stroke-width="1.5"> 
                            <path d="M19 20h26l3 32H16l3-32Z"/>
                            <path d="M25 20v-5a7 7 0 0 1 14 0v5"/>

                            {/* Small decorative lines  */}
                            <path d="M10 12l-5-5" />
                            <path d="M32 5V0" />
                            <path d="M54 12l5-5" />
                            <path d="M8 29H2" />
                            <path d="M56 29h6" />
                        </svg>
                    </div>
                    {/* Welcome Text */}
                    <div className="text-center font-serif italic text-[20px] leading-tight text-[#25282a]">
                        Welcome<br />to Vogue!
                    </div>
                    {/* Underline */}
                    <div className="w-[85px] h-[1.5px] bg-[#25282a] rotate-[-20deg] mt-3"></div>
                </div>

                {/* RIGHT IMAGE  */}
                <div className="w-[30%] relative overflow-hidden ">
                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f" alt="Fashion model wearing yellow" className="absolute inset-0 w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
                </div>

            </div>
        </section>
        <Footer />
        </>
    )
}