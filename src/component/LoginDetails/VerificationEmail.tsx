import { Link } from "react-router-dom";
import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";

export function VerificationEmail(){

    return(
        <>
        <Header/>
            <main className="min-h-screen bg-[#f5f3ed] flex items-center justify-center p-4">
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
                                    <div className="w-6 h-6 rounded-full bg-black text-white text-[10px] flex items-center justify-center">2</div>
                                    <span className="text-[12px] font-semibold text-black mt-2 whitespace-nowrap">Verify email</span>
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
                                <div className="w-6 h-6 rounded-full border border-gray-600 text-black text-[10px] flex items-center justify-center">4</div>
                                <span className="mt-2 text-[12px] text-black whitespace-nowrap">All set</span>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <p className="text-[10px] font-semibold tracking-[0.15em] text-black">Join the vogue Community</p>
                                <div className="w-8 h-px bg-gray-600"></div>
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">Verify your email</h1>
                        </div>

                        <div className="mt-10 space-y-4">
                            <p className="mt-3 text-xl text-mute">We've send a 6-digit code to.</p>
                            <p className="underline underline-offset-2 hover:text-ink">abcd123@gmail.con</p>

                            {/* OTP inputs */}
                            <div className="mt-8 flex gap-2.5">
                                <input type="text" aria-label="Digit 1" className="h-12 w-11 rounded-md border border-ink bg-transparent text-center text-lg font-semibold outline-none focus:ring-2 focus:ring-ink/20" />
                                <input type="text" aria-label="Digit 2" className="h-12 w-11 rounded-md border border-line bg-white/30 text-center text-lg font-semibold outline-none focus:border-ink focus:ring-2 focus:ring-ink/20" />
                                <input type="text" aria-label="Digit 3" className="h-12 w-11 rounded-md border border-line bg-white/30 text-center text-lg font-semibold outline-none focus:border-ink focus:ring-2 focus:ring-ink/20" />
                                <input type="text" aria-label="Digit 4" className="h-12 w-11 rounded-md border border-line bg-white/30 text-center text-lg font-semibold outline-none focus:border-ink focus:ring-2 focus:ring-ink/20" />
                                <input type="text" aria-label="Digit 5" className="h-12 w-11 rounded-md border border-line bg-white/30 text-center text-lg font-semibold outline-none focus:border-ink focus:ring-2 focus:ring-ink/20" />
                                <input type="text" aria-label="Digit 6" className="h-12 w-11 rounded-md border border-line bg-white/30 text-center text-lg font-semibold outline-none focus:border-ink focus:ring-2 focus:ring-ink/20" />
                            </div>
                            {/* <!-- Strength --> */}
                            <div className="mt-3 flex items-center gap-4">
                                <p className="mt-4 text-sm text-mute">Didn't receive the code? <a href="#" className="underline underline-offset-2 hover:text-ink"> Resend</a> (00.45)
                                </p>
                            </div>

                            <p id="form-error" className="hidden text-sm text-red-700" role="alert"></p>
                            <Link to="/style">
                            <button type="submit"
                                className="mt-4 inline-flex h-14 w-full max-w-[290px] bg-black items-center justify-center gap-3 rounded-full bg-ink px-8 font-medium text-white shadow-lg shadow-ink/20 transition hover:bg-ink/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper">
                                Continue
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                            </button>
                            </Link>

                            <p className="mt-8 text-sm text-mute">
                            <a href="/login" className="underline underline-offset-2 hover:text-ink">Use a different email address</a>
                            </p>
                            
                        </div>
                         
                    </div>
                
                    {/* <!-- Image side --> */} 
                    <div className="w-[30%] flex flex-col items-center justify-center relative" aria-hidden="true">
                        <div className="relative">
                            <svg viewBox="0 0 160 110" className="w-full" fill="none">
                                <path d="M12 98 L28 20 L150 8 L136 92 Z" fill="#e6e1d8" stroke="#d3cec3" />
                                <path d="M28 20 L84 66 L150 8" stroke="#cfc9bd" stroke-width="1.5" />
                                <path d="M12 98 L66 54 M136 92 L96 58" stroke="#d3cec3" />
                            </svg>
                            <span className="absolute -top-3 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-amber-200 shadow">
                                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                            </span>
                        </div>
                        <p className="mt-3 -rotate-6 text-right font-script text-lg leading-none">Check your inbox</p>
                        <svg viewBox="0 0 120 12" className="ml-auto mt-1 w-28" fill="none" stroke="#111214" stroke-width="1.5" stroke-linecap="round"><path d="M2 9 Q60 0 118 4" /></svg>
                    </div>
                </div>

            </main>
        <Footer />
        </>
    )
}